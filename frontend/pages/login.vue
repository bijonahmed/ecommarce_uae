<template>
<div>
    <span style="background-image: url('/images/login_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;">
        <div class="container">
            <div class="row d-flex align-item-center " style="height: 100vh;">
                <div class="col-lg-4 col-md-6 m-auto in_row ">
                    <div class="login_section">
                        <div class="log_sec">
                                             <h2><Nuxt-link to="/">Welcome back</Nuxt-link></h2>
                            <p> Sign in to continue your Account</p>
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="group">
                                    <input style="--i:0;" required type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>User Name</label>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class="group">
                                    <input required type="password" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <button type="submit" class="btn_login">Login</button>
                            </form>
                            <div class="text-end">
                                <a href="forget-password.html">Forget Password?</a>
                            </div>
                            <div class="social_login">
                                <span class="signup_link">Don't Have Account?<button class="sign_up">SignUp</button></span>
                                <div class="">
                                    <h5>Or SignIn with:</h5>
                                </div>
                                <div>
                                    <a href="#facebook"><img src="images/social/icons8-facebook.svg" alt=""></a>
                                    <a href="#google"><img src="images/social/icons8-google.svg" alt=""></a>
                                    <a href="#twitter"><img src="images/social/icons8-twitter.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                        <div class="sign_sec">
                            <div>
                                <h1>Sign Up</h1>
                                <p>SignUp to register a new Account.</p>
                            </div>
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="group">
                                    <input style="--i:0;" required type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>User Name</label>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:0;" required type="email" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email Address</label>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:1;" required type="password" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:1;" required type="password" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Retype Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <!-- captcha  -->
                                <div class="mt-2">
                                    <div class="submit__control">
                                        <h3>Are you human?</h3>
                                        <div class="submit__generated"></div>
                                        <span class="fa-solid fa-refresh"></span>
                                        <div>
                                            <!-- <span class="submit__error hide" >Incorrect value</span>
                                        <span class="submit__error--empty hide">Required field cannot be left blank</span> -->
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" disabled style="opacity: .8;" class="btn_login submit mt-2 ">Sign Up </button>
                            </form>
                            <div class="social_login">
                                <div>
                                    <h6>Allready have Account?<button type="button" class="signIn">LogIn</button></h6>
                                </div>
                                <div class="">
                                    <h5>Or SignUp with:</h5>
                                </div>
                                <div>
                                    <a href="#facebook"><img src="images/social/icons8-facebook.svg" alt=""></a>
                                    <a href="#google"><img src="images/social/icons8-google.svg" alt=""></a>
                                    <a href="#twitter"><img src="images/social/icons8-twitter.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</div>
</template>

<script>
import $ from 'jquery';

export default {
    head: {
        title: 'Login',
    },
    mounted() {
        $(".toggle-password").click(function () {
            $(this).toggleClass("fa-eye-slash fa-eye");
            input = $(this).parent().find("input");
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
        $(".sign_up").on("click", function () {
            $(".log_sec").css({
                "transform": "translateX(-100%)",
                "transition-duration": "1s",
                "opacity": "0"
            });
            $(".log_sec").addClass("inactive");
            $(".sign_sec").css({
                "transform": "translateX(-100%)",
                "transition-duration": "1s",
                "opacity": "1",
                "filter": "none"
            });
            $(".sign_sec").removeClass("inactive");
            $(".sign_sec").addClass("active");
        })
        $(".signIn").on("click", function () {
            $(".log_sec").css({
                "transform": "translateX(0%)",
                "transition-duration": "1s",
                "opacity": "1"
            });
            $(".log_sec").removeClass("inactive");
            $(".log_sec").addClass("active");
            $(".sign_sec").css({
                "transform": "translateX(100%)",
                "transition-duration": "1s",
                "opacity": "0",
                "filter": "blur(3px)"
            });
            $(".sign_sec").addClass("inactive");
        })

    }
}
</script>
