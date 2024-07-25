var html5QrcodeScanner;

(function ($) {});

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

function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  document.getElementById("scan_station").style.display = "none";
  document.getElementById("scan_page").style.display = "none";
  document.getElementById("step_station").style.display = "block";
  html5QrcodeScanner.clear();
}
