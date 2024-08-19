<?php

namespace App\Libraries;

class Evx
{
    private $http;
    private $baseURL;
    private $headers;
    private $credentials = [];
    private $accessToken;
    private $refreshToken;
    private $debug = false;

    public function __construct($config)
    {
        $this->baseURL = $config['baseUrl'];

        $this->accessToken = $config['accessToken'] ?? '';
        $this->refreshToken = $config['refreshToken'] ?? '';

        $this->setCredentials($config['system'], $config['key']);

        $this->http = new \GuzzleHttp\Client();
    }

    private function setCredentials($system, $key)
    {
        $this->credentials['system'] = $system;
        $this->credentials['key'] = $key;
    }

    public function setDebug($value)
    {
        $this->debug = $value;
    }

    /*********************************************************************
     * 1. Authentication
     */

    // Login
    public function login($data)
    {
        try {

            $endPoint = $this->baseURL . '/auth/login/';

            $response = $this->http->request('POST', $endPoint, [
                'json' => [
                    'email' => $data['email'],
                    'password' => $data['password']
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 0 || $statusCode === 200) return $data;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::login error {username} {message}', ['username' => $data['email'], 'message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    // Token
    public function refreshToken()
    {
        try {

            $endPoint = $this->baseURL . '/auth/refresh/';

            $response = $this->http->request('POST', $endPoint, [
                'headers' => [
                    'Authorization' => "Bearer " . $this->refreshToken
                ],
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 0 || $statusCode === 200) {

                $this->accessToken = $data->accessToken;
                $this->refreshToken = $data->refreshToken;

                session()->set([
                    'accessToken' => $this->accessToken,
                    'refreshToken' => $this->refreshToken,
                ]);

                return true;
            }

            return redirect()->to('/logout');
        } catch (\Exception $e) {
            log_message('error', 'EVX::login error {username} {message}', ['refresh' => $this->credentials['agent'] . $data['username'], 'message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    /*********************************************************************
     * 2. User | ระบบสมาชิก
     */

    // Get data User
    public function user($id)
    {
        try {

            $endPoint = $this->baseURL . '/user/' . $id;

            $response = $this->http->request('GET', $endPoint, [
                'headers' => [
                    'Authorization' => "Bearer " . $this->accessToken
                ],
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 401) {

                $refreshToken = $this->refreshToken();

                if ($refreshToken) $this->user($id);
            }

            if ($statusCode === 0 || $statusCode === 200) return $data->data;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::user error {username} {message}', ['message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    // Create User
    public function createUser($data)
    {
        try {

            $endPoint = $this->baseURL . '/user/create/';

            $response = $this->http->request('POST', $endPoint, [
                'json' => [
                    'email' => $data['email'],
                    'password' => $data['password']
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 999) return $data;

            if ($statusCode === 0 || $statusCode === 201) return $data;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::createUser error {username} {message}', ['username' => $this->credentials['agent'] . $data['username'], 'message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    // Change Password    
    public function changePasswordUser($username, $password)
    {
        try {

            $endPoint = $this->baseURL . '/user/changePassword/';

            $response = $this->http->request('POST', $endPoint, [
                'headers' => [
                    'Authorization' => "Bearer " . $this->accessToken
                ],
                'json' => [
                    'username' => $username,
                    'password' => $password
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 401) {

                $refreshToken = $this->refreshToken();

                if ($refreshToken) $this->changePasswordUser($username, $password);
            }

            if ($statusCode === 0) return true;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::changePassword error {message}', ['message' => 'message:' . $e->getMessage()]);
            return false;
        }
    }

    // Update Detail
    public function updateUser($id, $data)
    {
        try {

            $endPoint = $this->baseURL . '/user/update/';

            $response = $this->http->request('POST', $endPoint, [
                'headers' => [
                    'Authorization' => "Bearer " . $this->accessToken
                ],
                'json' => [
                    'id' => $id,
                    'fullname' => $data['fullname']
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 401) {

                $refreshToken = $this->refreshToken();

                if ($refreshToken) $this->updateUser($id, $data);
            }

            if ($statusCode === 0 || $statusCode === 200) return true;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::updateUser error {message}', ['message' => 'message:' . $e->getMessage()]);
            return false;
        }
    }
}
