<!DOCTYPE html>
<html lang="en" dir="ltr" data-bs-theme="dark" data-color-theme="Blue_Theme" data-layout="vertical">

<head>
  <!-- Required meta tags -->
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Favicon icon-->
  <link rel="shortcut icon" type="image/png" href="../assets/images/logos/favicon.png" />

  <!-- Core Css -->
  <link rel="stylesheet" href="../assets/css/styles.css" />

  <title>EVX</title>
</head>

<body>
  <!-- Preloader -->
  <div class="preloader">
    <img src="<?php echo base_url('assets/images/logos/logo.png'); ?>" alt="loader" class="lds-ripple img-fluid" />
  </div>
  <div id="main-wrapper">
    <div class="position-relative overflow-hidden auth-bg min-vh-100 w-100 d-flex align-items-center justify-content-center">
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100 my-5 my-xl-0">
          <div class="col-md-6 d-flex flex-column justify-content-center">
            <div class="card mb-0 bg-body auth-login m-auto w-100">
              <div class="row gx-0">
                <!-- ------------------------------------------------- -->
                <!-- Part 1 -->
                <!-- ------------------------------------------------- -->
                <div class="col-xl-12 border-end">
                  <div class="row justify-content-center py-4">
                    <div class="col-lg-11">
                      <div class="card-body">
                        <a href="<?php echo base_url(); ?>" class="text-nowrap logo-img d-block mb-4 w-100">
                          <img src="<?php echo base_url('assets/images/logos/logo.png'); ?>" class="dark-logo" alt="Logo-Dark" />
                        </a>
                        <h2 class="lh-base mb-4">Let's get you signed in</h2>
                        <div class="row">
                          <div class="col-6 mb-2 mb-sm-0">
                            <a class="btn btn-white shadow-sm text-dark link-primary border fw-semibold d-flex align-items-center justify-content-center rounded-1 py-6" href="javascript:void(0)" role="button">
                              <img src="../assets/images/svgs/facebook-icon.svg" alt="matdash-img" class="img-fluid me-2" width="18" height="18">
                              <span class="d-none d-xxl-inline-flex"> Sign in with </span>&nbsp; Facebook
                            </a>
                          </div>
                          <div class="col-6">
                            <a class="btn btn-white shadow-sm text-dark link-primary border fw-semibold d-flex align-items-center justify-content-center rounded-1 py-6" href="javascript:void(0)" role="button">
                              <img src="../assets/images/svgs/google-icon.svg" alt="matdash-img" class="img-fluid me-2" width="18" height="18">
                              <span class="d-none d-xxl-inline-flex"> Sign in with </span>&nbsp; Google
                            </a>

                          </div>
                        </div>
                        <div class="position-relative text-center my-4">
                          <p class="mb-0 fs-12 px-3 d-inline-block bg-body z-index-5 position-relative">Or sign in with
                            email
                          </p>
                          <span class="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                        </div>
                        <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email" aria-describedby="emailHelp">
                          </div>
                          <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <a class="text-primary link-dark fs-2" href="../dark/authentication-forgot-password2.html">Forgot
                                Password ?</a>
                            </div>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password">
                          </div>
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                              <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked>
                              <label class="form-check-label text-dark" for="flexCheckChecked">
                                Keep me logged in
                              </label>
                            </div>
                          </div>
                          <a href="../dark/index.html" class="btn btn-dark w-100 py-8 mb-4 rounded-1">Sign In</a>
                          <div class="d-flex align-items-center">
                            <p class="fs-12 mb-0 fw-medium">Don’t have an account yet?</p>
                            <a class="text-primary fw-semibold ms-2" href="../dark/authentication-register2.html">Sign Up Now</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
                <!-- ------------------------------------------------- -->
                <!-- Part 2 -->
                <!-- ------------------------------------------------- -->
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dark-transparent sidebartoggler"></div>
  <!-- Import Js Files -->
  <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/libs/simplebar/dist/simplebar.min.js"></script>
  <script src="../assets/js/theme/app.dark.init.js"></script>
  <script src="../assets/js/theme/theme.js"></script>
  <script src="../assets/js/theme/app.min.js"></script>

  <!-- solar icons -->
  <script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>
</body>

</html>