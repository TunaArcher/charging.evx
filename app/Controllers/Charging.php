<?php

namespace App\Controllers;

use App\Libraries\Evx;
use App\Libraries\Ocpp;

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

    public function getTransectionStartLast()
    {
        try {
            $status = 500;
            $response['success'] = 0;
            $response['message'] = '';

            if ($this->request->getMethod() != 'post') throw new \Exception('Invalid Credentials.');

            $requestPayload = $this->request->getJSON();
            $connector_pk = $requestPayload->connector_pk_pub ?? null;
            $id_tag = $requestPayload->idTag ?? null;


            if (!$connector_pk || !$id_tag) throw new \Exception('กรุณาตรวจสอบ CP ID');

            $data_station = $this->evxApi->getStartTransectionLast(
                [
                    'connector_pk' => $connector_pk,
                    'id_tag' => $id_tag,
                ]
            );

            if ($data_station) {

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

    public function remoteStart()
    {

        $requestPayload = $this->request->getJSON();
        $chargePointSelectList = $requestPayload->chargePointSelectList ?? null;
        $connectorId = $requestPayload->connectorId ?? null;
        $idTag = $requestPayload->idTag ?? null;

        $ocpp = new Ocpp();
        $response = $ocpp->login()->remoteStart(
            [
                'chargePointSelectList' => $chargePointSelectList,
                'connectorId' => $connectorId,
                'idTag' => $idTag
            ]
        );
        return $response;
    }

    public function remoteStop()
    {
        $requestPayload = $this->request->getJSON();
        $chargePointSelectList = $requestPayload->chargePointSelectList ?? null;
        $transactionId = $requestPayload->transactionId ?? null;

        $ocpp = new Ocpp();
        $response = $ocpp->login()->remoteStop(
            [
                'chargePointSelectList' => $chargePointSelectList,
                'transactionId' => $transactionId,
            ]
        );
        return $response;
    }

    public function transection_state()
    {

        try {
            $status = 500;
            $response['success'] = 0;
            $response['message'] = '';

            $requestPayload = $this->request->getJSON();
            $type = $requestPayload->type ?? null;
            $user_id = $requestPayload->userId ?? null;
            $credit = $requestPayload->credit ?? null;
            $transectionstate = $requestPayload->transectionstate ?? null;
            $cp_id = $requestPayload->ev_chargepoint_name ?? null;
            $connecter_id = $requestPayload->connectorId ?? null;
            $id_tag = $requestPayload->idTag ?? null;
            $transection_pk = $requestPayload->transactionId ?? null;
            $connecter_pk = $requestPayload->connector_pk_pub ?? null;

            $response = $this->evxApi->transection_state(
                [
                    "type" => $type,
                    "user_id" => $user_id,
                    "credit" => $credit,
                    "transectionstate" => $transectionstate,
                    "cp_id" => $cp_id,
                    "connecter_id" => $connecter_id,
                    "id_tag" => $id_tag,
                    "transection_pk" => $transection_pk,
                    "connecter_pk" => $connecter_pk
                ]
            );


            if ($response) {

                $status = 200;
                $response['success'] = 1;
                $response['message'] = 'พบสถานะ';

                $response['data'] = [];
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
