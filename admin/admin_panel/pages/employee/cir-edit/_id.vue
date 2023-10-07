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
                                <router-link to="/hrm/dashboard" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/employee/change-of-circumstances-list">Circumstances List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Circumstances</li>
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
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Employee</label>
                                            <select name="employe_id" v-model="insertdata.employe_id" class="form-select employe_id" @change="getEmployee()">
                                                <option value="">Select</option>
                                                <option v-for='data in emplist' :value='data.id'>{{ data.name }} [{{ data.employee_code }}]
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employe_id">{{ errors.employe_id[0] }}</span>
                                            <input type="hidden" class="form-control id" v-model="insertdata.id" id="id">
                                        </div>

                                    </div>

                                    <hr>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Personal Details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Employee Code</label>
                                            <input type="hidden" class="form-control id" v-model="insertdata.id" id="id">
                                            <input type="text" class="form-control employee_code" v-model="insertdata.employee_code" id="employee_code" placeholder="Employee Code">
                                            <span class="text-danger" v-if="errors.employee_code">{{
                                                    errors.employee_code[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">First Name</label>
                                            <input type="text" class="form-control first_name" v-model="insertdata.first_name" id="first_name" placeholder="First Name">
                                            <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0]
                                                }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Middle Name</label>
                                            <input type="text" class="form-control middle_name" v-model="insertdata.middle_name" id="middle_name" placeholder="Middle Name">
                                            <span class="text-danger" v-if="errors.middle_name">{{ errors.middle_name[0]
                                                }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Last Name</label>
                                            <input type="text" class="form-control name" v-model="insertdata.last_name" id="last_name" placeholder="Last Name">
                                            <span class="text-danger" v-if="errors.last_name">{{ errors.last_name[0]
                                                }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">NI No.</label>
                                            <input type="text" class="form-control ni_no" v-model="insertdata.ni_no" id="ni_no" placeholder="NI No">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Marital Status</label>
                                            <select name="marital_status" v-model="insertdata.marital_status" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Unmarried">Unmarried</option>
                                                <option value="Widow">Widow</option>
                                                <option value="Divorce">Divorce</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.marital_status">{{
                                                    errors.marital_status[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Nationality</label>
                                            <select name="country_id" v-model="insertdata.country_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.country_id">{{ errors.country_id[0]
                                                }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Phone No</label>
                                            <input type="text" class="form-control phone" v-model="insertdata.phone" id="phone" placeholder="Phone No">
                                            <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Email</label>
                                            <input type="text" class="form-control email" v-model="insertdata.email" id="email" placeholder="Email">
                                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Age</label>
                                            <input type="text" class="form-control age" v-model="insertdata.age" id="age" placeholder="Age">
                                            <span class="text-danger" v-if="errors.age">{{ errors.age[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Gender</label>
                                            <select name="gender" v-model="insertdata.gender" class="form-select">
                                                <option value="">Select</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.gender">{{ errors.gender[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Joining Date</label>
                                            <input type="date" class="form-control age" v-model="insertdata.joning_date" id="joning_date" placeholder="Joining  Date">
                                            <span class="text-danger" v-if="errors.joning_date">{{ errors.joning_date[0]
                                                }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Date of Brith</label>
                                            <input type="date" class="form-control date_of_birth" v-model="insertdata.date_of_birth" id="date_of_birth" placeholder="Date of Brith">
                                            <span class="text-danger" v-if="errors.date_of_birth">{{
                                                    errors.date_of_birth[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Department</label>
                                            <select name="department_id" v-model="insertdata.department_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in department' :value='data.id'>{{ data.name }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.department_id">{{
                                                    errors.department_id[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Designation</label>
                                            <select name="department_id" v-model="insertdata.designation_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in designation' :value='data.id'>{{ data.name }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.designation_id">{{
                                                    errors.designation_id[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Salary</label>
                                            <input type="text" class="form-control salary" v-model="insertdata.salary" id="salary" placeholder="0.00">
                                            <span class="text-danger" v-if="errors.salary">{{ errors.salary[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Address</label>
                                            <input type="text" class="form-control address" v-model="insertdata.address" id="address" placeholder="Address">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Picture</label>
                                            <input type="file" ref="file" @change="onFileSelected" class="form-control" id="file" name="file" />
                                            <div id="show_profile_image"></div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Employment Type</label>
                                            <select name="employee_type" v-model="insertdata.employee_type" class="form-select">
                                                <option value="">Select</option>
                                                <option value="FULL TIME">FULL TIME</option>
                                                <option value="CONTRACTUAL">CONTRACTUAL</option>
                                                <option value="SUSPEND">SUSPEND</option>
                                                <option value="PART TIME">PART TIME</option>
                                                <option value="LEFT">LEFT</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employee_type">{{
                                                    errors.employee_type[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Date of Confirmation</label>
                                            <input type="date" class="form-control date_of_confirmation" v-model="insertdata.date_of_confirmation" id="date_of_confirmation" placeholder="Date of Confirmation">
                                            <span class="text-danger" v-if="errors.date_of_confirmation">{{
                                                    errors.date_of_confirmation[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Contract Start Date</label>
                                            <input type="date" class="form-control contact_start_date" v-model="insertdata.contact_start_date" id="contact_start_date" placeholder="Contract Start Date">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Contract End Date (If Applicable)</label>
                                            <input type="date" class="form-control contact_end_date" v-model="insertdata.contact_end_date" id="contact_end_date" placeholder="Contract End Date (If Applicable)">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Job Location</label>
                                            <input type="text" class="form-control job_location" v-model="insertdata.job_location" id="job_location" placeholder="Job Location">
                                            <span class="text-danger" v-if="errors.job_location">{{
                                                    errors.job_location[0] }}</span>
                                        </div>
                                        <div class="col-md-12">
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Reporting Authority</label>
                                            <input type="text" class="form-control reporting_authority" v-model="insertdata.reporting_authority" id="reporting_authority" placeholder="Reporting Authority">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Leave Sanction Authority</label>
                                            <input type="text" class="form-control leave_sanction_auth" v-model="insertdata.leave_sanction_auth" id="leave_sanction_auth">
                                            <br>
                                        </div>
                                        <br>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white;">Educational
                                                    Details</span></label>
                                            <textarea type="text" class="form-control education_details mt-2" v-model="insertdata.education_details" id="education_details"></textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Job
                                                    Details</span></label>
                                            <textarea type="text" class="form-control job_details mt-2" v-model="insertdata.job_details" id="job_details"></textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Key
                                                    Responsibilities</span></label>
                                            <textarea type="text" class="form-control age mt-2" v-model="insertdata.key_respons" id="key_respons"></textarea>
                                        </div>
                                        <!-- new section  -->
                                        <div class="form-group col-md-12">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Training
                                                    Details</span></label>
                                            <textarea type="text" class="form-control training_details mt-2" v-model="insertdata.training_details" id="training_details"></textarea>
                                            <hr>
                                        </div>
                                        <div class="col-md-12">
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Emergency / Next of
                                                    Kin Contact Details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Name</label>
                                            <input type="text" class="form-control emger_contact_name" v-model="insertdata.emger_contact_name" id="emger_contact_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Relationship</label>
                                            <select class="form-select" name="em_relation">
                                                <option value="">Select</option>
                                                <option value="Father">Father</option>
                                                <option value="Mother">Mother </option>
                                                <option value="Wife">Wife</option>
                                                <option value="Relatives">Relatives</option>
                                                <option value="Husband">Husband</option>
                                                <option value="Partner">Partner</option>
                                                <option value="Son">Son</option>
                                                <option value="Daughter">Daughter</option>
                                                <option value="Friend">Friend</option>
                                                <option value="Others" selected>Others</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Email</label>
                                            <input type="text" class="form-control emger_email" v-model="insertdata.emger_email" id="emger_email">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Emergency Contact No.</label>
                                            <input type="text" class="form-control emger_contact_no" v-model="insertdata.emger_contact_no" id="emger_contact_no">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <br>
                                            <label for="inputPassword4">Address</label>
                                            <input type="text" class="form-control emger_address" v-model="insertdata.emger_address" id="emger_address">
                                        </div>
                                        <div class="col-md-12">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Certified Membership</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Title of Certified License</label>
                                            <input type="text" class="form-control certifi_title" v-model="insertdata.certifi_title" id="certifi_title">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">License Number</label>
                                            <input type="text" class="form-control certifi_license_number" v-model="insertdata.certifi_license_number" id="certifi_license_number">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Start Date</label>
                                            <input type="date" class="form-control certifi_start_date" v-model="insertdata.certifi_start_date" id="certifi_start_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">End Date</label>
                                            <input type="date" class="form-control certifi_end_date" v-model="insertdata.certifi_end_date" id="certifi_end_date">
                                        </div>
                                        <div class="col-sm-12">
                                            <hr>
                                        </div>
                                        <div class="col-md-12">
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Contact Information (Correspondence Address)</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Post Code</label>
                                            <input type="text" class="form-control contact_info_post_code" v-model="insertdata.contact_info_post_code" id="contact_info_post_code">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Address</label>
                                            <input type="text" class="form-control contact_info_address" v-model="insertdata.contact_info_address" id="contact_info_address">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Address Line 1</label>
                                            <input type="text" class="form-control contact_info_address_1" v-model="insertdata.contact_info_address_1" id="contact_info_address_1">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Address Line 2</label>
                                            <input type="text" class="form-control contact_info_address_2" v-model="insertdata.contact_info_address_2" id="contact_info_address_2">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Address Line 3</label>
                                            <input type="text" class="form-control contact_info_address_3" v-model="insertdata.contact_info_address_3" id="contact_info_address_3">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">City / County</label>
                                            <input type="date" class="form-control contact_info_city_country" v-model="insertdata.contact_info_city_country" id="contact_info_city_country">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"> County</label>
                                            <select name="contact_info_country_id" v-model="insertdata.contact_info_country_id" class="form-select contact_info_country_id">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-12 gap-3">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Other Documents</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Type of Document</label>
                                            <input type="file" ref="type_of_doc" @change="onFiletypeOfDocument" class="form-control" id="type_of_doc" name="type_of_doc" />
                                            <small>If there are multiple files, zip all the files together and upload them</small>
                                            <div id="show_type_of_doc"></div>
                                        </div>
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Passport Details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Passport No.</label>
                                            <input type="text" class="form-control pass_no" v-model="insertdata.pass_no" id="pass_no">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Nationality</label>
                                            <select name="pass_nationality" v-model="insertdata.pass_nationality" class="form-select pass_nationality">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Place of Birth</label>
                                            <input type="date" class="form-control pass_place_birth" v-model="insertdata.pass_place_birth" id="pass_place_birth">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued By</label>
                                            <input type="text" class="form-control pass_issued_by" v-model="insertdata.pass_issued_by" id="pass_issued_by">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued Date</label>
                                            <input type="date" class="form-control pass_date" v-model="insertdata.pass_date" id="pass_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Expire Date</label>
                                            <input type="date" class="form-control pass_expire_date" v-model="insertdata.pass_expire_date" id="pass_expire_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Eligible Review Date</label>
                                            <input type="date" class="form-control pass_review_date" v-model="insertdata.pass_review_date" id="pass_review_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Upload Document</label>
                                            <input type="file" ref="passport_upload_docs" @change="onUploadDocument" class="form-control" id="passport_upload_docs" name="passport_upload_docs" />
                                            <small>If there are multiple files, zip all the files together and upload them</small>
                                            <div id="show_passport_upload_docs"></div>
                                        </div>
                                        <!-- ===============================================  Visa/BRP Details ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Visa/BRP Details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Visa/BRP No.</label>
                                            <input type="text" class="form-control visa_brp_np" v-model="insertdata.visa_brp_np" id="visa_brp_np">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Nationality</label>
                                            <select name="visa_nationality" v-model="insertdata.visa_nationality" class="form-select visa_nationality">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Country of Residence</label>
                                            <select name="visa_country_residence" v-model="insertdata.visa_country_residence" class="form-select visa_country_residence">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued By</label>
                                            <input type="text" class="form-control visa_issuedby" v-model="insertdata.visa_issuedby" id="visa_issuedby">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued Date</label>
                                            <input type="date" class="form-control visa_issued_date" v-model="insertdata.visa_issued_date" id="visa_issued_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Expire Date</label>
                                            <input type="date" class="form-control visa_expire_date" v-model="insertdata.visa_expire_date" id="visa_expire_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Eligible Review Date</label>
                                            <input type="date" class="form-control visa_eligbible_review_date" v-model="insertdata.visa_eligbible_review_date" id="visa_eligbible_review_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Front/Back Side Document</label>
                                            <input type="file" ref="visa_upload_documents" @change="onUploadDocumentVisa" class="form-control" id="visa_upload_documents" name="visa_upload_documents" />
                                            <small>If there are multiple files, zip all the files together and upload them</small>
                                            <div id="show_visa_upload_documents"></div>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Is this your current visa?</label>
                                            <select name="visa_current_yesno" v-model="insertdata.visa_current_yesno" class="form-select visa_current_yesno">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-9">
                                            <label for="inputPassword4"> Remarks</label>
                                            <input type="text" class="form-control visa_remarks" v-model="insertdata.visa_remarks" id="visa_remarks">
                                        </div>
                                        <!-- ===============================================  EUSS/Time limit details ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">EUSS/Time limit details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Reference Number.</label>
                                            <input type="text" class="form-control ess_ref_no" v-model="insertdata.ess_ref_no" name="ess_ref_no" id="ess_ref_no">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Nationality</label>
                                            <select name="ess_nationality" v-model="insertdata.ess_nationality" class="form-select ess_nationality">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued By</label>
                                            <input type="text" class="form-control ess_issued_by" v-model="insertdata.ess_issued_by" id="ess_issued_by">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued Date</label>
                                            <input type="date" class="form-control ess_issued_date" v-model="insertdata.ess_issued_date" id="ess_issued_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Expire Date</label>
                                            <input type="date" class="form-control ess_expire_date" v-model="insertdata.ess_expire_date" id="ess_expire_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Eligible Review Date</label>
                                            <input type="date" class="form-control ess_eligible_review_date" v-model="insertdata.ess_eligible_review_date" id="ess_eligible_review_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Upload Document</label>
                                            <input type="file" ref="euss_upload_documents" @change="onUploadDocumentEuss" class="form-control" id="euss_upload_documents" name="euss_upload_documents" />
                                            <small>If there are multiple files, zip all the files together and upload them</small>
                                            <div id="show_euss_upload_documents"></div>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Is this your current visa?</label>
                                            <select name="ess_current_visa" v-model="insertdata.ess_current_visa" class="form-select ess_current_visa">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4"> Remarks</label>
                                            <input type="text" class="form-control ess_remarks" v-model="insertdata.ess_remarks" id="ess_remarks">
                                        </div>
                                        <!-- ===============================================  National Id details ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">National ID details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">National id number.</label>
                                            <input type="text" class="form-control nid_number" v-model="insertdata.nid_number" id="nid_number">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Nationality</label>
                                            <select name="nid_nationality" v-model="insertdata.nid_nationality" class="form-select nid_nationality">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Country of Residence</label>
                                            <select name="nid_country_residence" v-model="insertdata.nid_country_residence" class="form-select nid_country_residence">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued Date</label>
                                            <input type="date" class="form-control nid_issue_date" v-model="insertdata.nid_issue_date" id="nid_issue_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Expire Date</label>
                                            <input type="date" class="form-control nid_expire_date" v-model="insertdata.nid_expire_date" id="nid_expire_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Eligible Review Date</label>
                                            <input type="date" class="form-control nid_eli_review_date" v-model="insertdata.nid_eli_review_date" id="nid_eli_review_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Upload Document</label>
                                            <input type="file" ref="nid_upload_documents" @change="onUploadDocumentnid" class="form-control" id="nid_upload_documents" name="nid_upload_documents" />
                                            <small>If there are multiple files, zip all the files together and upload them</small>
                                            <div id="show_nid_upload_documents"></div>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Is this your current visa?</label>
                                            <select name="country_id" v-model="insertdata.nid_current_visa" class="form-select">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4"> Remarks</label>
                                            <input type="text" class="form-control nid_remarks" v-model="insertdata.nid_remarks" id="nid_remarks">
                                        </div>
                                        <!-- ===============================================  Other details ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Other details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Document name.</label>
                                            <input type="text" class="form-control others_doc_name" v-model="insertdata.others_doc_name" id="others_doc_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Document reference number.</label>
                                            <input type="text" class="form-control others_ref_name" v-model="insertdata.others_ref_name" id="others_ref_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Nationality</label>
                                            <select name="others_nationality" v-model="insertdata.others_nationality" class="form-select others_nationality">
                                                <option value="">Select</option>
                                                <option v-for='data in allcountry' :value='data.id'>{{ data.countryname }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Issued Date</label>
                                            <input type="date" class="form-control others_issue_date" v-model="insertdata.others_issue_date" id="others_issue_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Expire Date</label>
                                            <input type="date" class="form-control others_expire_date" v-model="insertdata.others_expire_date" id="others_expire_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Eligible Review Date</label>
                                            <input type="date" class="form-control others_eligb_review_date" v-model="insertdata.others_eligb_review_date" id="others_eligb_review_date">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Upload Document</label>
                                            <input type="file" ref="upload_documents_other" @change="handleFileChange" class="form-control" id="upload_documents_other" name="upload_documents_other" />
                                            <small>If there are multiple files, zip all the files together and upload them</small>
                                            <div id="show_other_upload_documents"></div>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Is this your current visa?</label>
                                            <select name="others_visa_sts" v-model="insertdata.others_visa_sts" class="form-select others_visa_sts">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4"> Remarks</label>
                                            <input type="text" class="form-control others_remarks" v-model="insertdata.others_remarks" id="others_remarks">
                                        </div>
                                        <!-- ===============================================  Pay Details ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Pay Details</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Pay Group</label>
                                            <input type="text" class="form-control pay_group" v-model="insertdata.pay_group" id="pay_group">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Annual Pay</label>
                                            <input type="text" class="form-control pay_annual_pay" v-model="insertdata.pay_annual_pay" id="pay_annual_pay">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Wedges pay mode</label>
                                            <input type="text" class="form-control pay_wedges_pay_mode" v-model="insertdata.pay_wedges_pay_mode" id="pay_wedges_pay_mode">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Payment Type</label>
                                            <input type="text" class="form-control pay_payment_type" v-model="insertdata.pay_payment_type" id="pay_payment_type">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Basic / Daily Wedges</label>
                                            <input type="text" class="form-control pay_basic_daily_wedges" v-model="insertdata.pay_basic_daily_wedges" id="pay_basic_daily_wedges">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Min. Working Hour</label>
                                            <input type="text" class="form-control pay_min_working_hour" v-model="insertdata.pay_min_working_hour" id="pay_min_working_hour">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Rate</label>
                                            <input type="text" class="form-control middle_name" v-model="insertdata.middle_name" id="middle_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Tax Code</label>
                                            <input type="text" class="form-control pay_tax_code" v-model="insertdata.pay_tax_code" id="pay_tax_code">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Tax Reference</label>
                                            <input type="text" class="form-control pay_tax_ref" v-model="insertdata.pay_tax_ref" id="pay_tax_ref">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Tax Percentage</label>
                                            <input type="text" class="form-control pay_percentage" v-model="insertdata.pay_percentage" id="pay_percentage">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Payment Mode</label>
                                            <select name="pay_payment_mode" v-model="insertdata.pay_payment_mode" class="form-select pay_payment_mode">
                                                <option value="Bank">Bank</option>
                                                <option value="Cash">Cash</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Bank Name</label>
                                            <input type="text" class="form-control pay_bank_name" v-model="insertdata.pay_bank_name" id="pay_bank_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Branch Name</label>
                                            <input type="text" class="form-control pay_branch_name" v-model="insertdata.pay_branch_name" id="pay_branch_name">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Account No</label>
                                            <input type="text" class="form-control pay_account_no" v-model="insertdata.pay_account_no" id="pay_account_no">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Sort Code</label>
                                            <input type="text" class="form-control pay_sort_code" v-model="insertdata.pay_sort_code" id="pay_sort_code">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Payment Currency</label>
                                            <select name="pay_payment_currency" v-model="insertdata.pay_payment_currency" class="form-select pay_payment_currency">
                                                <option value="DZD">DZD</option>
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                                <option value="AOA">AOA</option>
                                                <option value="XCD">XCD</option>
                                                <option value="XCD">XCD</option>
                                                <option value="ARS">ARS</option>
                                                <option value="AMD">AMD</option>
                                                <option value="AWG">AWG</option>
                                                <option value="AUD">AUD</option>
                                                <option value="AZN">AZN</option>
                                                <option value="BSD">BSD</option>
                                                <option value="BHD">BHD</option>
                                                <option value="BDT">BDT</option>
                                                <option value="BBD">BBD</option>
                                                <option value="BYN">BYN</option>
                                                <option value="BZD">BZD</option>
                                                <option value="XOF">XOF</option>
                                                <option value="BMD">BMD</option>
                                                <option value="BTN">BTN</option>
                                                <option value="INR">INR</option>
                                                <option value="BOB">BOB</option>
                                                <option value="BOV">BOV</option>
                                                <option value="BAM">BAM</option>
                                                <option value="BWP">BWP</option>
                                                <option value="NOK">NOK</option>
                                                <option value="BRL">BRL</option>
                                                <option value="BND">BND</option>
                                                <option value="BGN">BGN</option>
                                                <option value="XOF">XOF</option>
                                                <option value="BIF">BIF</option>
                                                <option value="CVE">CVE</option>
                                                <option value="KHR">KHR</option>
                                                <option value="XAF">XAF</option>
                                                <option value="CAD">CAD</option>
                                                <option value="KYD">KYD</option>
                                                <option value="XAF">XAF</option>
                                                <option value="XAF">XAF</option>
                                                <option value="CLF">CLF</option>
                                                <option value="CLP">CLP</option>
                                                <option value="CNY">CNY</option>
                                                <option value="COP">COP</option>
                                                <option value="COU">COU</option>
                                                <option value="KMF">KMF</option>
                                                <option value="CDF">CDF</option>
                                                <option value="XAF">XAF</option>
                                                <option value="NZD">NZD</option>
                                                <option value="CRC">CRC</option>
                                                <option value="HRK">HRK</option>
                                                <option value="CUC">CUC</option>
                                                <option value="CUP">CUP</option>
                                                <option value="ANG">ANG</option>
                                                <option value="CZK">CZK</option>
                                                <option value="XOF">XOF</option>
                                                <option value="DKK">DKK</option>
                                                <option value="DJF">DJF</option>
                                                <option value="XCD">XCD</option>
                                                <option value="DOP">DOP</option>
                                                <option value="EGP">EGP</option>
                                                <option value="SVC">SVC</option>
                                                <option value="XAF">XAF</option>
                                                <option value="ERN">ERN</option>
                                                <option value="ETB">ETB</option>
                                                <option value="FKP">FKP</option>
                                                <option value="DKK">DKK</option>
                                                <option value="FJD">FJD</option>
                                                <option value="XPF">XPF</option>
                                                <option value="XAF">XAF</option>
                                                <option value="GMD">GMD</option>
                                                <option value="GEL">GEL</option>
                                                <option value="GHS">GHS</option>
                                                <option value="GIP">GIP</option>
                                                <option value="DKK">DKK</option>
                                                <option value="XCD">XCD</option>
                                                <option value="GTQ">GTQ</option>
                                                <option value="GBP" selected>GBP</option>
                                                <option value="GNF">GNF</option>
                                                <option value="XOF">XOF</option>
                                                <option value="GYD">GYD</option>
                                                <option value="HTG">HTG</option>
                                                <option value="HNL">HNL</option>
                                                <option value="HKD">HKD</option>
                                                <option value="HUF">HUF</option>
                                                <option value="ISK">ISK</option>
                                                <option value="INR">INR</option>
                                                <option value="IDR">IDR</option>
                                                <option value="XDR">XDR</option>
                                                <option value="IRR">IRR</option>
                                                <option value="IQD">IQD</option>
                                                <option value="ILS">ILS</option>
                                                <option value="JMD">JMD</option>
                                                <option value="JPY">JPY</option>
                                                <option value="JOD">JOD</option>
                                                <option value="KZT">KZT</option>
                                                <option value="KES">KES</option>
                                                <option value="KPW">KPW</option>
                                                <option value="KRW">KRW</option>
                                                <option value="KWD">KWD</option>
                                                <option value="KGS">KGS</option>
                                                <option value="LAK">LAK</option>
                                                <option value="LBP">LBP</option>
                                                <option value="LSL">LSL</option>
                                                <option value="ZAR">ZAR</option>
                                                <option value="LRD">LRD</option>
                                                <option value="LYD">LYD</option>
                                                <option value="CHF">CHF</option>
                                                <option value="MOP">MOP</option>
                                                <option value="MGA">MGA</option>
                                                <option value="MWK">MWK</option>
                                                <option value="MYR">MYR</option>
                                                <option value="MVR">MVR</option>
                                                <option value="XOF">XOF</option>
                                                <option value="MRU">MRU</option>
                                                <option value="MUR">MUR</option>
                                                <option value="XUA">XUA</option>
                                                <option value="MXN">MXN</option>
                                                <option value="MXV">MXV</option>
                                                <option value="MDL">MDL</option>
                                                <option value="MNT">MNT</option>
                                                <option value="XCD">XCD</option>
                                                <option value="MAD">MAD</option>
                                                <option value="MZN">MZN</option>
                                                <option value="MMK">MMK</option>
                                                <option value="NAD">NAD</option>
                                                <option value="ZAR">ZAR</option>
                                                <option value="NPR">NPR</option>
                                                <option value="XPF">XPF</option>
                                                <option value="NZD">NZD</option>
                                                <option value="NIO">NIO</option>
                                                <option value="XOF">XOF</option>
                                                <option value="NGN">NGN</option>
                                                <option value="NZD">NZD</option>
                                                <option value="NOK">NOK</option>
                                                <option value="OMR">OMR</option>
                                                <option value="PKR">PKR</option>
                                                <option value="PAB">PAB</option>
                                                <option value="PGK">PGK</option>
                                                <option value="PYG">PYG</option>
                                                <option value="PEN">PEN</option>
                                                <option value="PHP">PHP</option>
                                                <option value="NZD">NZD</option>
                                                <option value="PLN">PLN</option>
                                                <option value="QAR">QAR</option>
                                                <option value="MKD">MKD</option>
                                                <option value="RON">RON</option>
                                                <option value="RUB">RUB</option>
                                                <option value="RWF">RWF</option>
                                                <option value="SHP">SHP</option>
                                                <option value="XCD">XCD</option>
                                                <option value="XCD">XCD</option>
                                                <option value="XCD">XCD</option>
                                                <option value="WST">WST</option>
                                                <option value="STN">STN</option>
                                                <option value="SAR">SAR</option>
                                                <option value="XOF">XOF</option>
                                                <option value="RSD">RSD</option>
                                                <option value="SCR">SCR</option>
                                                <option value="SLL">SLL</option>
                                                <option value="SGD">SGD</option>
                                                <option value="ANG">ANG</option>
                                                <option value="XSU">XSU</option>
                                                <option value="SBD">SBD</option>
                                                <option value="SOS">SOS</option>
                                                <option value="ZAR">ZAR</option>
                                                <option value="SSP">SSP</option>
                                                <option value="LKR">LKR</option>
                                                <option value="SDG">SDG</option>
                                                <option value="SRD">SRD</option>
                                                <option value="NOK">NOK</option>
                                                <option value="SZL">SZL</option>
                                                <option value="SEK">SEK</option>
                                                <option value="CHE">CHE</option>
                                                <option value="CHF">CHF</option>
                                                <option value="CHW">CHW</option>
                                                <option value="SYP">SYP</option>
                                                <option value="TWD">TWD</option>
                                                <option value="TJS">TJS</option>
                                                <option value="TZS">TZS</option>
                                                <option value="THB">THB</option>
                                                <option value="XOF">XOF</option>
                                                <option value="NZD">NZD</option>
                                                <option value="TOP">TOP</option>
                                                <option value="TTD">TTD</option>
                                                <option value="TND">TND</option>
                                                <option value="TRY">TRY</option>
                                                <option value="TMT">TMT</option>
                                                <option value="UGX">UGX</option>
                                                <option value="UAH">UAH</option>
                                                <option value="AED">AED</option>
                                                <option value="USN">USN</option>
                                                <option value="UYI">UYI</option>
                                                <option value="UYU">UYU</option>
                                                <option value="UZS">UZS</option>
                                                <option value="VUV">VUV</option>
                                                <option value="VEF">VEF</option>
                                                <option value="VND">VND</option>
                                                <option value="XPF">XPF</option>
                                                <option value="MAD">MAD</option>
                                                <option value="YER">YER</option>
                                                <option value="ZMW">ZMW</option>
                                                <option value="ZWL">ZWL</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4"> Remarks</label>
                                            <input type="text" class="form-control pay_remarks" v-model="insertdata.pay_remarks" id="pay_remarks">
                                        </div>
                                        <!-- ===============================================  Payment (Taxable) ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Payment (Taxable)</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">
                                                <input type="checkbox" name="payment_da" v-model="insertdata.payment_da" value="1">
                                            </label>
                                            Dearness Allowance
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4"><input type="checkbox" name="hra" v-model="insertdata.payment_hra" value="2"></label>
                                            House Rent Allowance
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"><input type="checkbox" name="conven_ta" v-model="insertdata.payment_conven_ta" value="3"></label>
                                            Conveyance Allowance
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"><input type="checkbox" name="perfomance" v-model="insertdata.payment_perfomance" value="4"></label>
                                            Performance Allowance
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"><input type="checkbox" name="monthly_al" v-model="insertdata.payment_monthly_al" value="5"></label>
                                            Monthly Fixed Allowance
                                        </div>
                                        <!-- ===============================================  Deduction ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Deduction</span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4"> <input type="checkbox" name="da" value="1" v-model="insertdata.ni_dedu_da"></label>NI Deduction
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4"><input type="checkbox" name="ni_dedu_hra" value="2" v-model="insertdata.ni_dedu_hra"></label>
                                            I. Tax Deduction
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"><input type="checkbox" name="ni_dedu_conven_ta" value="3" v-model="insertdata.ni_dedu_conven_ta"></label>
                                            I. Tax Cess
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"><input type="checkbox" name="ni_dedu_perfomance" value="4" v-model="insertdata.ni_dedu_perfomance"></label>ESI
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4"><input type="checkbox" name="ni_dedu_monthly_al" value="5" v-model="insertdata.ni_dedu_monthly_al"></label>Prof Tax
                                        </div>
                                        <!-- ===============================================  Verification Status ============================================== -->
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Verification Status</span></label>
                                            <hr>
                                        </div>
                                        <select name="status" v-model="insertdata.status" class="form-select">
                                            <option value="1">Approved</option>
                                            <option value="0">Not Approved</option>
                                        </select>
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
.bg-dark {
    background-color: #0d4b88 !important;
}
</style>

<script>
import $ from "jquery";
export default {
    head: {
        title: 'Circumstances Edit',
    },
    data() {
        return {
            insertdata: {
                employe_id: '',
                id: '',
                name: '',
                email: '',
                phone: '',
                address: '',
                department_id: '',
                designation_id: '',
                salary: '',
                age: '',
                joning_date: '',
                date_of_birth: '',
                employee_code: '',
                first_name: '',
                middle_name: '',
                last_name: '',
                ni_no: '',
                marital_status: '',
                country_id: '',
                employee_type: '',
                date_of_confirmation: '',
                contact_start_date: '',
                contact_end_date: '',
                job_location: '',
                reporting_authority: '',
                leave_sanction_auth: '',
                education_details: '',
                job_details: '',
                key_respons: '',
                gender: '',
                status: '',
                //Docs
                type_of_doc: '',
                passport_upload_docs: '',
                visa_upload_documents: '',
                onUploadDocumentEuss: '',
                nid_upload_documents: '',
                upload_documents_other: null,
                //second
                training_details: '',
                emger_contact_name: '',
                emger_email: '',
                emger_contact_no: '',
                emger_address: '',
                //Certificate
                certifi_title: '',
                certifi_license_number: '',
                certifi_start_date: '',
                certifi_end_date: '',
                //Contact 
                contact_info_post_code: '',
                contact_info_address: '',
                contact_info_address_1: '',
                contact_info_address_2: '',
                contact_info_address_3: '',
                contact_info_city_country: '',
                contact_info_country_id: '',
                //Passport 
                pass_no: '',
                pass_nationality: '',
                pass_place_birth: '',
                pass_issued_by: '',
                pass_date: '',
                pass_expire_date: '',
                pass_review_date: '',
                //Visa
                visa_brp_np: '',
                visa_nationality: '',
                visa_country_residence: '',
                visa_issuedby: '',
                visa_issued_date: '',
                visa_expire_date: '',
                visa_eligbible_review_date: '',
                visa_current_yesno: '',
                visa_remarks: '',
                //ESS
                ess_ref_no: '',
                ess_nationality: '',
                ess_issued_by: '',
                ess_issued_date: '',
                ess_expire_date: '',
                ess_eligible_review_date: '',
                ess_current_visa: '',
                ess_remarks: '',
                //NID 
                nid_number: '',
                nid_nationality: '',
                nid_country_residence: '',
                nid_issue_date: '',
                nid_expire_date: '',
                nid_eli_review_date: '',
                nid_current_visa: '',
                nid_remarks: '',
                //Others
                others_doc_name: '',
                others_ref_name: '',
                others_nationality: '',
                others_issue_date: '',
                others_expire_date: '',
                others_eligb_review_date: '',
                others_visa_sts: '',
                others_remarks: '',
                //Pay
                pay_group: '',
                pay_annual_pay: '',
                pay_wedges_pay_mode: '',
                pay_payment_type: '',
                pay_basic_daily_wedges: '',
                pay_min_working_hour: '',
                pay_tax_code: '',
                pay_tax_ref: '',
                pay_percentage: '',
                pay_payment_mode: '',
                pay_tax_ref: '',
                pay_bank_name: '',
                pay_branch_name: '',
                pay_sort_code: '',
                pay_remarks: '',
                //Payment 
                payment_da: '',
                payment_hra: '',
                payment_conven_ta: '',
                payment_perfomance: '',
                payment_monthly_al: '',
                //NI
                ni_dedu_da: '',
                ni_dedu_hra: '',
                ni_dedu_conven_ta: '',
                ni_dedu_perfomance: '',
                ni_dedu_monthly_al: '',
            },
            notifmsg: '',
            department: [],
            designation: [],
            allcountry: [],
            emplist: [],
            errors: {},
        }
    },
    created() {
        this.getDepartment();
        this.getDesignation();
        this.getData();
        this.getCountrys();
        this.getEmployeList();
    },
    methods: {
        getEmployeList() {
            this.$axios.get(`/user/getEmployeeList`).then(response => {
                this.emplist = response.data.data;
            });
        },
        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },
        onFiletypeOfDocument() {
            this.type_of_doc = this.$refs.file.files[0];
        },
        onUploadDocument() {
            this.upload_documents = this.$refs.file.files[0];
        },
        onUploadDocumentVisa() {
            this.visa_upload_documents = this.$refs.file.files[0];
        },
        onUploadDocumentEuss() {
            this.euss_upload_documents = this.$refs.file.files[0];
        },
        onUploadDocumentnid() {
            this.passport_upload_docs = this.$refs.file.files[0];
        },
        handleFileChange(event) {
            this.other_upload_documents = event.target.files[0];
        },
        saveData() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('type_of_doc', this.type_of_doc);
            formData.append('passport_upload_docs', this.passport_upload_docs);
            formData.append('visa_upload_documents', this.visa_upload_documents);
            formData.append('euss_upload_documents', this.euss_upload_documents);
            formData.append('nid_upload_documents', this.nid_upload_documents);
            formData.append('other_upload_documents', this.other_upload_documents);
            formData.append('employe_id', this.insertdata.employe_id);
            formData.append('id', this.insertdata.id);
            formData.append('name', this.insertdata.name);
            formData.append('email', this.insertdata.email);
            formData.append('phone', this.insertdata.phone);
            formData.append('address', this.insertdata.address);
            formData.append('department_id', this.insertdata.department_id);
            formData.append('designation_id', this.insertdata.designation_id);
            formData.append('salary', this.insertdata.salary);
            formData.append('age', this.insertdata.age);
            formData.append('joning_date', this.insertdata.joning_date);
            formData.append('date_of_birth', this.insertdata.date_of_birth);
            formData.append('gender', this.insertdata.gender);
            formData.append('status', this.insertdata.status);
            formData.append('employee_code', this.insertdata.employee_code);
            formData.append('first_name', this.insertdata.first_name);
            formData.append('middle_name', this.insertdata.middle_name);
            formData.append('last_name', this.insertdata.last_name);
            formData.append('ni_no', this.insertdata.ni_no);
            formData.append('marital_status', this.insertdata.marital_status);
            formData.append('country_id', this.insertdata.country_id);
            formData.append('employee_type', this.insertdata.employee_type);
            formData.append('date_of_confirmation', this.insertdata.date_of_confirmation);
            formData.append('contact_start_date', this.insertdata.contact_start_date);
            formData.append('contact_end_date', this.insertdata.contact_end_date);
            formData.append('job_location', this.insertdata.job_location);
            formData.append('reporting_authority', this.insertdata.reporting_authority);
            formData.append('leave_sanction_auth', this.insertdata.leave_sanction_auth);
            formData.append('education_details', this.insertdata.education_details);
            formData.append('job_details', this.insertdata.job_details);
            formData.append('key_respons', this.insertdata.key_respons);
            formData.append('training_details', this.insertdata.training_details);
            //Emgergency
            formData.append('emger_contact_name', this.insertdata.emger_contact_name);
            formData.append('emger_email', this.insertdata.emger_email);
            formData.append('emger_contact_no', this.insertdata.emger_contact_no);
            formData.append('emger_address', this.insertdata.emger_address);
            //Certificate
            formData.append('certifi_title', this.insertdata.certifi_title);
            formData.append('certifi_license_number', this.insertdata.certifi_license_number);
            formData.append('certifi_start_date', this.insertdata.certifi_start_date);
            formData.append('certifi_end_date', this.insertdata.certifi_end_date);
            //Contact
            formData.append('contact_info_post_code', this.insertdata.contact_info_post_code);
            formData.append('contact_info_address', this.insertdata.contact_info_address);
            formData.append('contact_info_address_1', this.insertdata.contact_info_address_1);
            formData.append('contact_info_address_2', this.insertdata.contact_info_address_2);
            formData.append('contact_info_address_3', this.insertdata.contact_info_address_3);
            formData.append('contact_info_city_country', this.insertdata.contact_info_city_country);
            formData.append('contact_info_country_id', this.insertdata.contact_info_country_id);
            //Pass
            formData.append('pass_no', this.insertdata.pass_no);
            formData.append('pass_nationality', this.insertdata.pass_nationality);
            formData.append('pass_place_birth', this.insertdata.pass_place_birth);
            formData.append('pass_issued_by', this.insertdata.pass_issued_by);
            formData.append('pass_date', this.insertdata.pass_date);
            formData.append('pass_expire_date', this.insertdata.pass_expire_date);
            formData.append('pass_review_date', this.insertdata.pass_review_date);
            //VISA
            formData.append('visa_brp_np', this.insertdata.visa_brp_np);
            formData.append('visa_nationality', this.insertdata.visa_nationality);
            formData.append('visa_country_residence', this.insertdata.visa_country_residence);
            formData.append('visa_issuedby', this.insertdata.visa_issuedby);
            formData.append('visa_issued_date', this.insertdata.visa_issued_date);
            formData.append('visa_expire_date', this.insertdata.visa_expire_date);
            formData.append('visa_eligbible_review_date', this.insertdata.visa_eligbible_review_date);
            formData.append('visa_current_yesno', this.insertdata.visa_current_yesno);
            formData.append('visa_remarks', this.insertdata.visa_remarks);
            //ESS
            formData.append('ess_ref_no', this.insertdata.ess_ref_no);
            formData.append('ess_nationality', this.insertdata.ess_nationality);
            formData.append('ess_issued_by', this.insertdata.ess_issued_by);
            formData.append('ess_issued_date', this.insertdata.ess_issued_date);
            formData.append('ess_expire_date', this.insertdata.ess_expire_date);
            formData.append('ess_eligible_review_date', this.insertdata.ess_eligible_review_date);
            formData.append('ess_current_visa', this.insertdata.ess_current_visa);
            formData.append('ess_remarks', this.insertdata.ess_remarks);
            //NID
            formData.append('nid_number', this.insertdata.nid_number);
            formData.append('nid_nationality', this.insertdata.nid_nationality);
            formData.append('nid_country_residence', this.insertdata.nid_country_residence);
            formData.append('nid_issue_date', this.insertdata.nid_issue_date);
            formData.append('nid_expire_date', this.insertdata.nid_expire_date);
            formData.append('nid_eli_review_date', this.insertdata.nid_eli_review_date);
            formData.append('nid_current_visa', this.insertdata.nid_current_visa);
            formData.append('nid_remarks', this.insertdata.nid_remarks);
            //Othres
            formData.append('others_doc_name', this.insertdata.others_doc_name);
            formData.append('others_ref_name', this.insertdata.others_ref_name);
            formData.append('others_nationality', this.insertdata.others_nationality);
            formData.append('others_issue_date', this.insertdata.others_issue_date);
            formData.append('others_expire_date', this.insertdata.others_expire_date);
            formData.append('others_eligb_review_date', this.insertdata.others_eligb_review_date);
            formData.append('others_visa_sts', this.insertdata.others_visa_sts);
            formData.append('others_remarks', this.insertdata.others_remarks);
            //Pay
            formData.append('pay_group', this.insertdata.pay_group);
            formData.append('pay_annual_pay', this.insertdata.pay_annual_pay);
            formData.append('pay_wedges_pay_mode', this.insertdata.pay_wedges_pay_mode);
            formData.append('pay_payment_type', this.insertdata.pay_payment_type);
            formData.append('pay_basic_daily_wedges', this.insertdata.pay_basic_daily_wedges);
            formData.append('pay_min_working_hour', this.insertdata.pay_min_working_hour);
            formData.append('pay_tax_code', this.insertdata.pay_tax_code);
            formData.append('pay_tax_ref', this.insertdata.pay_tax_ref);
            formData.append('pay_percentage', this.insertdata.pay_percentage);
            formData.append('pay_payment_mode', this.insertdata.pay_payment_mode);
            formData.append('pay_bank_name', this.insertdata.pay_bank_name);
            formData.append('pay_branch_name', this.insertdata.pay_branch_name);
            formData.append('pay_account_no', this.insertdata.pay_account_no);
            formData.append('pay_sort_code', this.insertdata.pay_sort_code);
            formData.append('pay_remarks', this.insertdata.pay_remarks);
            //Payment
            formData.append('payment_da', this.insertdata.payment_da);
            formData.append('payment_hra', this.insertdata.payment_hra);
            formData.append('payment_conven_ta', this.insertdata.payment_conven_ta);
            formData.append('payment_perfomance', this.insertdata.payment_perfomance);
            formData.append('payment_monthly_al', this.insertdata.payment_monthly_al);
            //NI
            formData.append('ni_dedu_da', this.insertdata.ni_dedu_da);
            formData.append('ni_dedu_hra', this.insertdata.ni_dedu_hra);
            formData.append('ni_dedu_conven_ta', this.insertdata.ni_dedu_conven_ta);
            formData.append('ni_dedu_perfomance', this.insertdata.ni_dedu_perfomance);
            formData.append('ni_dedu_monthly_al', this.insertdata.ni_dedu_monthly_al);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/saveCircumstances',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/employee/change-of-circumstances-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getDepartment() {
            this.$axios.get(`/user/getDepartmentList`).then(response => {
                this.department = response.data.data;
            });
        },
        getDesignation() {
            this.$axios.get(`/user/getDesignationList`).then(response => {
                this.designation = response.data.data;
            });
        },
        getCountrys() {
            this.$axios.get(`/user/getCountry`).then(response => {
                this.allcountry = response.data.data;
            });
        },
        getEmployee() {
            let id = this.insertdata.employe_id;
            this.$axios.get(`/user/employeeRow/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                // this.insertdata.employe_id = response.data.data.employe_id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.email = response.data.data.email;
                this.insertdata.phone = response.data.data.phone;
                this.insertdata.address = response.data.data.address;
                this.insertdata.department_id = response.data.data.department_id;
                this.insertdata.designation_id = response.data.data.designation_id;
                this.insertdata.salary = response.data.data.salary;
                this.insertdata.age = response.data.data.age;
                this.insertdata.joning_date = response.data.data.joning_date;
                this.insertdata.date_of_birth = response.data.data.date_of_birth;
                this.insertdata.gender = response.data.data.gender;
                this.insertdata.status = response.data.data.status;
                this.insertdata.employee_code = response.data.data.employee_code;
                this.insertdata.first_name = response.data.data.first_name;
                this.insertdata.middle_name = response.data.data.middle_name;
                this.insertdata.last_name = response.data.data.last_name;
                this.insertdata.ni_no = response.data.data.ni_no;
                this.insertdata.marital_status = response.data.data.marital_status;
                this.insertdata.country_id = response.data.data.country_id;
                this.insertdata.employee_type = response.data.data.employee_type;
                this.insertdata.date_of_confirmation = response.data.data.date_of_confirmation;
                this.insertdata.contact_start_date = response.data.data.contact_start_date;
                this.insertdata.contact_end_date = response.data.data.contact_end_date;
                this.insertdata.job_location = response.data.data.job_location;
                this.insertdata.reporting_authority = response.data.data.reporting_authority;
                this.insertdata.leave_sanction_auth = response.data.data.leave_sanction_auth;
                this.insertdata.education_details = response.data.data.education_details;
                this.insertdata.job_details = response.data.data.job_details;
                this.insertdata.key_respons = response.data.data.key_respons;
                this.insertdata.status = response.data.data.status;
                //===================================================== start  =====================================================
                //second
                this.insertdata.training_details = response.data.data.training_details;
                //Emgergency
                this.insertdata.emger_contact_name = response.data.data.emger_contact_name
                this.insertdata.emger_email = response.data.data.emger_email;
                this.insertdata.emger_contact_no = response.data.data.emger_contact_no;
                this.insertdata.emger_address = response.data.data.emger_address;
                //Certificate
                this.insertdata.certifi_title = response.data.data.certifi_title;
                this.insertdata.certifi_license_number = response.data.data.certifi_license_number;
                this.insertdata.certifi_start_date = response.data.data.certifi_start_date;
                this.insertdata.certifi_end_date = response.data.data.certifi_end_date;
                //Contact
                this.insertdata.contact_info_post_code = response.data.data.contact_info_post_code;
                this.insertdata.contact_info_address = response.data.data.contact_info_address;
                this.insertdata.contact_info_address_1 = response.data.data.contact_info_address_1;
                this.insertdata.contact_info_address_2 = response.data.data.contact_info_address_2;
                this.insertdata.contact_info_address_3 = response.data.data.contact_info_address_3;
                this.insertdata.contact_info_city_country = response.data.data.contact_info_city_country;
                this.insertdata.contact_info_country_id = response.data.data.contact_info_country_id;
                //Pass
                this.insertdata.pass_no = response.data.data.pass_no;
                this.insertdata.pass_nationality = response.data.data.pass_nationality;
                this.insertdata.pass_place_birth = response.data.data.pass_place_birth;
                this.insertdata.pass_issued_by = response.data.data.pass_issued_by;
                this.insertdata.pass_date = response.data.data.pass_date;
                this.insertdata.pass_expire_date = response.data.data.pass_expire_date;
                this.insertdata.pass_review_date = response.data.data.pass_review_date;
                //VISA
                this.insertdata.visa_brp_np = response.data.data.visa_brp_np;
                this.insertdata.visa_nationality = response.data.data.visa_nationality;
                this.insertdata.visa_country_residence = response.data.data.visa_country_residence;
                this.insertdata.visa_issuedby = response.data.data.visa_issuedby;
                this.insertdata.visa_issued_date = response.data.data.visa_issued_date;
                this.insertdata.visa_expire_date = response.data.data.visa_expire_date;
                this.insertdata.visa_eligbible_review_date = response.data.data.visa_eligbible_review_date;
                this.insertdata.visa_current_yesno = response.data.data.visa_current_yesno;
                this.insertdata.visa_remarks = response.data.data.visa_remarks;
                //ESS
                this.insertdata.ess_ref_no = response.data.data.ess_ref_no;
                this.insertdata.ess_nationality = response.data.data.ess_nationality;
                this.insertdata.ess_issued_by = response.data.data.ess_issued_by;
                this.insertdata.ess_issued_date = response.data.data.ess_issued_date;
                this.insertdata.ess_expire_date = response.data.data.ess_expire_date;
                this.insertdata.ess_eligible_review_date = response.data.data.ess_eligible_review_date;
                this.insertdata.ess_current_visa = response.data.data.ess_current_visa;
                this.insertdata.ess_remarks = response.data.data.ess_remarks;
                //NID
                this.insertdata.nid_number = response.data.data.nid_number;
                this.insertdata.nid_nationality = response.data.data.nid_nationality;
                this.insertdata.nid_country_residence = response.data.data.nid_country_residence;
                this.insertdata.nid_issue_date = response.data.data.nid_issue_date;
                this.insertdata.nid_expire_date = response.data.data.nid_expire_date;
                this.insertdata.nid_eli_review_date = response.data.data.nid_eli_review_date;
                this.insertdata.nid_current_visa = response.data.data.nid_current_visa;
                this.insertdata.nid_remarks = response.data.data.nid_remarks;
                //Othres
                this.insertdata.others_doc_name = response.data.data.others_doc_name;
                this.insertdata.others_ref_name = response.data.data.others_ref_name;
                this.insertdata.others_nationality = response.data.data.others_nationality;
                this.insertdata.others_issue_date = response.data.data.others_issue_date;
                this.insertdata.others_expire_date = response.data.data.others_expire_date;
                this.insertdata.others_eligb_review_date = response.data.data.others_eligb_review_date;
                this.insertdata.others_visa_sts = response.data.data.others_visa_sts;
                this.insertdata.others_remarks = response.data.data.others_remarks;
                //Pay
                this.insertdata.pay_group = response.data.data.pay_group;
                this.insertdata.pay_annual_pay = response.data.data.pay_annual_pay;
                this.insertdata.pay_wedges_pay_mode = response.data.data.pay_wedges_pay_mode;
                this.insertdata.pay_payment_type = response.data.data.pay_payment_type;
                this.insertdata.pay_basic_daily_wedges = response.data.data.pay_basic_daily_wedges;
                this.insertdata.pay_min_working_hour = response.data.data.pay_min_working_hour;
                this.insertdata.pay_tax_code = response.data.data.pay_tax_code;
                this.insertdata.pay_tax_ref = response.data.data.pay_tax_ref;
                this.insertdata.pay_percentage = response.data.data.pay_percentage;
                this.insertdata.pay_payment_mode = response.data.data.pay_payment_mode;
                this.insertdata.pay_bank_name = response.data.data.pay_bank_name;
                this.insertdata.pay_branch_name = response.data.data.pay_branch_name;
                this.insertdata.pay_account_no = response.data.data.pay_account_no;
                this.insertdata.pay_sort_code = response.data.data.pay_sort_code;
                this.insertdata.pay_remarks = response.data.data.pay_remarks;
                //Payment
                this.insertdata.payment_da = response.data.data.payment_da === 'true' ? response.data.data.payment_da : "";
                this.insertdata.payment_hra = response.data.data.payment_hra === 'true' ? response.data.data.payment_hra : "";
                this.insertdata.payment_conven_ta = response.data.data.payment_conven_ta === 'true' ? response.data.data.payment_conven_ta : "";
                this.insertdata.payment_perfomance = response.data.data.payment_perfomance === 'true' ? response.data.data.payment_perfomance : "";
                this.insertdata.payment_monthly_al = response.data.data.payment_monthly_al === 'true' ? response.data.data.payment_monthly_al : "";
                //NI
                this.insertdata.ni_dedu_da = response.data.data.ni_dedu_da === 'true' ? response.data.data.ni_dedu_da : "";
                this.insertdata.ni_dedu_perfomance = response.data.data.ni_dedu_perfomance === 'true' ? response.data.data.ni_dedu_perfomance : "";
                this.insertdata.ni_dedu_conven_ta = response.data.data.ni_dedu_conven_ta === 'true' ? response.data.data.ni_dedu_conven_ta : "";
                this.insertdata.ni_dedu_hra = response.data.data.ni_dedu_hra === 'true' ? response.data.data.ni_dedu_hra : "";
                this.insertdata.ni_dedu_monthly_al = response.data.data.ni_dedu_monthly_al === 'true' ? response.data.data.ni_dedu_monthly_al : "";
                //END
                console.log("type_of_doc:" + response.data.other_upload_documents);
                // $('#show_profile_image').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + response.data.image + '" />');
                if (response.data.image !== "") {
                    $('#show_profile_image').append(`<a target='_blank' href='${response.data.image}'>Show Picture</a>`);
                }
                if (response.data.type_of_doc !== "") {
                    $('#show_type_of_doc').append(`<a target='_blank' href='${response.data.type_of_doc}'>Show docs</a>`);
                }
                if (response.data.passport_upload_docs !== "") {
                    $('#show_passport_upload_docs').append(`<a target='_blank' href='${response.data.passport_upload_docs}'>Show docs</a>`);
                }
                if (response.data.visa_upload_documents !== "") {
                    $('#show_visa_upload_documents').append(`<a target='_blank' href='${response.data.visa_upload_documents}'>Show docs</a>`);
                }
                if (response.data.euss_upload_documents !== "") {
                    $('#show_euss_upload_documents').append(`<a target='_blank' href='${response.data.euss_upload_documents}'>Show docs</a>`);
                }
                if (response.data.nid_upload_documents !== "") {
                    $('#show_nid_upload_documents').append(`<a target='_blank' href='${response.data.nid_upload_documents}'>Show docs</a>`);
                }
                if (response.data.other_upload_documents !== "") {
                    $('#show_other_upload_documents').append(`<a target='_blank' href='${response.data.other_upload_documents}'>Show docs</a>`);
                }
                //END
            });

        },
        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/user/circumstancesRow/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                this.insertdata.employe_id = response.data.data.employe_id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.email = response.data.data.email;
                this.insertdata.phone = response.data.data.phone;
                this.insertdata.address = response.data.data.address;
                this.insertdata.department_id = response.data.data.department_id;
                this.insertdata.designation_id = response.data.data.designation_id;
                this.insertdata.salary = response.data.data.salary;
                this.insertdata.age = response.data.data.age;
                this.insertdata.joning_date = response.data.data.joning_date;
                this.insertdata.date_of_birth = response.data.data.date_of_birth;
                this.insertdata.gender = response.data.data.gender;
                this.insertdata.status = response.data.data.status;
                this.insertdata.employee_code = response.data.data.employee_code;
                this.insertdata.first_name = response.data.data.first_name;
                this.insertdata.middle_name = response.data.data.middle_name;
                this.insertdata.last_name = response.data.data.last_name;
                this.insertdata.ni_no = response.data.data.ni_no;
                this.insertdata.marital_status = response.data.data.marital_status;
                this.insertdata.country_id = response.data.data.country_id;
                this.insertdata.employee_type = response.data.data.employee_type;
                this.insertdata.date_of_confirmation = response.data.data.date_of_confirmation;
                this.insertdata.contact_start_date = response.data.data.contact_start_date;
                this.insertdata.contact_end_date = response.data.data.contact_end_date;
                this.insertdata.job_location = response.data.data.job_location;
                this.insertdata.reporting_authority = response.data.data.reporting_authority;
                this.insertdata.leave_sanction_auth = response.data.data.leave_sanction_auth;
                this.insertdata.education_details = response.data.data.education_details;
                this.insertdata.job_details = response.data.data.job_details;
                this.insertdata.key_respons = response.data.data.key_respons;
                this.insertdata.status = response.data.data.status;
                //===================================================== start  =====================================================
                //second
                this.insertdata.training_details = response.data.data.training_details;
                //Emgergency
                this.insertdata.emger_contact_name = response.data.data.emger_contact_name
                this.insertdata.emger_email = response.data.data.emger_email;
                this.insertdata.emger_contact_no = response.data.data.emger_contact_no;
                this.insertdata.emger_address = response.data.data.emger_address;
                //Certificate
                this.insertdata.certifi_title = response.data.data.certifi_title;
                this.insertdata.certifi_license_number = response.data.data.certifi_license_number;
                this.insertdata.certifi_start_date = response.data.data.certifi_start_date;
                this.insertdata.certifi_end_date = response.data.data.certifi_end_date;
                //Contact
                this.insertdata.contact_info_post_code = response.data.data.contact_info_post_code;
                this.insertdata.contact_info_address = response.data.data.contact_info_address;
                this.insertdata.contact_info_address_1 = response.data.data.contact_info_address_1;
                this.insertdata.contact_info_address_2 = response.data.data.contact_info_address_2;
                this.insertdata.contact_info_address_3 = response.data.data.contact_info_address_3;
                this.insertdata.contact_info_city_country = response.data.data.contact_info_city_country;
                this.insertdata.contact_info_country_id = response.data.data.contact_info_country_id;
                //Pass
                this.insertdata.pass_no = response.data.data.pass_no;
                this.insertdata.pass_nationality = response.data.data.pass_nationality;
                this.insertdata.pass_place_birth = response.data.data.pass_place_birth;
                this.insertdata.pass_issued_by = response.data.data.pass_issued_by;
                this.insertdata.pass_date = response.data.data.pass_date;
                this.insertdata.pass_expire_date = response.data.data.pass_expire_date;
                this.insertdata.pass_review_date = response.data.data.pass_review_date;
                //VISA
                this.insertdata.visa_brp_np = response.data.data.visa_brp_np;
                this.insertdata.visa_nationality = response.data.data.visa_nationality;
                this.insertdata.visa_country_residence = response.data.data.visa_country_residence;
                this.insertdata.visa_issuedby = response.data.data.visa_issuedby;
                this.insertdata.visa_issued_date = response.data.data.visa_issued_date;
                this.insertdata.visa_expire_date = response.data.data.visa_expire_date;
                this.insertdata.visa_eligbible_review_date = response.data.data.visa_eligbible_review_date;
                this.insertdata.visa_current_yesno = response.data.data.visa_current_yesno;
                this.insertdata.visa_remarks = response.data.data.visa_remarks;
                //ESS
                this.insertdata.ess_ref_no = response.data.data.ess_ref_no;
                this.insertdata.ess_nationality = response.data.data.ess_nationality;
                this.insertdata.ess_issued_by = response.data.data.ess_issued_by;
                this.insertdata.ess_issued_date = response.data.data.ess_issued_date;
                this.insertdata.ess_expire_date = response.data.data.ess_expire_date;
                this.insertdata.ess_eligible_review_date = response.data.data.ess_eligible_review_date;
                this.insertdata.ess_current_visa = response.data.data.ess_current_visa;
                this.insertdata.ess_remarks = response.data.data.ess_remarks;
                //NID
                this.insertdata.nid_number = response.data.data.nid_number;
                this.insertdata.nid_nationality = response.data.data.nid_nationality;
                this.insertdata.nid_country_residence = response.data.data.nid_country_residence;
                this.insertdata.nid_issue_date = response.data.data.nid_issue_date;
                this.insertdata.nid_expire_date = response.data.data.nid_expire_date;
                this.insertdata.nid_eli_review_date = response.data.data.nid_eli_review_date;
                this.insertdata.nid_current_visa = response.data.data.nid_current_visa;
                this.insertdata.nid_remarks = response.data.data.nid_remarks;
                //Othres
                this.insertdata.others_doc_name = response.data.data.others_doc_name;
                this.insertdata.others_ref_name = response.data.data.others_ref_name;
                this.insertdata.others_nationality = response.data.data.others_nationality;
                this.insertdata.others_issue_date = response.data.data.others_issue_date;
                this.insertdata.others_expire_date = response.data.data.others_expire_date;
                this.insertdata.others_eligb_review_date = response.data.data.others_eligb_review_date;
                this.insertdata.others_visa_sts = response.data.data.others_visa_sts;
                this.insertdata.others_remarks = response.data.data.others_remarks;
                //Pay
                this.insertdata.pay_group = response.data.data.pay_group;
                this.insertdata.pay_annual_pay = response.data.data.pay_annual_pay;
                this.insertdata.pay_wedges_pay_mode = response.data.data.pay_wedges_pay_mode;
                this.insertdata.pay_payment_type = response.data.data.pay_payment_type;
                this.insertdata.pay_basic_daily_wedges = response.data.data.pay_basic_daily_wedges;
                this.insertdata.pay_min_working_hour = response.data.data.pay_min_working_hour;
                this.insertdata.pay_tax_code = response.data.data.pay_tax_code;
                this.insertdata.pay_tax_ref = response.data.data.pay_tax_ref;
                this.insertdata.pay_percentage = response.data.data.pay_percentage;
                this.insertdata.pay_payment_mode = response.data.data.pay_payment_mode;
                this.insertdata.pay_bank_name = response.data.data.pay_bank_name;
                this.insertdata.pay_branch_name = response.data.data.pay_branch_name;
                this.insertdata.pay_account_no = response.data.data.pay_account_no;
                this.insertdata.pay_sort_code = response.data.data.pay_sort_code;
                this.insertdata.pay_remarks = response.data.data.pay_remarks;
                //Payment
                this.insertdata.payment_da = response.data.data.payment_da === 'true' ? response.data.data.payment_da : "";
                this.insertdata.payment_hra = response.data.data.payment_hra === 'true' ? response.data.data.payment_hra : "";
                this.insertdata.payment_conven_ta = response.data.data.payment_conven_ta === 'true' ? response.data.data.payment_conven_ta : "";
                this.insertdata.payment_perfomance = response.data.data.payment_perfomance === 'true' ? response.data.data.payment_perfomance : "";
                this.insertdata.payment_monthly_al = response.data.data.payment_monthly_al === 'true' ? response.data.data.payment_monthly_al : "";
                //NI
                this.insertdata.ni_dedu_da = response.data.data.ni_dedu_da === 'true' ? response.data.data.ni_dedu_da : "";
                this.insertdata.ni_dedu_perfomance = response.data.data.ni_dedu_perfomance === 'true' ? response.data.data.ni_dedu_perfomance : "";
                this.insertdata.ni_dedu_conven_ta = response.data.data.ni_dedu_conven_ta === 'true' ? response.data.data.ni_dedu_conven_ta : "";
                this.insertdata.ni_dedu_hra = response.data.data.ni_dedu_hra === 'true' ? response.data.data.ni_dedu_hra : "";
                this.insertdata.ni_dedu_monthly_al = response.data.data.ni_dedu_monthly_al === 'true' ? response.data.data.ni_dedu_monthly_al : "";
                //END
                console.log("type_of_doc:" + response.data.other_upload_documents);
                // $('#show_profile_image').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + response.data.image + '" />');
                if (response.data.image !== "") {
                    $('#show_profile_image').append(`<a target='_blank' href='${response.data.image}'>Show Picture</a>`);
                }
                if (response.data.type_of_doc !== "") {
                    $('#show_type_of_doc').append(`<a target='_blank' href='${response.data.type_of_doc}'>Show docs</a>`);
                }
                if (response.data.passport_upload_docs !== "") {
                    $('#show_passport_upload_docs').append(`<a target='_blank' href='${response.data.passport_upload_docs}'>Show docs</a>`);
                }
                if (response.data.visa_upload_documents !== "") {
                    $('#show_visa_upload_documents').append(`<a target='_blank' href='${response.data.visa_upload_documents}'>Show docs</a>`);
                }
                if (response.data.euss_upload_documents !== "") {
                    $('#show_euss_upload_documents').append(`<a target='_blank' href='${response.data.euss_upload_documents}'>Show docs</a>`);
                }
                if (response.data.nid_upload_documents !== "") {
                    $('#show_nid_upload_documents').append(`<a target='_blank' href='${response.data.nid_upload_documents}'>Show docs</a>`);
                }
                if (response.data.other_upload_documents !== "") {
                    $('#show_other_upload_documents').append(`<a target='_blank' href='${response.data.other_upload_documents}'>Show docs</a>`);
                }
                //END
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
