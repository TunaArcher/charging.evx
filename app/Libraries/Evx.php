<?php

namespace App\Libraries;

class Evx
{
    private $http;
    private $baseURL;
    private $headers;
    private $credential = [];
    private $debug = false;

    public function __construct($credential = [])
    {
        $this->headers = [
            'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        ];

        $this->baseURL = $credential['baseUrl'];

        $this->credential = [
            'system'        => $credential['system'],
            'key'           => $credential['key']
        ];

        $this->http = new \GuzzleHttp\Client([
            'headers' => $this->headers,
        ]);
    }

    public function setDebug($value)
    {
        $this->debug = $value;
    }

    /*********************************************************************
     * USER
     */

    // Create User
    public function createUser($data)
    {
        try {
            $response = $this->http->request('POST', $this->baseURL . '/user/create/', [
                'json' => [
                    'phone' => $data['phone'],
                    'password' => $data['password'],
                    'fullname' => $data['fullname'],
                    'email' => $data['email']
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 0) return true;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::createUser error {username} {message}', ['username' => $this->credential['agent'] . $data['username'], 'message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    // Get data User
    public function user($id)
    {
        try {
            $response = $this->http->request('GET', $this->baseURL . '/user/' . $id);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 0 || $statusCode === 200) return $data->data;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::user error {username} {message}', ['message' => 'message:' . $e->getMessage()]);

            return false;
        }
    }

    // Change Password    
    public function changePasswordUser($username, $password)
    {
        try {
            $response = $this->http->request('POST', $this->baseURL . '/user/changePassword/', [
                'json' => [
                    'username' => $username,
                    'password' => $password
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

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
            $response = $this->http->request('POST', $this->baseURL . '/user/update/', [
                'json' => [
                    'id' => $id,
                    'fullname' => $data['fullname']
                ]
            ]);

            $data = json_decode($response->getBody());

            $statusCode = isset($data->statusCode) ? (int) $data->statusCode : false;

            if ($statusCode === 0 || $statusCode === 200) return true;

            return false;
        } catch (\Exception $e) {
            log_message('error', 'EVX::updateUser error {message}', ['message' => 'message:' . $e->getMessage()]);
            return false;
        }
    }
}
