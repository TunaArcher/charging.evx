var html5QrcodeScanner;

(function ($) {});

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

//Custom design form example
var stepsFormGoNext = $(".tab-charger").steps({
  headerTag: "h6",
  bodyTag: "section",
  transitionEffect: "fade",
  titleTemplate: '<span class="step">#index#</span> #title#',
  // labels: {
  //   finish: "Submit",
  // },
  onInit: function (event, current) {
    $(".actions > ul > li:first-child").attr("style", "display:none");
    $(".actions > ul > li:nth-child(2)").attr("style", "display:none");
  },
  onStepChanged: function (event, current, next) {
    if (current > 1) {
      $(".actions > ul > li:first-child").attr("style", "");
      
    } else if (current > 2 && current < 3) {
         $(".actions > ul > li:nth-child(2)").attr("style", "");
    }else {
      $(".actions > ul > li:first-child").attr("style", "display:none");
      // $(".actions > ul > li:nth-child(2)").attr("style", "display:none");
    }
  },
  onFinished: function (event, currentIndex) {
    swal(
      "Form Submitted!",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed."
    );
  },
});

var ev_chargepoint_name;
var ev_connector_id;

$("#click-scan").click(function () {
  document.getElementById("scan_station").style.display = "none";
  document.getElementById("scan_page").style.display = "block";
  document.getElementById("step_station").style.display = "none";

  html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 350,
  });
  html5QrcodeScanner.render(onScanSuccess);
});

function searchStation(eve) {
  if (event.key === "Enter") {
    let evxstation = eve.value;

    let dataObj = {
      evxstation,
    };

    $.ajax({
      type: "POST",
      url: `${serverUrl}/charging/GetStation`,
      contentType: "application/json; charset=utf-8;",
      processData: false,
      data: JSON.stringify(dataObj),
      success: function (res) {
        if (res.success === 1) {
          document.getElementById("scan_station").style.display = "none";
          document.getElementById("scan_page").style.display = "none";
          document.getElementById("step_station").style.display = "block";

          $("#cp").html(
            "<span class='float-end fw-bold text-primary' >" +
              res.data.charge_box_id +
              "</span></p>"
          );

          setInterval(function () {
            $(".blink").fadeToggle();
          }, 100);

          getConnectByChargePoint(res.data.charge_box_id);
        } else {
        }
      },
      error: function (res) {},
    });
  }
}

function getConnectByChargePoint(ev_cp) {
  let dataObj = {
    ev_cp,
  };

  ev_chargepoint_name = ev_cp;

  $.ajax({
    type: "POST",
    url: `${serverUrl}/charging/getConnecter`,
    contentType: "application/json; charset=utf-8;",
    processData: false,
    data: JSON.stringify(dataObj),
    success: function (res) {
      if (res.success === 1) {
        var html_box_connector = "";

        for (let index = 0; index < res.data.length; index++) {
          html_box_connector +=
            '<div class="col-sm-12 text-center mb-2 border">' +
            '<a href="javascript:void(0)" onclick="clickSelectConnector(' +
            res.data[index].connector_pk.toString() +
            ');" class="bg-hover-a-link">' +
            '<div class="card">' +
            '<div class="card-body py-2 small" style="padding-left: 5px;padding-right: 5px;">' +
            '<p class="mb-2">' +
            res.data[index].charge_box_id +
            " #" +
            res.data[index].connector_id +
            "</p>" +
            '<p class="mb-1">AC Type ' +
            res.data[index].connector_id +
            "  (30.0 kW)</p>" +
            '<img src="https://geonine.io/evpublic/connector/4.png" style="width: 100%; max-width: 80px;">' +
            '<p class="m-0">' +
            "Service Charge: XX THB/kWh" +
            "</p>" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</div>";
        }

       

        $(".connectors_by_cp").html(html_box_connector);
      } else {
      }
    },
    error: function (res) {
      console.log(res);
    },
  });
}

function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  document.getElementById("scan_station").style.display = "none";
  document.getElementById("scan_page").style.display = "none";
  document.getElementById("step_station").style.display = "block";
  html5QrcodeScanner.clear();
}

function clickSelectConnector(connector_pk) {
  let dataObj = {
    connector_pk,
    ev_chargepoint_name,
  };

  $.ajax({
    type: "POST",
    url: `${serverUrl}/charging/getStatusConnecter`,
    contentType: "application/json; charset=utf-8;",
    processData: false,
    data: JSON.stringify(dataObj),
    success: function (res) {
      if (res.success === 1) {
        if (res.data.status != "Preparing" && res.data.status != "Charging") {
          $("#ev_description").html(
            '<span class="float-end text-primary fw-bold" id="">' +
            res.data.description +
              "</span></p>"
          );
          $("#ev_cp").html(
            '<span class="float-end text-primary fw-bold" id="">' +
              ev_chargepoint_name +
              " #" +
              res.data.connector_id +
              "</span></p>"
          );
          stepsFormGoNext.steps("next");
          setInterval(move, 1000);
        }
      } else {
        Swal.fire({
          icon: "warning",
          text: `${res.message}`,
          timer: "2000",
          heightAuto: false,
        });
      }
    },
    error: function (res) {
      console.log(res);
    },
  });
  // stepsFormGoNext.steps("next");
}
