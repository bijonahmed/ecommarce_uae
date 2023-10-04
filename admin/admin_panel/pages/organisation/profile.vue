<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/organisation/profile">Organisation</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->
            <!--end row-->
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <form @submit.prevent="saveData()" id="formrest" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Profile Update</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Organisation Name <b class="bg-dark text-white"><a href="https://find-and-update.company-information.service.gov.uk/" target="_blank"><span style="color:white;">Find</span></a></b></label>
                                            <input type="text" class="form-control organisation_name" v-model="insertdata.organisation_name" id="employee_code">
                                            <span class="text-danger" v-if="errors.organisation_name">{{ errors.organisation_name[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Type of Organisation </label>
                                            <select name="gender" v-model="insertdata.type_of_organisation" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Private Company Limited by shares" selected>Private
                                                    Company Limited by shares</option>
                                                <option value="Charitable Incorporated Organisation">Charitable
                                                    Incorporated Organisation</option>
                                                <option value="Industrial and Provident Society">Industrial and
                                                    Provident Society</option>
                                                <option value="General Partnership">General Partnership</option>
                                                <option value="Limited Liability Partnership-LLP">Limited Liability
                                                    Partnership-LLP</option>
                                                <option value="Scottish limited partnerships">Scottish limited
                                                    partnerships</option>
                                                <option value="Limited Partnership-LP">Limited Partnership-LP</option>
                                                <option value="Community Interest Company">Community Interest Company
                                                </option>
                                                <option value="Private Company Limited by guarantee">Private Company
                                                    Limited by guarantee</option>
                                                <option value="Public Limited Company-PLC">Public Limited Company-PLC
                                                </option>
                                                <option value="Sole Proprietorship">Sole Proprietorship</option>
                                                <option value="others-type">Others</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.type_of_organisation">{{ errors.type_of_organisation[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Registration No<b class="bg-dark text-white"><a href="https://find-and-update.company-information.service.gov.uk/" target="_blank"><span style="color:white;">Find</span></a></b></label>
                                            <input type="text" class="form-control middle_name" v-model="insertdata.registration_no" id="middle_name">
                                            <span class="text-danger" v-if="errors.registration_no">{{ errors.registration_no[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Contact No.</label>
                                            <input type="text" class="form-control name" v-model="insertdata.contact_no" id="last_name">
                                            <span class="text-danger" v-if="errors.contact_no">{{errors.contact_no[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Login Email ID </label><br>
                                            <input type="text" class="form-control login_email" disable readonly v-model="insertdata.login_email" id="login_email">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Organisation Email ID</label>
                                            <input type="text" class="form-control organisatin_email_id" v-model="insertdata.organisatin_email_id" id="organisatin_email_id">
                                            <span class="text-danger" v-if="errors.organisatin_email_id">{{ errors.organisatin_email_id[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Website</label>
                                            <input type="text" class="form-control website" v-model="insertdata.website" id="website">
                                            <span class="text-danger" v-if="errors.website">{{ errors.website[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Landline Number</label>
                                            <input type="text" class="form-control website" v-model="insertdata.landline_number" id="website">
                                            <span class="text-danger" v-if="errors.landline_number">{{ errors.landline_number[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Trading Name</label>
                                            <input type="text" class="form-control trading_name" v-model="insertdata.trading_name" id="trading_name">
                                            <span class="text-danger" v-if="errors.trading_name">{{ errors.trading_name[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Trading Period</label>
                                            <select name="trading_period" v-model="insertdata.trading_period" class="form-select">
                                                <option value="">Select</option>
                                                <option value="">&nbsp;</option>
                                                <option value="0 to 6 months">0 to 6 months</option>
                                                <option value="Over 6 to 12 months">Over 6 to 12 months</option>
                                                <option value="Over 12 to 18 months" selected>Over 12 to 18 months
                                                </option>
                                                <option value="Over 18 to 36 months">Over 18 to 36 months</option>
                                                <option value="Over 36 months+">Over 36 months+</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.trading_period">{{ errors.trading_period[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Name of Sector</label>
                                            <select name="nameofsector" v-model="insertdata.nameofsector" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Accommodation and Food Service Activities">Accommodation
                                                    and Food Service Activities</option>
                                                <option value="Activities of extraterritorial organisations and bodies">
                                                    Activities of extraterritorial organisations and bodies</option>
                                                <option value="Activities of households as employers; undifferentiated goods- and services- producing activities of households for own use">
                                                    Activities of households as employers; undifferentiated goods- and
                                                    services- producing activities of households for own use</option>
                                                <option value="Administrative and Support Service Activities">
                                                    Administrative and Support Service Activities</option>
                                                <option value="Agriculture, Forestry and Fishing">Agriculture, Forestry
                                                    and Fishing</option>
                                                <option value="Arts, Entertainment and Recreation">Arts, Entertainment
                                                    and Recreation</option>
                                                <option value="Construction">Construction</option>
                                                <option value="Education">Education</option>
                                                <option value="Electricity, Gas, Steam and Air Conditioning Supply">
                                                    Electricity, Gas, Steam and Air Conditioning Supply</option>
                                                <option value="Financial and Insurance Activities">Financial and
                                                    Insurance Activities</option>
                                                <option value="Human Health and Social Work Activities">Human Health and
                                                    Social Work Activities</option>
                                                <option value="Information and Communication">Information and
                                                    Communication</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Mining and Quarrying">Mining and Quarrying</option>
                                                <option value="Other service activities" selected>Other service
                                                    activities</option>
                                                <option value="Professional, Scientific and Technical Activities">
                                                    Professional, Scientific and Technical Activities</option>
                                                <option value="Public Administration and Defence; Compulsory social security">
                                                    Public Administration and Defence; Compulsory social security
                                                </option>
                                                <option value="Real Estate Activities">Real Estate Activities</option>
                                                <option value="Transportation and Storage">Transportation and Storage
                                                </option>
                                                <option value="Water supply, sewerage, waste management and remediation activities">
                                                    Water supply, sewerage, waste management and remediation activities
                                                </option>
                                                <option value="Wholesale and Retail trade; Repair of motor vehicles and Motorcycles">
                                                    Wholesale and Retail trade; Repair of motor vehicles and Motorcycles
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.nameofsector">{{
                                                    errors.nameofsector[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Have you changed Organisation /Trading name in
                                                last 5 years? (*)</label>
                                            <select name="have_you_change_organisation" v-model="insertdata.have_you_change_organisation" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-8">
                                            <label for="inputPassword4">Did your organisation faced penalty (e.g.,
                                                recruiting illegal employee) in last 3 years?</label>
                                            <select name="did_your_organisation_faced" v-model="insertdata.did_your_organisation_faced" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Your Logo</label>
                                            <input type="file" ref="your_logo" @change="onFileSelectedYourLogo" class="form-control" id="your_logo" name="your_logo" />
                                            <span id="show_your_logo"></span>
                                        </div>
                                        <div class="col-md-12">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Authorised Person
                                                    Details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">First Name</label>
                                            <input type="text" class="form-control auth_person_first_name" v-model="insertdata.auth_person_first_name" id="auth_person_first_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Last Name</label>
                                            <input type="text" class="form-control auth_person_last_name" v-model="insertdata.auth_person_last_name" id="auth_person_last_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Designation</label>
                                            <input type="text" class="form-control auth_person_designation" v-model="insertdata.auth_person_designation" id="auth_person_designation">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Phone No</label>
                                            <input type="text" class="form-control auth_person_phone_no" v-model="insertdata.auth_person_phone_no" id="auth_person_phone_no">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Phone No</label>
                                            <input type="text" class="form-control auth_person_email" v-model="insertdata.auth_person_email" id="auth_person_email">
                                        </div>
                                        <div class="form-group col-md-9">
                                            <label for="inputPassword4">Do you have a history of Criminal
                                                conviction/Bankruptcy/Disqualification?</label>
                                            <select name="auth_person_did_you_have_history" v-model="insertdata.auth_person_did_you_have_history" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Proof Of Id</label>
                                            <input type="file" ref="auth_person_prof_id" @change="onFileSelectedAuthProfId" class="form-control" id="auth_person_prof_id" name="auth_person_prof_id" />
                                            <span id="show_auth_person_prof_id"></span>
                                        </div>
                                        <div class="col-md-12">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Key Contact</span></label>
                                            <br>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <br>
                                            <input class="form-check-input" type="checkbox" name="key_person" id="filladdress" value="1" checked>
                                            <span class="form-check-sign">If Same As Authorised Person</span>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">First Name</label>
                                            <input type="text" class="form-control key_contact_first_name" v-model="insertdata.key_contact_first_name" id="key_contact_first_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Last Name </label>
                                            <input type="text" class="form-control key_contact_last_name" v-model="insertdata.key_contact_last_name" id="key_contact_last_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Designation</label>
                                            <input type="text" class="form-control key_contact_designation" v-model="insertdata.key_contact_designation" id="key_contact_designation">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Phone No</label>
                                            <input type="text" class="form-control key_contact_phone_no" v-model="insertdata.key_contact_phone_no" id="key_contact_phone_no">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Email </label>
                                            <input type="text" class="form-control key_contact_email" v-model="insertdata.key_contact_email" id="key_contact_email">
                                        </div>
                                        <div class="form-group col-md-8">
                                            <label for="inputPassword4">Do you have a history of Criminal
                                                conviction/Bankruptcy/Disqualification?</label>
                                            <select name="department_id" v-model="insertdata.key_contact_do_you_have_history" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Proof Of Id </label>
                                            <input type="file" ref="key_contact_prof_id" @change="onFileSelectedProfId" class="form-control" id="key_contact_prof_id" name="key_contact_prof_id" />
                                            <div id="show_key_contact_prof_id"></div>
                                        </div>
                                        <div class="col-sm-12">
                                            <hr>
                                        </div>
                                        <div class="col-md-12">
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Level 1 User </span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <input class="form-check-input" type="checkbox" name="key_person" id="filladdress" value="1" checked>
                                            <span class="form-check-sign">If Same As Authorised Person</span>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">First Name</label>
                                            <input type="text" class="form-control level_1_first_name" v-model="insertdata.level_1_first_name" id="level_1_first_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Last Name </label>
                                            <input type="text" class="form-control level_1_last_name" v-model="insertdata.level_1_last_name" id="level_1_last_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Designation</label>
                                            <input type="text" class="form-control level_1_designation" v-model="insertdata.level_1_designation" id="level_1_designation">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Phone No</label>
                                            <input type="text" class="form-control level_1_phone_no" v-model="insertdata.level_1_phone_no" id="level_1_phone_no">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Email </label>
                                            <input type="text" class="form-control level_1_email" v-model="insertdata.level_1_email" id="level_1_email">
                                        </div>
                                        <div class="form-group col-md-8">
                                            <label for="inputPassword4">Do you have a history of Criminal
                                                conviction/Bankruptcy/Disqualification?</label>
                                            <select name="level_1_do_you_have_a_history" v-model="insertdata.level_1_do_you_have_a_history" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Proof Of Id </label>
                                            <input type="file" ref="level_1_prof_id" @change="level1onFileSelectedProfId" class="form-control" id="level_1_prof_id" name="level_1_prof_id" />
                                            <span id="show_level_1_prof_id"></span>
                                        </div>
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Organisation
                                                    Address</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Post Code</label>
                                            <input type="text" class="form-control orgian_post_code" v-model="insertdata.orgian_post_code" id="orgian_post_code">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Address </label>
                                            <input type="text" class="form-control orgian_address" v-model="insertdata.orgian_address" id="orgian_address">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Address Line 1</label>
                                            <input type="text" class="form-control orgian_level_1" v-model="insertdata.orgian_level_1" id="orgian_level_1">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Address Line 2</label>
                                            <input type="text" class="form-control orgian_level_2" v-model="insertdata.orgian_level_2" id="orgian_level_2">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Address Line 3</label>
                                            <input type="text" class="form-control orgian_level_3" v-model="insertdata.orgian_level_3" id="orgian_level_3">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">City / County</label>
                                            <input type="text" class="form-control orgian_city" v-model="insertdata.orgian_city" id="orgian_city">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">County</label>
                                            <select name="orgian_country" v-model="insertdata.orgian_country" class="form-select orgian_country">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname
                                                    }}
                                                </option>
                                            </select>
                                        </div>
                                        <!-- ===============================================  Organisation Employee (According to latest RTI) ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Organisation Employee (According
                                                    to latest RTI)</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <table width="100%" border="1" class="table table-hover" style="font-size: 12px;">
                                                <tr>
                                                    <td width="31%">Full Name</td>
                                                    <td width="18%">Department</td>
                                                    <td width="15%">Job Type</td>
                                                    <td width="20%">Job Title</td>
                                                    <td width="16%">Immigration Status </td>
                                                </tr>
                                                <tr v-for='data in inact_emplyee'>
                                                    <td>{{ data.emp_name }}</td>
                                                    <td>{{ data.dpart_name }}</td>
                                                    <td>{{ data.employee_type }}</td>
                                                    <td>{{ data.desi_name }}</td>
                                                    <td></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <!-- ===============================================  Trading Hours ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Trading Hours</span></label>
                                            <hr>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Monday</div>
                                            <div class="col-md-3">
                                                Status
                                                <select name="mon_status" v-model="insertdata.mon_status" class="form-select mon_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                Opening Time
                                                <select name="mon_open" v-model="insertdata.mon_open" class="form-select mon_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                Closing Time
                                                <select name="mon_close" v-model="insertdata.mon_close" class="form-select mon_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Tuesday</div>
                                            <div class="col-md-3">
                                                <select name="tuesday_status" v-model="insertdata.tuesday_status" class="form-select tuesday_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="tuesday_open" v-model="insertdata.tuesday_open" class="form-select tuesday_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="tuesday_close" v-model="insertdata.tuesday_close" class="form-select tuesday_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Wednesday</div>
                                            <div class="col-md-3">
                                                <select name="wed_status" v-model="insertdata.wed_status" class="form-select wed_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="wed_open" v-model="insertdata.wed_open" class="form-select wed_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="wed_close" v-model="insertdata.wed_close" class="form-select wed_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Thursday</div>
                                            <div class="col-md-3">
                                                <select name="thursday_status" v-model="insertdata.thursday_status" class="form-select thursday_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="thursday_open" v-model="insertdata.thursday_open" class="form-select thursday_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="thursday_close" v-model="insertdata.thursday_close" class="form-select thursday_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Friday</div>
                                            <div class="col-md-3">
                                                <select name="friday_status" v-model="insertdata.friday_status" class="form-select friday_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="friday_open" v-model="insertdata.friday_open" class="form-select friday_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="friday_close" v-model="insertdata.friday_close" class="form-select friday_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Saturday</div>
                                            <div class="col-md-3">
                                                <select name="satday_status" v-model="insertdata.satday_status" class="form-select satday_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="satday_open" v-model="insertdata.satday_open" class="form-select satday_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="satday_close" v-model="insertdata.satday_close" class="form-select satday_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3"><br>Sunday</div>
                                            <div class="col-md-3">
                                                <select name="sunday_status" v-model="insertdata.sunday_status" class="form-select sunday_status btm">
                                                    <option value=""></option>
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="sunday_open" v-model="insertdata.sunday_open" class="form-select sunday_open btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <select name="sunday_close" v-model="insertdata.sunday_close" class="form-select sunday_close btm">
                                                    <option value="">Select</option>
                                                    <option v-for='data in times' :value='data.name'>{{ data.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-- ===============================================  Upload Documents ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Upload Documents</span></label>
                                            <hr>
                                        </div>
                                        <!-- start table -->
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Type of Document </label>
                                            <select name="docs_type_1" v-model="insertdata.docs_type_1" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_2" v-model="insertdata.docs_type_2" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_3" v-model="insertdata.docs_type_3" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_4" v-model="insertdata.docs_type_4" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_5" v-model="insertdata.docs_type_5" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_6" v-model="insertdata.docs_type_6" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_7" v-model="insertdata.docs_type_7" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_8" v-model="insertdata.docs_type_8" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_9" v-model="insertdata.docs_type_9" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_10" v-model="insertdata.docs_type_10" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_11" v-model="insertdata.docs_type_11" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_12" v-model="insertdata.docs_type_12" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_13" v-model="insertdata.docs_type_13" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_14" v-model="insertdata.docs_type_14" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_15" v-model="insertdata.docs_type_15" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_16" v-model="insertdata.docs_type_16" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_17" v-model="insertdata.docs_type_17" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <select name="docs_type_18" v-model="insertdata.docs_type_18" class="form-select pass_nationality btm">
                                                <option value="">Select</option>
                                                <option v-for='data in typeOfdocts' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Upload Document </label>
                                            <br>
                                            <!-- <div class="d-inline p-2 bg-primary text-white">d-inline</div>
                                            <div class="d-inline p-2 bg-dark text-white">d-inline</div> -->
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_1" @change="onFiletypeOfDocument_1" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_1"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_2" @change="onFiletypeOfDocument_2" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_2"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_3" @change="onFiletypeOfDocument_3" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_3"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_4" @change="onFiletypeOfDocument_4" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_4"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_5" @change="onFiletypeOfDocument_5" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_5"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_6" @change="onFiletypeOfDocument_6" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_6"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_7" @change="onFiletypeOfDocument_7" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_7"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_8" @change="onFiletypeOfDocument_8" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_8"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_9" @change="onFiletypeOfDocument_9" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_9"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_10" @change="onFiletypeOfDocument_10" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_10"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_11" @change="onFiletypeOfDocument_11" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_11"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_12" @change="onFiletypeOfDocument_12" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_12"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_13" @change="onFiletypeOfDocument_13" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_13"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_14" @change="onFiletypeOfDocument_14" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_14"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_15" @change="onFiletypeOfDocument_15" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_15"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_16" @change="onFiletypeOfDocument_16" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_16"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_17" @change="onFiletypeOfDocument_17" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_17"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="file" ref="type_of_doc_18" @change="onFiletypeOfDocument_18" class="form-control btm" />
                                                </div>
                                                <div class="col-6">
                                                    <span id="show_data_three_docs_18"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end table  -->
                                    </div>
                                    <div class="col-md-12">
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
    <!--end page wrapper -->
</div>
</template>
<style>
.btm {
    margin-bottom: 5px;
}
.bg-dark {
    background-color: #0d4b88 !important;
}
</style>
<script>
export default {
    head: {
        title: 'Organisation Profile Update',
    },
    data() {
        return {
            insertdata: {
                //step 1
                id: 1,
                login_email: '',
                organisation_name: '',
                type_of_organisation: '',
                registration_no: '',
                contact_no: '',
                organisatin_email_id: '',
                website: '',
                landline_number: '',
                trading_name: '',
                trading_period: '',
                nameofsector: '',
                have_you_change_organisation: '',
                did_your_organisation_faced: '',
                auth_person_first_name: '',
                auth_person_last_name: '',
                auth_person_designation: '',
                auth_person_phone_no: '',
                auth_person_email: '',
                auth_person_did_you_have_history: '',
                key_contact_first_name: '',
                key_contact_last_name: '',
                key_contact_designation: '',
                key_contact_phone_no: '',
                key_contact_email: '',
                key_contact_do_you_have_history: '',
                level_1_first_name: '',
                level_1_last_name: '',
                level_1_designation: '',
                level_1_phone_no: '',
                level_1_email: '',
                //level_1_prof_id: '',
                level_1_do_you_have_a_history: '',
                orgian_post_code: '',
                orgian_address: '',
                orgian_level_1: '',
                orgian_level_2: '',
                orgian_level_3: '',
                orgian_city: '',
                orgian_country: '',
                //step 2
                mon_status: '',
                mon_open: '',
                mon_close: '',
                tuesday_status: '',
                tuesday_open: '',
                tuesday_close: '',
                wed_status: '',
                wed_open: '',
                wed_close: '',
                thursday_status: '',
                thursday_open: '',
                thursday_close: '',
                friday_status: '',
                friday_open: '',
                friday_close: '',
                satday_status: '',
                satday_open: '',
                satday_close: '',
                sunday_status: '',
                sunday_open: '',
                sunday_close: '',
                //step3
                docs_type_1: '',
                docs_type_2: '',
                docs_type_3: '',
                docs_type_4: '',
                docs_type_5: '',
                docs_type_6: '',
                docs_type_7: '',
                docs_type_8: '',
                docs_type_9: '',
                docs_type_10: '',
                docs_type_11: '',
                docs_type_12: '',
                docs_type_13: '',
                docs_type_14: '',
                docs_type_15: '',
                docs_type_16: '',
                docs_type_17: '',
                docs_type_18: '',
            },
            level_1_prof_id: '',
            login_email: '',
            notifmsg: '',
            type_of_doc: '',
            auth_person_prof_id: '',
            level_1_proof_id: '',
            //step3
            type_of_doc_1: '',
            type_of_doc_2: '',
            type_of_doc_3: '',
            type_of_doc_4: '',
            type_of_doc_5: '',
            type_of_doc_6: '',
            type_of_doc_7: '',
            type_of_doc_8: '',
            type_of_doc_9: '',
            type_of_doc_10: '',
            type_of_doc_11: '',
            type_of_doc_12: '',
            type_of_doc_13: '',
            type_of_doc_14: '',
            type_of_doc_15: '',
            type_of_doc_16: '',
            type_of_doc_17: '',
            type_of_doc_18: '',
            //end
            your_logo: '',
            typeOfdocts: [],
            designation: [],
            allcountry: [],
            times: [],
            inact_emplyee: [],
            errors: {},
        }
    },
    created() {
        this.getTypeOfDucments();
        this.getDesignation();
        this.getCountrys();
        this.getTime();
        this.showinactiveEmployee();
        this.defaultLoading();
    },
    methods: {
        level1onFileSelectedProfId() {
            this.level_1_prof_id = this.$refs.level_1_prof_id.files[0];
        },
        onFileSelectedYourLogo() {
            this.your_logo = this.$refs.your_logo.files[0];
        },
        onFileSelectedProfId() {
            this.key_contact_prof_id = this.$refs.key_contact_prof_id.files[0];
        },
        onFiletypeOfDocument() {
            this.type_of_doc = this.$refs.type_of_doc.files[0];
        },
        //step3
        onFiletypeOfDocument_1() {
            this.type_of_doc_1 = this.$refs.type_of_doc_1.files[0];
        },
        onFiletypeOfDocument_2() {
            this.type_of_doc_2 = this.$refs.type_of_doc_2.files[0];
        },
        onFiletypeOfDocument_3() {
            this.type_of_doc_3 = this.$refs.type_of_doc_3.files[0];
        },
        onFiletypeOfDocument_4() {
            this.type_of_doc_4 = this.$refs.type_of_doc_4.files[0];
        },
        onFiletypeOfDocument_5() {
            this.type_of_doc_5 = this.$refs.type_of_doc_5.files[0];
        },
        onFiletypeOfDocument_6() {
            this.type_of_doc_6 = this.$refs.type_of_doc_6.files[0];
        },
        onFiletypeOfDocument_7() {
            this.type_of_doc_7 = this.$refs.type_of_doc_7.files[0];
        },
        onFiletypeOfDocument_8() {
            this.type_of_doc_8 = this.$refs.type_of_doc_8.files[0];
        },
        onFiletypeOfDocument_9() {
            this.type_of_doc_9 = this.$refs.type_of_doc_9.files[0];
        },
        onFiletypeOfDocument_10() {
            this.type_of_doc_10 = this.$refs.type_of_doc_10.files[0];
        },
        onFiletypeOfDocument_11() {
            this.type_of_doc_11 = this.$refs.type_of_doc_11.files[0];
        },
        onFiletypeOfDocument_12() {
            this.type_of_doc_12 = this.$refs.type_of_doc_12.files[0];
        },
        onFiletypeOfDocument_13() {
            this.type_of_doc_13 = this.$refs.type_of_doc_13.files[0];
        },
        onFiletypeOfDocument_14() {
            this.type_of_doc_14 = this.$refs.type_of_doc_14.files[0];
        },
        onFiletypeOfDocument_15() {
            this.type_of_doc_15 = this.$refs.type_of_doc_15.files[0];
        },
        onFiletypeOfDocument_16() {
            this.type_of_doc_16 = this.$refs.type_of_doc_16.files[0];
        },
        onFiletypeOfDocument_17() {
            this.type_of_doc_17 = this.$refs.type_of_doc_17.files[0];
        },
        onFiletypeOfDocument_18() {
            this.type_of_doc_18 = this.$refs.type_of_doc_18.files[0];
        },
        onFileSelectedAuthProfId() {
            this.auth_person_prof_id = this.$refs.auth_person_prof_id.files[0];
        },
        saveData() {
            const formData = new FormData();
            //Step1
            formData.append('id', this.insertdata.id);
            //File
            formData.append('your_logo', this.your_logo);
            formData.append('key_contact_prof_id', this.key_contact_prof_id);
            //txt
            formData.append('organisation_name', this.insertdata.organisation_name);
            formData.append('type_of_organisation', this.insertdata.type_of_organisation);
            formData.append('registration_no', this.insertdata.registration_no);
            formData.append('contact_no', this.insertdata.contact_no);
            formData.append('organisatin_email_id', this.insertdata.organisatin_email_id);
            formData.append('website', this.insertdata.website);
            formData.append('landline_number', this.insertdata.landline_number);
            formData.append('trading_name', this.insertdata.trading_name);
            formData.append('trading_period', this.insertdata.trading_period);
            formData.append('nameofsector', this.insertdata.nameofsector);
            formData.append('have_you_change_organisation', this.insertdata.have_you_change_organisation);
            formData.append('did_your_organisation_faced', this.insertdata.did_your_organisation_faced);
            formData.append('auth_person_first_name', this.insertdata.auth_person_first_name);
            formData.append('auth_person_last_name', this.insertdata.auth_person_last_name);
            formData.append('auth_person_designation', this.insertdata.auth_person_designation);
            formData.append('auth_person_phone_no', this.insertdata.auth_person_phone_no);
            formData.append('auth_person_email', this.insertdata.auth_person_email);
            formData.append('auth_person_did_you_have_history', this.insertdata.auth_person_did_you_have_history);
            formData.append('auth_person_prof_id', this.auth_person_prof_id);
            formData.append('key_contact_first_name', this.insertdata.key_contact_first_name);
            formData.append('key_contact_last_name', this.insertdata.key_contact_last_name);
            formData.append('key_contact_designation', this.insertdata.key_contact_designation);
            formData.append('key_contact_phone_no', this.insertdata.key_contact_phone_no);
            formData.append('key_contact_email', this.insertdata.key_contact_email);
            formData.append('key_contact_do_you_have_history', this.insertdata.key_contact_do_you_have_history);
            formData.append('key_contact_prof_id', this.insertdata.key_contact_prof_id);
            formData.append('level_1_first_name', this.insertdata.level_1_first_name);
            formData.append('level_1_last_name', this.insertdata.level_1_last_name);
            formData.append('level_1_designation', this.insertdata.level_1_designation);
            formData.append('level_1_phone_no', this.insertdata.level_1_phone_no);
            formData.append('level_1_email', this.insertdata.level_1_email);
            formData.append('level_1_prof_id', this.level_1_prof_id);
            formData.append('level_1_do_you_have_a_history', this.insertdata.level_1_do_you_have_a_history);
            formData.append('orgian_post_code', this.insertdata.orgian_post_code);
            formData.append('orgian_address', this.insertdata.orgian_address);
            formData.append('orgian_level_1', this.insertdata.orgian_level_1);
            formData.append('orgian_level_2', this.insertdata.orgian_level_2);
            formData.append('orgian_level_3', this.insertdata.orgian_level_3);
            formData.append('orgian_city', this.insertdata.orgian_city);
            formData.append('orgian_country', this.insertdata.orgian_country);
            //Step2
            formData.append('mon_status', this.insertdata.mon_status);
            formData.append('mon_open', this.insertdata.mon_open);
            formData.append('mon_close', this.insertdata.mon_close);
            formData.append('tuesday_status', this.insertdata.tuesday_status);
            formData.append('tuesday_open', this.insertdata.tuesday_open);
            formData.append('tuesday_close', this.insertdata.tuesday_close);
            formData.append('orgian_address', this.insertdata.orgian_address);
            formData.append('wed_status', this.insertdata.wed_status);
            formData.append('wed_open', this.insertdata.wed_open);
            formData.append('wed_close', this.insertdata.wed_close);
            formData.append('thursday_status', this.insertdata.thursday_status);
            formData.append('thursday_open', this.insertdata.thursday_open);
            formData.append('thursday_close', this.insertdata.thursday_close);
            formData.append('friday_status', this.insertdata.friday_status);
            formData.append('friday_open', this.insertdata.friday_open);
            formData.append('friday_close', this.insertdata.friday_close);
            formData.append('satday_status', this.insertdata.satday_status);
            formData.append('satday_open', this.insertdata.satday_open);
            formData.append('satday_close', this.insertdata.satday_close);
            formData.append('sunday_status', this.insertdata.sunday_status);
            formData.append('sunday_open', this.insertdata.sunday_open);
            formData.append('sunday_close', this.insertdata.sunday_close);
            //step3
            formData.append('docs_type_1', this.insertdata.docs_type_1);
            formData.append('docs_type_2', this.insertdata.docs_type_2);
            formData.append('docs_type_3', this.insertdata.docs_type_3);
            formData.append('docs_type_4', this.insertdata.docs_type_4);
            formData.append('docs_type_5', this.insertdata.docs_type_5);
            formData.append('docs_type_6', this.insertdata.docs_type_6);
            formData.append('docs_type_7', this.insertdata.docs_type_7);
            formData.append('docs_type_8', this.insertdata.docs_type_8);
            formData.append('docs_type_9', this.insertdata.docs_type_9);
            formData.append('docs_type_10', this.insertdata.docs_type_10);
            formData.append('docs_type_11', this.insertdata.docs_type_11);
            formData.append('docs_type_12', this.insertdata.docs_type_12);
            formData.append('docs_type_13', this.insertdata.docs_type_13);
            formData.append('docs_type_14', this.insertdata.docs_type_14);
            formData.append('docs_type_15', this.insertdata.docs_type_15);
            formData.append('docs_type_16', this.insertdata.docs_type_16);
            formData.append('docs_type_17', this.insertdata.docs_type_17);
            formData.append('docs_type_18', this.insertdata.docs_type_18);
            formData.append('type_of_doc_1', this.type_of_doc_1);
            formData.append('type_of_doc_2', this.type_of_doc_2);
            formData.append('type_of_doc_3', this.type_of_doc_3);
            formData.append('type_of_doc_4', this.type_of_doc_4);
            formData.append('type_of_doc_5', this.type_of_doc_5);
            formData.append('type_of_doc_6', this.type_of_doc_6);
            formData.append('type_of_doc_7', this.type_of_doc_7);
            formData.append('type_of_doc_8', this.type_of_doc_8);
            formData.append('type_of_doc_9', this.type_of_doc_9);
            formData.append('type_of_doc_10', this.type_of_doc_10);
            formData.append('type_of_doc_11', this.type_of_doc_11);
            formData.append('type_of_doc_12', this.type_of_doc_12);
            formData.append('type_of_doc_13', this.type_of_doc_13);
            formData.append('type_of_doc_14', this.type_of_doc_14);
            formData.append('type_of_doc_15', this.type_of_doc_15);
            formData.append('type_of_doc_16', this.type_of_doc_16);
            formData.append('type_of_doc_17', this.type_of_doc_17);
            formData.append('type_of_doc_18', this.type_of_doc_18);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/organisationUpdateprofile',
                formData, {
                    headers
                }).then((res) => {
                //$('#formrest')[0].reset();
                this.defaultLoading();
                this.success_noti();
                this.$router.push('/organisation/profile');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getCountrys() {
            this.$axios.get(`/user/getCountry`).then(response => {
                this.allcountry = response.data.data;
            });
        },
        getTypeOfDucments() {
            this.$axios.get(`/user/typeofdoucments`).then(response => {
                this.typeOfdocts = response.data.data;
            });
        },
        getDesignation() {
            this.$axios.get(`/user/getDesignationList`).then(response => {
                this.designation = response.data.data;
            });
        },
        getTime() {
            this.$axios.get(`/user/getTime`).then(response => {
                this.times = response.data.data;
            });
        },
        showinactiveEmployee() {
            this.$axios.get(`/user/inactiveEmployee`).then(response => {
                this.inact_emplyee = response.data.data;
            });
        },
        defaultLoading() {
            this.$axios.get(`/user/selectOrganisationProfile`).then(response => {
                console.log("Login user email: " + response.data.email)
                this.insertdata.login_email = response.data.email;
                this.insertdata.organisation_name = response.data.data.organisation_name;
                this.insertdata.type_of_organisation = response.data.data.type_of_organisation;
                this.insertdata.registration_no = response.data.data.registration_no;
                this.insertdata.contact_no = response.data.data.contact_no;
                this.insertdata.organisatin_email_id = response.data.data.organisatin_email_id;
                this.insertdata.website = response.data.data.website;
                this.insertdata.landline_number = response.data.data.landline_number;
                this.insertdata.trading_name = response.data.data.trading_name;
                this.insertdata.trading_period = response.data.data.trading_period;
                this.insertdata.nameofsector = response.data.data.nameofsector;
                this.insertdata.have_you_change_organisation = response.data.data.have_you_change_organisation;
                this.insertdata.did_your_organisation_faced = response.data.data.did_your_organisation_faced;
                this.insertdata.auth_person_first_name = response.data.data.auth_person_first_name;
                this.insertdata.auth_person_last_name = response.data.data.auth_person_last_name;
                this.insertdata.auth_person_designation = response.data.data.auth_person_designation;
                this.insertdata.auth_person_phone_no = response.data.data.auth_person_phone_no;
                this.insertdata.auth_person_email = response.data.data.auth_person_email;
                this.insertdata.auth_person_did_you_have_history = response.data.data.auth_person_did_you_have_history;
                this.insertdata.key_contact_first_name = response.data.data.key_contact_first_name;
                this.insertdata.key_contact_last_name = response.data.data.key_contact_last_name;
                this.insertdata.key_contact_designation = response.data.data.key_contact_designation;
                this.insertdata.key_contact_email = response.data.data.key_contact_email;
                this.insertdata.key_contact_do_you_have_history = response.data.data.key_contact_do_you_have_history;
                this.insertdata.level_1_first_name = response.data.data.level_1_first_name;
                this.insertdata.level_1_last_name = response.data.data.level_1_last_name;
                this.insertdata.level_1_designation = response.data.data.level_1_designation;
                this.insertdata.level_1_phone_no = response.data.data.level_1_phone_no;
                this.insertdata.level_1_email = response.data.data.level_1_email;
                //    this.insertdata.level_1_prof_id = response.data.data.level_1_prof_id;
                this.insertdata.level_1_do_you_have_a_history = response.data.data.level_1_do_you_have_a_history;
                this.insertdata.orgian_post_code = response.data.data.orgian_post_code;
                this.insertdata.orgian_address = response.data.data.orgian_address;
                this.insertdata.orgian_level_1 = response.data.data.orgian_level_1;
                this.insertdata.orgian_level_2 = response.data.data.orgian_level_2;
                this.insertdata.orgian_level_3 = response.data.data.orgian_level_3;
                this.insertdata.orgian_city = response.data.data.orgian_city;
                this.insertdata.orgian_country = response.data.data.orgian_country;
                //step2
                this.insertdata.mon_status = response.data.data_two.mon_status;
                this.insertdata.mon_open = response.data.data_two.mon_open;
                this.insertdata.mon_close = response.data.data_two.mon_close;
                this.insertdata.tuesday_status = response.data.data_two.tuesday_status;
                this.insertdata.tuesday_open = response.data.data_two.tuesday_open;
                this.insertdata.tuesday_close = response.data.data_two.tuesday_close;
                this.insertdata.wed_status = response.data.data_two.wed_status;
                this.insertdata.wed_open = response.data.data_two.wed_open;
                this.insertdata.wed_close = response.data.data_two.wed_close;
                this.insertdata.thursday_status = response.data.data_two.thursday_status;
                this.insertdata.thursday_open = response.data.data_two.thursday_open;
                this.insertdata.thursday_close = response.data.data_two.thursday_close;
                this.insertdata.friday_status = response.data.data_two.friday_status;
                this.insertdata.friday_open = response.data.data_two.friday_open;
                this.insertdata.friday_close = response.data.data_two.friday_close;
                this.insertdata.satday_status = response.data.data_two.satday_status;
                this.insertdata.satday_open = response.data.data_two.satday_open;
                this.insertdata.satday_close = response.data.data_two.satday_close;
                this.insertdata.thursday_open = response.data.data_two.thursday_open;
                this.insertdata.sunday_status = response.data.data_two.sunday_status;
                this.insertdata.sunday_open = response.data.data_two.sunday_open;
                this.insertdata.sunday_close = response.data.data_two.sunday_close;
                //step3
                this.insertdata.docs_type_1 = response.data.data_three.docs_type_1;
                this.insertdata.docs_type_2 = response.data.data_three.docs_type_2;
                this.insertdata.docs_type_3 = response.data.data_three.docs_type_3;
                this.insertdata.docs_type_4 = response.data.data_three.docs_type_4;
                this.insertdata.docs_type_5 = response.data.data_three.docs_type_5;
                this.insertdata.docs_type_6 = response.data.data_three.docs_type_6;
                this.insertdata.docs_type_7 = response.data.data_three.docs_type_7;
                this.insertdata.docs_type_8 = response.data.data_three.docs_type_8;
                this.insertdata.docs_type_9 = response.data.data_three.docs_type_9;
                this.insertdata.docs_type_10 = response.data.data_three.docs_type_10;
                this.insertdata.docs_type_11 = response.data.data_three.docs_type_11;
                this.insertdata.docs_type_12 = response.data.data_three.docs_type_12;
                this.insertdata.docs_type_13 = response.data.data_three.docs_type_13;
                this.insertdata.docs_type_14 = response.data.data_three.docs_type_14;
                this.insertdata.docs_type_15 = response.data.data_three.docs_type_15;
                this.insertdata.docs_type_16 = response.data.data_three.docs_type_16;
                this.insertdata.docs_type_17 = response.data.data_three.docs_type_17;
                this.insertdata.docs_type_18 = response.data.data_three.docs_type_18;
                //files
                //step1 
                if (response.data.your_logo !== "") {
                    $('#show_your_logo').append(`<a target='_blank' href='${response.data.your_logo}'>Show Logo</a>`);
                }
                if (response.data.auth_person_prof_id !== "") {
                    $('#show_auth_person_prof_id').append(`<a target='_blank' href='${response.data.auth_person_prof_id}'>Show Prof ID</a>`);
                }
                if (response.data.key_contact_prof_id !== "") {
                    $('#show_key_contact_prof_id').append(`<a target='_blank' href='${response.data.key_contact_prof_id}'>Show Prof ID</a>`);
                }
                if (response.data.level_1_prof_id !== "") {
                    $('#show_level_1_prof_id').append(`<a target='_blank' href='${response.data.level_1_prof_id}'>Show Prof ID</a>`);
                }
                //step3
                if (response.data.data_three_docs_1 !== "") {
                    $('#show_data_three_docs_1').append(`<a target='_blank' href='${response.data.data_three_docs_1}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_2 !== "") {
                    $('#show_data_three_docs_2').append(`<a target='_blank' href='${response.data.data_three_docs_2}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_3 !== "") {
                    $('#show_data_three_docs_3').append(`<a target='_blank' href='${response.data.data_three_docs_3}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_4 !== "") {
                    $('#show_data_three_docs_4').append(`<a target='_blank' href='${response.data.data_three_docs_4}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_5 !== "") {
                    $('#show_data_three_docs_5').append(`<a target='_blank' href='${response.data.data_three_docs_5}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_6 !== "") {
                    $('#show_data_three_docs_6').append(`<a target='_blank' href='${response.data.data_three_docs_6}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_7 !== "") {
                    $('#show_data_three_docs_7').append(`<a target='_blank' href='${response.data.data_three_docs_7}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_8 !== "") {
                    $('#show_data_three_docs_8').append(`<a target='_blank' href='${response.data.data_three_docs_8}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_9 !== "") {
                    $('#show_data_three_docs_9').append(`<a target='_blank' href='${response.data.data_three_docs_9}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_10 !== "") {
                    $('#show_data_three_docs_10').append(`<a target='_blank' href='${response.data.data_three_docs_10}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_11 !== "") {
                    $('#show_data_three_docs_11').append(`<a target='_blank' href='${response.data.data_three_docs_11}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_12 !== "") {
                    $('#show_data_three_docs_12').append(`<a target='_blank' href='${response.data.data_three_docs_12}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_13 !== "") {
                    $('#show_data_three_docs_13').append(`<a target='_blank' href='${response.data.data_three_docs_13}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_14 !== "") {
                    $('#show_data_three_docs_14').append(`<a target='_blank' href='${response.data.data_three_docs_14}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_15 !== "") {
                    $('#show_data_three_docs_15').append(`<a target='_blank' href='${response.data.data_three_docs_15}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_16 !== "") {
                    $('#show_data_three_docs_16').append(`<a target='_blank' href='${response.data.data_three_docs_16}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_17 !== "") {
                    $('#show_data_three_docs_17').append(`<a target='_blank' href='${response.data.data_three_docs_17}'>Show Docs</a>`);
                }
                if (response.data.data_three_docs_18 !== "") {
                    $('#show_data_three_docs_18').append(`<a target='_blank' href='${response.data.data_three_docs_18}'>Show Docs</a>`);
                }
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },
    },
}
</script>
