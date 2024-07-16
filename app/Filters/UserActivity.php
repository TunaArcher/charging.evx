<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class UserActivity implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Fix Bug แก้ไขปัญหากรณีพนักงานถูกลบไอดีแล้ว ให้ออกจากระบบทันที
        $UserModel = new \App\Models\UserModel();
        $User = $UserModel->getUserByID(session()->get('userID'));

        if (!$User) {
            session()->setFlashdata(['session_expired' => 'เซ็นซันหมดอายุ กรุณาล็อคอินอีกครั้ง']);
            return redirect()->to('/');
        }

        if (session()->get('isUserLoggedIn')) {
            $UserLoginDetailModel = new \App\Models\UserLoginDetailModel();
            date_default_timezone_set("Asia/Bangkok");
            $UserLoginDetailModel->updateUserLoginDetailByID(session()->get('login_detail_id'), ['last_activity' => date('Y-m-d H:i:s')]);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here
    }
}