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
                <center><span class="show_error text-danger"></span></center>
                <form @submit.prevent="customerLogin()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                    <div class="input_group">
                        <!-- <label for="">User Name </label> -->
                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        <input type="text" placeholder="Email" v-model="login.email">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="input_group">
                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                        <input type="password" placeholder="Password" v-model="login.password">
                        <i class="toggle-password fa-solid fa-eye"></i>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center d-none">
                            <input type="checkbox" id="remeber"><label for="remeber">Remember me</label>
                        </div>
                        <a href="#">Forget Password</a>
                    </div>
                    <div>
                        <button class="btn_logins" type="submit">Login</button>
                    </div>
                    <div class="d-flex">
                        <p style="font-size: 12px !important;">Don't have Account? <nuxt-link to="/login" class="btn_signup " type="button">SignUp</nuxt-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import $ from 'jquery';
export default {
    data() {
        return {
            loading: false,
            login: {
                email: '',
                password: '',
            },
            notifmsg: '',
            errors: {},
            // loggedIn: false,

        };
    },
    mounted() {

    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        gotoCheckOut() {
            this.$router.push('/checkout');
        },
        async customerLogin() {
            try {

                $(".show_error").html("");
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
                } = await this.$axios.post('/auth/login', postData);
                await this.$auth.setUserToken(data.access_token);
                this.$router.push('/user/user-profile');
               // $('.login_popup').modal('hide');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Has been successfully login...",
                    showConfirmButton: false,
                    timer: 1500
                });

               
                //this.loginForm.reset();
            } catch (err) {
                console.log(err)
                console.error('Login error:', err);
                if (err.response && err.response.status === 401) {
                    $(".show_error").html("Invalid credentials. Please try again.");
                } else {
                    $(".show_error").html('An error occurred. Please try again later.');
                }
            }
        },

    },
}
</script>
