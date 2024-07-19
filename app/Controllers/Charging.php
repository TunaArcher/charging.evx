<?php

namespace App\Controllers;

class Charging extends BaseController
{
    public function __construct()
    {
        /*
        | -------------------------------------------------------------------------
        | SET ENVIRONMENT
        | -------------------------------------------------------------------------
        */

        /*
        | -------------------------------------------------------------------------
        | SET UTILITIES
        | -------------------------------------------------------------------------
        */

        // Model

    }

    public function index()
    {
        $data['content'] = 'charging/index';
        $data['title'] = 'Charging';
        $data['js_critical'] = ' 
            <script src="' . base_url('/assets/js/vendor.min.js') . '"></script>
            <script src="' . base_url('/assets/libs/jquery-steps/build/jquery.steps.min.js') . '"></script>
            <script src="' . base_url('/assets/libs/jquery-validation/dist/jquery.validate.min.js') . '"></script>
            <script src="' . base_url('/assets/js/forms/form-wizard.js') . '"></script>
            <script src="' . base_url('/assets/js/apps/ecommerce.js') . '"></script>
        ';
        echo view('/app', $data);
    }
}
