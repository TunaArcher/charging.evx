<?php

namespace App\Controllers;

use App\Models\usersettingStatusModel;

class Authentication extends BaseController
{

    public function login()
    {
        $status = 500;
        $response['success'] = 0;
        $response['message'] = '';

        try {

            // ============================================== TEST

            $userID = 2;
            $UserLoginDetailModel = new \App\Models\UserLoginDetailModel();
            $userloginDetailID = $UserLoginDetailModel->insertuserLoginDetail([
                'user_id' => $userID
            ]);

            session()->set([
                'userID' => $userID,
                'username' => 'user',
                'thumbnail' => '',
                'isUserLoggedIn' => true,
                'login_detail_id' => $userloginDetailID
            ]);

            $status = 200;
            $response['success'] = 1;
            $response['message'] = 'เข้าสู่ระบบสำเร็จ';

            $response['redirect_to'] = base_url('/charging/index');

            return $this->response
                ->setStatusCode($status)
                ->setContentType('application/json')
                ->setJSON($response);
            // ============================================== TEST


            if ($this->request->getMethod() != 'post') throw new \Exception('Invalid Credentials.');

            $UserModel = new \App\Models\UserModel();
            $UserLoginDetailModel = new \App\Models\UserLoginDetailModel();

            $requestPayload = $this->request->getJSON();
            $username = $requestPayload->username ?? null;
            $password = $requestPayload->password ?? null;

            if (!$username || !$password) throw new \Exception('กรุณาตรวจสอบ username หรือ password ของท่าน');

            $users = $UserModel->getUser($username);

            if ($users) {

                foreach ($users as $user) {

                    if ($user->login_fail < 5) {

                        if (password_verify($password, $user->password)) {

                            $UserModel->updateuserByID($user->id, ['login_fail' => 0]);

                            $userloginDetailID = $UserLoginDetailModel->insertuserLoginDetail([
                                'user_id' => $user->id
                            ]);

                            session()->set([
                                'userID' => $user->id,
                                'username' => $user->username,
                                'thumbnail' => $user->thumbnail,
                                'isuserLoggedIn' => true,
                                'login_detail_id' => $userloginDetailID
                            ]);

                            logger_store([
                                'user_id' => $user->id,
                                'username' => $user->username,
                                'event' => 'เข้าสู่ระบบ',
                                'detail' => 'เข้าสู่ระบบ EVX',
                                'ip' => $this->request->getIPAddress()
                            ]);

                            $status = 200;
                            $response['success'] = 1;
                            $response['message'] = 'เข้าสู่ระบบสำเร็จ';

                            $response['redirect_to'] = base_url('/charging/index');
                        } else {
                            $missedTotal = $user->login_fail + 1;
                            $UserModel->updateuserByID($user->id, ['login_fail' => $missedTotal]);
                            throw new \Exception('กรุณาตรวจสอบ username หรือ password ของท่าน ' . "$missedTotal/5");
                        }
                    } else {
                        throw new \Exception('User ของท่านถูกล็อค');
                    }
                }
            } else {
                throw new \Exception('กรุณาตรวจสอบ username หรือ password ของท่าน');
            }
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
        }

        return $this->response
            ->setStatusCode($status)
            ->setContentType('application/json')
            ->setJSON($response);
    }

    public function loginFB()
    {
        $data = [];
        $facebook = new \Facebook\Facebook([
            'app_id' => '1047735223732919',
            'app_secret' => 'a6f1f3a6e9b0c150ee28b7ba69a0c851',
            'default_graph_version' => 'v2.3'
        ]);

        $fb_helper = $facebook->getRedirectLoginHelper();
        if ($this->request->getVar('state')) {
            $fb_helper->getPersistentDataHandler()->set('state', $this->request->getVar('state'));
        }

        if ($this->request->getVar('code')) {
            if (session()->get('access_token')) {
                $access_token = session()->get('access_token');
            } else {
                $access_token = $fb_helper->getAccessToken();
                session()->set('access_token', $access_token);
                $facebook->setDefaultAccessToken(session()->get('access_token'));
            }
            $graph_response = $facebook->get('/me?fields=name,email', $access_token);
            $fb_user_info = $graph_response->getGraphUser();

            if (!empty($fb_user_info['id'])) {
                $fbdata = [
                    'profile_pic' => 'http://graph.facebook.com/' . $fb_user_info['id'] . '/picture',
                    'user_name' => $fb_user_info['name'],
                    'email' => $fb_user_info['email'],
                    'userid' => $fb_user_info['id'],
                ];
                session()->set('userdata', $fbdata);
            }
        } else {
            $fb_permissions = ['email'];
            $data['fb_login_url'] = $fb_helper->getLoginUrl('https://charging.evx.services/loginFB', $fb_permissions);
        }

        return view("fb_view", $data);
    }

    // public function logoutFB()
    // {
    //     if (session()->has('userdata')) {
    //         session()->destroy();
    //         return redirect()->to(base_url() . '/login');
    //     }
    // }

    public function logout()
    {
        try {

            $UserLoginDetailModel = new \App\Models\UserLoginDetailModel();
            $UserLoginDetailModel->updateUserLoginDetailByID(session()->get('login_detail_id'), ['active' => '0']);

            logger_store([
                'user_id' => session()->get('userID'),
                'username' => session()->get('username'),
                'event' => 'ออกจากระบบ',
                'detail' => 'ออกจากระบบ EVX',
                'ip' => $this->request->getIPAddress()
            ]);

            session()->destroy();

            return redirect()->to('/');
        } catch (\Exception $e) {
            // echo $e->getMessage();
        }
    }
}
