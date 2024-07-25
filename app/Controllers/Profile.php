<?php

namespace App\Controllers;

class Profile extends BaseController
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
        $data['content'] = 'profile/index';
        $data['title'] = 'บัญชีผู้ใช้งาน';
        echo view('/app', $data);
    }

    public function history()
    {
        $data['content'] = 'profile/history';
        $data['title'] = 'ประวัติ';
        $data['css_critical'] = '<link rel="stylesheet" href="../assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css" />';
        $data['js_critical'] = '
            <script src="' . base_url('/assets/libs/datatables.net/js/jquery.dataTables.min.js') . '"></script>
            <script src="' . base_url('/assets/js/datatable/datatable-basic.init.js') . '"></script>
            <script src="' . base_url('/app/profile/history.js') . '"></script>
        ';
        echo view('/app', $data);
    }
}
