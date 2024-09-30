<?php

namespace App\Libraries;

class Ocpp
{
    private $http;
    private $headers;
    private $credential = [];
    private $debug = false;

    public function __construct($credential = [])
    {
        $this->headers = [
            'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        ];

        $this->credential = [];

        $this->http = new \GuzzleHttp\Client([
            'headers' => $this->headers,
            'cookies' => true
        ]);
    }

    public function setDebug($value)
    {
        $this->debug = $value;
    }

    private function handleLogin()
    {
        try {

            $endPoint = 'http://209.97.162.177:8180/steve/manager/signin';

            $response = $this->http->request('POST', $endPoint, [
                'query' => [
                    'username' => 'admin',
                    'password' => '1234'
                ],
                // 'allow_redirects' => false
            ]);

            // TODO:: Handle
            return true;

            px($response->getBody()->getContents());

            $data = json_decode($response->getBody());

            $statusCode = isset($data->code) ? (int) $data->code : false;

            if ($statusCode === 0) return true;

            return false;
        } catch (\Exception $e) {

            log_message('error', 'Ocpp::handleLogin error {message}', ['message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    public function login()
    {
        $sessionStave = $this->checkSession();

        if (!$sessionStave) {

            $loginSuccess = $this->handleLogin();

            if (!$loginSuccess) $loginSuccess = $this->handleLogin();
        }

        return $this;
    }

    public function checkSession()
    {
        try {

            // Handle ยิงไปสักหน้านึงเพื่อเช็คว่าอยู่ในระบบไหม
            // เช่นหน้า Dashboard
            
            return false;
             // return true;

        } catch (\Exception $e) {
            return false;
        }
    }

    public function remoteStart()
    {
        try {

           echo 'remoteStart !!';

        } catch (\Exception $e) {

            log_message('error', 'Ocpp::remoteStart error {message}', ['message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    public function remoteStop()
    {
        try {

           echo 'remoteStop !!';
           
        } catch (\Exception $e) {

            log_message('error', 'Ocpp::remoteStop error {message}', ['message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }
}
