<template>
<div>
    <div class="container my-4">
        <div class="row">
            <div class="col-md-6 m-auto ">
                <div class="logo">
                    <Nuxt-Link to="/" class="m-auto" style="font-size: 30px;">Ecommerce <i class=" fa-regular fa-star"></i></Nuxt-Link>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="programme_form">
                    <form action="">
                        <h3>Register to Sale Your Product</h3>
                        <p>Sign up As A seller account.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="group ">
                                    <input type="text" class="input" required />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>First Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="group">
                                    <input required type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="password" id="password" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password </label>
                                <i class="fa-solid toggle-password fa-eye-slash"></i>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="password" id="repassword" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Confirm Password </label>
                                <i class="fa-solid toggle-password fa-eye-slash"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="group ">
                                    <select name="" id="" class="input">
                                        <option value="" disabled selected> Select Your Country</option>
                                        <option value="">Bangladesh</option>
                                        <option value="">Afganistan</option>
                                    </select>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="group">
                                    <input required type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Phone Number </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h5>Select your Account Type:</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="group">
                                    <input required type="text" onfocus="(this.type='date')" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>HolyDays Start</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="group">
                                    <input required type="text" onfocus="(this.type='date')" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>HolyDays End</label>
                                </div>
                            </div>
                        </div>

                        <h6>Business Information</h6>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Owner Name</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Name </label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" required class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Registration number</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Address</label>
                            </div>
                        </div>
                        <h6>WareHouse Address</h6>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Owner Name</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Address</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" required class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Phone</label>
                            </div>
                        </div>
                        <h6>Return Address
                            <div class="d-flex c_label">
                                <input type="checkbox" id="checkbox"><label class="" style="pointer-events: all; position: unset; color: #000;" for="checkbox">Same As WareHouse Address </label>
                            </div>
                        </h6>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Owner Name</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Address</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" required class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Phone</label>
                            </div>
                        </div>

                        <div class="d-flex c_label">
                            <input type="checkbox" id="checkbox"><label class="" style="pointer-events: all; position: unset; color: #000;" for="checkbox">Agree with <a href="../pdf/sample-terms-conditions-agreement.pdf">terms & condition</a> </label>
                        </div>
                        <button class="btn_cart" style="visibility: unset;">Register</button>
                    </form>
                </div>

                <div class="row">
                    <div class="col-md-6 m-auto text-center">
                        <p class="sign_link">Allready Have account? <Nuxt-link to="/login">Login</Nuxt-link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
