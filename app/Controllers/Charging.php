<?php

namespace App\Controllers;

use App\Libraries\Evx;

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
        $data['css_critical'] = '
        <link rel="stylesheet" href="../assets/libs/connectors.css" />
        ';
        $data['js_critical'] = ' 
            <script src="' . base_url('/assets/js/vendor.min.js') . '"></script>
            <script src="' . base_url('/assets/libs/jquery-steps/build/jquery.steps.min.js') . '"></script>
            <script src="' . base_url('/assets/libs/jquery-validation/dist/jquery.validate.min.js') . '"></script>
            <script src="' . base_url('/assets/libs/simplebar/dist/simplebar.min.js') . '"></script>
            <script src="' . base_url('/assets/js/forms/form-wizard.js') . '"></script>
            <script src="' . base_url('/assets/js/apps/ecommerce.js') . '"></script>  
            <script src="' . base_url('/assets/js/html5-qrcode.min.js') . '"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.17/dist/sweetalert2.all.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>
            <script src="' . base_url('/app/charging/index.js?v=' . time()) . '"></script>
        ';
        echo view('/app', $data);
    }

    public function getEVStation()
    {
        try {
            $status = 500;
            $response['success'] = 0;
            $response['message'] = '';

            if ($this->request->getMethod() != 'post') throw new \Exception('Invalid Credentials.');

            $requestPayload = $this->request->getJSON();
            $evxstation = $requestPayload->evxstation ?? null;

            if (!$evxstation) throw new \Exception('กรุณาตรวจสอบ EV Station');

            $data_station = $this->evxApi->getChargePointSteve(
                [
                    'charge_box_id' => $evxstation
                ]
            );

            if ($data_station) {
                // logger_store([
                //     'user_id' => session()->get('userID'),
                //     'username' => session()->get('username'),
                //     'event' => 'อัพเดท',
                //     'detail' => '[อัพเดท] ข้อมูลส่วนตัว',
                //     'ip' => $this->request->getIPAddress()
                // ]);
                $status = 200;
                $response['success'] = 1;
                $response['message'] = 'พบตู้สถานี';

                $response['data'] = $data_station;
            } else {
                $status = 200;
                $response['success'] = 0;
                $response['message'] = 'ไม่พบตู้สถานี';
            }

            return $this->response
                ->setStatusCode($status)
                ->setContentType('application/json')
                ->setJSON($response);
        } catch (\Exception $e) {
            echo $e->getMessage() . ' ' . $e->getLine();
        }
    }

    public function getEVStationConnector()
    {
        try {
            $status = 500;
            $response['success'] = 0;
            $response['message'] = '';

            if ($this->request->getMethod() != 'post') throw new \Exception('Invalid Credentials.');

            $requestPayload = $this->request->getJSON();
            $ev_cp = $requestPayload->ev_cp ?? null;

            if (!$ev_cp) throw new \Exception('กรุณาตรวจสอบ CP ID');

            $data_station = $this->evxApi->getConnectorSteve(
                [
                    'charge_box_id' => $ev_cp,
                ]
            );

            if ($data_station) {
                // logger_store([
                //     'user_id' => session()->get('userID'),
                //     'username' => session()->get('username'),
                //     'event' => 'อัพเดท',
                //     'detail' => '[อัพเดท] ข้อมูลส่วนตัว',
                //     'ip' => $this->request->getIPAddress()
                // ]);
                $status = 200;
                $response['success'] = 1;
                $response['message'] = 'พบตู้สถานี';

                $response['data'] = $data_station;
            } else {
                $status = 200;
                $response['success'] = 0;
                $response['message'] = 'ไม่พบตู้สถานี';
            }

            return $this->response
                ->setStatusCode($status)
                ->setContentType('application/json')
                ->setJSON($response);
        } catch (\Exception $e) {
            echo $e->getMessage() . ' ' . $e->getLine();
        }
    }


    public function getEVStationConnectorStatus()
    {
        try {
            $status = 500;
            $response['success'] = 0;
            $response['message'] = '';

            if ($this->request->getMethod() != 'post') throw new \Exception('Invalid Credentials.');

            $requestPayload = $this->request->getJSON();
            $connector_pk = $requestPayload->connector_pk ?? null;
            $ev_chargepoint_name = $requestPayload->ev_chargepoint_name ?? null;


            if (!$ev_chargepoint_name || !$connector_pk) throw new \Exception('กรุณาตรวจสอบ CP ID');

            $data_station = $this->evxApi->getConnectorStatusSteve(
                [
                    'charge_box_id' => $ev_chargepoint_name,
                    'connector_pk' => $connector_pk,
                ]
            );

            if ($data_station) {
                // logger_store([
                //     'user_id' => session()->get('userID'),
                //     'username' => session()->get('username'),
                //     'event' => 'อัพเดท',
                //     'detail' => '[อัพเดท] ข้อมูลส่วนตัว',
                //     'ip' => $this->request->getIPAddress()
                // ]);
                $status = 200;
                $response['success'] = 1;
                $response['message'] = 'พบสถานะ';

                $response['data'] = $data_station;
            } else {
                $status = 200;
                $response['success'] = 0;
                $response['message'] = 'หัวชาร์จไม่ว่าง';
            }

            return $this->response
                ->setStatusCode($status)
                ->setContentType('application/json')
                ->setJSON($response);
        } catch (\Exception $e) {
            echo $e->getMessage() . ' ' . $e->getLine();
        }
    }
}
