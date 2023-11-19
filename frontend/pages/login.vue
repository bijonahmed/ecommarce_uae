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
                        <div class="sign_sec">
                            <div>
                                <h1>Sign Up</h1>
                                <p>SignUp to register a new Account.</p>
                            </div>

                            <!-- Registration  -->
                            <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                <div class="group">
                                    <input style="--i:0;" type="text" class="input" v-model="insertdata.name">
                                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Name</label>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:0;" type="email" class="input" v-model="insertdata.email">
                                    <span class="text-danger" v-if="errors.name">{{ errors.email[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email Address</label>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:1;" type="password" class="input" v-model="insertdata.password">
                                    <span class="text-danger" v-if="errors.name">{{ errors.password[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:1;" type="password" class="input" v-model="insertdata.password_confirmation">

                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Retype Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <!-- captcha  -->
                                <br>

                                <button type="submit" style="opacity: .8;" class="btn_login submit mt-2 ">Sign Up </button>
                            </form>

                            <!-- Registration  -->

                            <div class="social_login">
                                <div>
                                    <h6>Allready have Account?<button type="button" class="signIn">LogIn</button></h6>
                                </div>
                                <!-- <div class="">
                                    <h5>Or SignUp with:</h5>
                                </div>
                                <div>
                                    <a href="#facebook"><img src="images/social/icons8-facebook.svg" alt=""></a>
                                    <a href="#google"><img src="images/social/icons8-google.svg" alt=""></a>
                                    <a href="#twitter"><img src="images/social/icons8-twitter.svg" alt=""></a>
                                </div> -->
                            </div>
                        </div>
                        <div class="log_sec">
                            <h2>Welcome back</h2>
                            <p> Sign in to continue your Account</p>

                            <form @submit.prevent="customerLogin()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                <div class="group">
                                    <input style="--i:0;" type="email" class="input" v-model="login.email">
                                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email</label>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class="group">
                                    <input style="--i:1;" type="password" class="input" v-model="login.password">
                                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <button type="submit" class="btn_login">Login</button>
                            </form>
                            <div class="text-end">
                                <!-- <a href="forget-password.html">Forget Password?</a> -->
                                <a href="#">Forget Password?</a>
                            </div>

                            <div class="social_login">
                                <span class="signup_link">Don't Have Account?<button class="sign_up">SignUp</button></span>
                                <!-- <div class="">
                                    <h5>Or SignIn with:</h5>
                                </div>
                                <div>
                                    <a href="#facebook"><img src="images/social/icons8-facebook.svg" alt=""></a>
                                    <a href="#google"><img src="images/social/icons8-google.svg" alt=""></a>
                                    <a href="#twitter"><img src="images/social/icons8-twitter.svg" alt=""></a>
                                </div> -->
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
    data() {
        return {
            insertdata: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },

            login: {
                email: '',
                password: '',
            },
            notifmsg: '',
            errors: {},
        }
    },
    mounted() {
        this.defaultLoading();
    },

    methods: {
        defaultLoading() {
            this.$nextTick(() => {
                $(".toggle-password").click(function () {
                    $(this).toggleClass("fa-eye-slash fa-eye");
                    let input = $(this).parent().find("input"); // Declare the 'input' variable with 'let'
                    if (input.attr("type") == "password") {
                        input.attr("type", "text");
                    } else {
                        input.attr("type", "password");
                    }
                });

                $(".signIn").on("click", function () {
                    $(".log_sec").css({
                        transform: "translateX(-100%)",
                        "transition-duration": "1s",
                        opacity: "1",
                        filter: "blur(0px)",
                    });
                    $(".log_sec").addClass("inactive");

                    $(".sign_sec").css({
                        transform: "translateX(-100%)",
                        "transition-duration": "1s",
                        opacity: "0",
                        filter: "none",
                    });
                    $(".sign_sec").removeClass("inactive");
                    $(".sign_sec").addClass("active");
                });

                $(".sign_up").on("click", function () {
                    $(".log_sec").css({
                        transform: "translateX(0%)",
                        "transition-duration": "1s",
                        opacity: "0",
                        filter: "blur(3px)",
                    });
                    $(".log_sec").removeClass("inactive");
                    $(".log_sec").addClass("active");

                    $(".sign_sec").css({
                        transform: "translateX(0%)",
                        "transition-duration": "1s",
                        opacity: "1",
                    });
                    $(".sign_sec").addClass("inactive");
                });
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('name', this.insertdata.name);
            formData.append('email', this.insertdata.email);
            formData.append('password', this.insertdata.password);
            formData.append('password_confirmation', this.insertdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/register',
                formData, {
                    headers
                }).then((response) => {
                // Assuming your API returns a JWT token in the response
                const token = response.data.access_token;
                console.log("get token: " + token);
                // Save the token to local storage
                //localStorage.setItem('jwtToken', token);

                this.$auth.setUserToken(token);
                // this.$router.push('/checkout');
                if (process.client) {
                    this.$router.push({
                        path: '/user/user-profile'
                    });
                }

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        //customerLogin
        async customerLogin() {
            try {

                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                    // Add other parameters as needed
                };
                //console.log("==========login email:" +  this.login.email);
                //console.log("==========login password:" +  this.login.password);
                //return false; 
                let {
                    data
                } = await this.$axios.post('/auth/login', postData); //await this.login.post('/auth/login');
                await this.$auth.setUserToken(data.access_token);
                this.$router.push('/checkout');
                //this.loginForm.reset();

            } catch (err) {
                console.log(err)
            }
        },

    },

}
</script>
