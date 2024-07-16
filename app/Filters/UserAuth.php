<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class UserAuth implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Fix Bug แก้ไขปัญหากรณีพนักงานถูกลบไอดีแล้ว ให้ออกจากระบบทันที
        $UserModel = new \App\Models\UserModel();
        $user = $UserModel->getUserByID(session()->get('userID'));

        if (!$user) {
            session()->setFlashdata(['session_expired' => 'เซ็นซันหมดอายุ กรุณาล็อคอินอีกครั้ง']);
            return redirect()->to('/');
        }

        if (!session()->get('isUserLoggedIn')) return redirect()->to('/');
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here
    }
}