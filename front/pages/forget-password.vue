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
                            <div>
                                <h2>Forget Password</h2>
                                <p>Enter Your Email Address</p>
                            </div>
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="group">
                                    <input style="--i:0;" required="" type="email" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email Address</label>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <button type="submit" style="opacity: .8;" class="btn_login submit mt-2 ">Send</button>
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
        title: 'Forget Password',
    },
     
}
</script>
