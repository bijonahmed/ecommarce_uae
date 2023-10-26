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
                        <div class="row py-4" style="position: absolute; top: 20px;left: 20px;z-index: 99;">
                            <div class="col-12 text-start align-item-start">
                                <Nuxt-link to="/"><i class="fa-solid fa-chevron-left"></i></Nuxt-link>
                            </div>
                        </div>
                        <div class="log_sec">

                            <h2>Change Password</h2>
                            <p>Add New Password</p>

                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="group">
                                    <input required="" type="password" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Old Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <div class="group">
                                    <input required="" type="password" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>New Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <div class="group">
                                    <input required="" type="password" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Retype Password</label>
                                    <i class="fa-regular fa-eye-slash toggle-password"></i>
                                </div>
                                <button type="submit" class="btn_login">Change Password</button>
                            </form>

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
        title: 'Change Password',
    },

    mounted() {
        if (process.client) {
            $(".toggle-password").click(function () {
                $(this).toggleClass("fa-eye-slash fa-eye");
                input = $(this).parent().find("input");
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });
        }
    }

}
</script>
