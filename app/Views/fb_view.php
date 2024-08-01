<?php if(isset($fb_login_url)):?>
<h1><a href='<?= $fb_login_url;?>'>Login with Facebook</a></h1>
<?php else:
    if(session()->has('userdata')):
        $uinfo = session()->get('userdata');
        ?>
<img src='<?= $uinfo['profile_pic'];?>' height='100' width='100'>
<p>Id: <?= $uinfo['userid'];?></p>
<p>Welcome <?= $uinfo['user_name'];?></p>
<p><?= $uinfo['email'];?></p>
<a href='<?= base_url();?>/login/logout'>Logout</a>
        <?php
    endif;
    ?>

<?php endif;?>