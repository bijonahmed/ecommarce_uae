<template>
    <div>
        <div class="login_popup">
            <div class="popup_box_modal">
                <div>
                    <div class="row">
                        <div class="col-6 ms-auto text-end"> <button class="btn_edit close_login"><i class="fa-solid fa-x"></i></button></div>
                    </div>
                </div>
                <div class="popup_title">
                    <h1>Login</h1>
                    <p>Login and get access to all the features</p>
                </div>
                <div>
                    <form action="user/user-profile.html">
                        <div class="input_group">
                            <!-- <label for="">User Name </label> -->
                            <input type="text" placeholder="User Name ">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="input_group">
                            <input type="password" placeholder="Password">
                            <i class="toggle-password fa-solid fa-eye"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <input type="checkbox" id="remeber"><label for="remeber">Remember me</label>
                            </div>
                            <a href="forget-password.html">Forget Password</a>
                        </div>
                        <div>
                            <button class="btn_logins" type="submit">Login</button>
                        </div>
                        <div class="d-flex">
                            <p style="font-size: 12px !important;">Don't have Account? <a href="login.html" class="btn_signup " type="button">SignUp</a></p>
                        </div>
                    </form>
                </div>
                <div class="social_login">
                    <h4>Login With</h4>
                    <ul>
                        <li>
                            <a href="#" class="btn_social"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" class="btn_social"><i class="fa-brands fa-google"></i></a>
                        </li>
                        <li>
                            <a href="#" class="btn_social"><i class="fa-brands fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>