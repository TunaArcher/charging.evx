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
        echo view('/app', $data);
    }
}