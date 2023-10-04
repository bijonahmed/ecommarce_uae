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
                                <router-link to="/recruitment/job-posting-list">Job Posting List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">New Job Post</li>
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
                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">SOC Code</label>
                                            <input type="text" class="form-control soc_code" v-model="insertdata.soc_code" id="soc_code">
                                            <span class="text-danger" v-if="errors.soc_code">{{errors.soc_code[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Job Title</label>
                                            <input type="text" class="form-control first_name" v-model="insertdata.job_title" id="job_title">
                                            <span class="text-danger" v-if="errors.job_title">{{ errors.job_title[0]}}</span>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Department</label>
                                            <input type="text" class="form-control department" v-model="insertdata.department" id="department">
                                            <span class="text-danger" v-if="errors.department">{{ errors.department[0]
                                                    }}</span>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Job Code</label>
                                            <input type="text" class="form-control job_code" v-model="insertdata.job_code" id="job_code">
                                            <span class="text-danger" v-if="errors.job_code">{{ errors.job_code[0]}}</span>
                                        </div>

                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Job Description</label>
                                            <textarea class="form-control name" v-model="insertdata.job_description" id="job_description"></textarea>
                                            <span class="text-danger" v-if="errors.job_description">{{ errors.job_description[0]}}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Employment Type</label>
                                            <select name="employee_type" v-model="insertdata.employee_type" class="form-select">
                                                <option value="">Select</option>
                                                <option value="FULL TIME">FULL TIME</option>
                                                <option value="CONTRACTUAL">CONTRACTUAL</option>
                                                <option value="SUSPEND">SUSPEND</option>
                                                <option value="PART TIME">PART TIME</option>
                                                <option value="LEFT">LEFT</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employee_type">{{errors.employee_type[0] }}</span>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Working Hours (Weekly)</label>
                                            <select name="working_hour" v-model="insertdata.working_hour" id="working_hour" class="form-select">
                                                <option value="">Select</option>
                                                <option value="1">1</option>
                                                <option value="1.5">1.5</option>
                                                <option value="2">2</option>
                                                <option value="2.5">2.5</option>
                                                <option value="3">3</option>
                                                <option value="3.5">3.5</option>
                                                <option value="4">4</option>
                                                <option value="4.5">4.5</option>
                                                <option value="5">5</option>
                                                <option value="5.5">5.5</option>
                                                <option value="6">6</option>
                                                <option value="6.5">6.5</option>
                                                <option value="7">7</option>
                                                <option value="7.5">7.5</option>
                                                <option value="8">8</option>
                                                <option value="8.5">8.5</option>
                                                <option value="9">9</option>
                                                <option value="9.5">9.5</option>
                                                <option value="10">10</option>
                                                <option value="10.5">10.5</option>
                                                <option value="11">11</option>
                                                <option value="11.5">11.5</option>
                                                <option value="12">12</option>
                                                <option value="12.5">12.5</option>
                                                <option value="13">13</option>
                                                <option value="13.5">13.5</option>
                                                <option value="14">14</option>
                                                <option value="14.5">14.5</option>
                                                <option value="15">15</option>
                                                <option value="15.5">15.5</option>
                                                <option value="16">16</option>
                                                <option value="16.5">16.5</option>
                                                <option value="17">17</option>
                                                <option value="17.5">17.5</option>
                                                <option value="18">18</option>
                                                <option value="18.5">18.5</option>
                                                <option value="19">19</option>
                                                <option value="19.5">19.5</option>
                                                <option value="20">20</option>
                                                <option value="20.5">20.5</option>
                                                <option value="21">21</option>
                                                <option value="21.5">21.5</option>
                                                <option value="22">22</option>
                                                <option value="22.5">22.5</option>
                                                <option value="23">23</option>
                                                <option value="23.5">23.5</option>
                                                <option value="24">24</option>
                                                <option value="24.5">24.5</option>
                                                <option value="25">25</option>
                                                <option value="25.5"></option>25.5
                                                <option value="26">26</option>
                                                <option value="26.5">26.5</option>
                                                <option value="27">27</option>
                                                <option value="27.5">27.5</option>
                                                <option value="28">28</option>
                                                <option value="28.5">28.5</option>
                                                <option value="29">29</option>
                                                <option value="29.5">29.5</option>
                                                <option value="30">30</option>
                                                <option value="30.5">30.5</option>
                                                <option value="31">31</option>
                                                <option value="31.5">31.5</option>
                                                <option value="32">32</option>
                                                <option value="32.5">32.5</option>
                                                <option value="33">33</option>
                                                <option value="33.5">33.5</option>
                                                <option value="34">34</option>
                                                <option value="34.5">34.5</option>
                                                <option value="35">35</option>
                                                <option value="35.5">35.5</option>
                                                <option value="36">36</option>
                                                <option value="36.5">36.5</option>
                                                <option value="37">37</option>
                                                <option value="37.5">37.5</option>
                                                <option value="38">38</option>
                                                <option value="38.5">38.5</option>
                                                <option value="39">39</option>
                                                <option value="39.5">39.5</option>
                                                <option value="40">40</option>
                                                <option value="40.5">40.5</option>
                                                <option value="41">41</option>
                                                <option value="41.5">41.5</option>
                                                <option value="42">42</option>
                                                <option value="42.5">42.5</option>
                                                <option value="43">43</option>
                                                <option value="43.5">43.5</option>
                                                <option value="44">44</option>
                                                <option value="44.5">44.5</option>
                                                <option value="45">45</option>
                                                <option value="45.5">45.5</option>
                                                <option value="46">46</option>
                                                <option value="46.5">46.5</option>
                                                <option value="47">47</option>
                                                <option value="47.5">47.5</option>
                                                <option value="48">48</option>
                                                <option value="48.5">48.5</option>
                                                <option value="49">49</option>
                                                <option value="49.5">49.5</option>
                                                <option value="50">50</option>
                                                <option value="50.5">50.5</option>
                                                <option value="51">51</option>
                                                <option value="51.5">51.5</option>
                                                <option value="52">52</option>
                                                <option value="52.5">52.5</option>
                                                <option value="53">53</option>
                                                <option value="53.5">53.5</option>
                                                <option value="54">54</option>
                                                <option value="54.5">54.5</option>
                                                <option value="55">55</option>
                                                <option value="55.5">55.5</option>
                                                <option value="56">56</option>
                                                <option value="56.5">56.5</option>
                                                <option value="57">57</option>
                                                <option value="57.5">57.5</option>
                                                <option value="58">58</option>
                                                <option value="58.5">58.5</option>
                                                <option value="59">59</option>
                                                <option value="59.5">59.5</option>
                                                <option value="60">60</option>
                                                <option value="60.5">60.5</option>
                                                <option value="61">61</option>
                                                <option value="61.5">61.5</option>
                                                <option value="62">62</option>
                                                <option value="62.5">62.5</option>
                                                <option value="63">63</option>
                                                <option value="63.5">63.5</option>
                                                <option value="64">64</option>
                                                <option value="64.5">64.5</option>
                                                <option value="65">65</option>
                                                <option value="65.5">65.5</option>
                                                <option value="66">66</option>
                                                <option value="66.5">66.5</option>
                                                <option value="67">67</option>
                                                <option value="67.5">67.5</option>
                                                <option value="68">68</option>
                                                <option value="68.5">68.5</option>
                                                <option value="69">69</option>
                                                <option value="69.5">69.5</option>
                                                <option value="70">70</option>
                                                <option value="70.5">70.5</option>
                                                <option value="71">71</option>
                                                <option value="71.5">71.5</option>
                                                <option value="72">72</option>
                                                <option value="72.5">72.5</option>
                                                <option value="73">73</option>
                                                <option value="73.5">73.5</option>
                                                <option value="74">74</option>
                                                <option value="74.5">74.5</option>
                                                <option value="75">75</option>
                                                <option value="75.5">75.5</option>
                                                <option value="76">76</option>
                                                <option value="76.5">76.5</option>
                                                <option value="77">77</option>
                                                <option value="77.5">77.5</option>
                                                <option value="78">78</option>
                                                <option value="78.5">78.5</option>
                                                <option value="79">79</option>
                                                <option value="79.5">79.5</option>
                                                <option value="80">80</option>

                                            </select>

                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Job Experience (Min)</label>
                                            <select name="job_exp_min" v-model="insertdata.job_exp_min" class="form-select">
                                                <option value="">Min</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                            </select>

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Job Experience (Max)</label>
                                            <select name="job_exp_max" v-model="insertdata.job_exp_max" class="form-select">
                                                <option value="">Select</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                                <option value="32">32</option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="35">35</option>
                                                <option value="36">36</option>
                                                <option value="37">37</option>
                                                <option value="38">38</option>
                                                <option value="39">39</option>
                                                <option value="40">40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                                <option value="43">43</option>
                                                <option value="44">44</option>
                                                <option value="45">45</option>
                                                <option value="46">46</option>
                                                <option value="47">47</option>
                                                <option value="48">48</option>
                                                <option value="49">49</option>
                                                <option value="50">50</option>
                                            </select>

                                        </div>

                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Basic Salary (Min)</label>
                                            <input type="text" class="form-control basic_salary_min" v-model="insertdata.basic_salary_min" id="basic_salary_min">

                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Basic Salary (Max)</label>
                                            <input type="text" class="form-control basic_salary_max" v-model="insertdata.basic_salary_max" id="phone">

                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Period</label>
                                            <select name="peroid" v-model="insertdata.peroid" class="form-select">
                                                <option value="">Select</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Number Of Vacancies</label>
                                            <input type="number" class="form-control number_of_vacanci" v-model="insertdata.number_of_vacanci" id="number_of_vacanci">

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Job Location</label>
                                            <input type="text" class="form-control job_location" v-model="insertdata.job_location" id="job_location">

                                        </div>
                                        <br>

                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Desired Candidate</span></label>
                                            <hr>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Qualifications</label>
                                            <input type="text" class="form-control qualification" v-model="insertdata.qualification" id="qualification">

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Skill Set</label>
                                            <input type="text" class="form-control skill_set" v-model="insertdata.skill_set" id="skill_set">

                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Age (Min)</label>
                                            <input type="text" class="form-control age_min" v-model="insertdata.age_min" id="age_min">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Age (Max)</label>
                                            <input type="text" class="form-control age_max" v-model="insertdata.age_max" id="age_max">
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
                                            <label for="inputPassword4">Job Posting Date</label>
                                            <input type="date" class="form-control address" v-model="insertdata.job_post_date">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Closing Date</label>
                                            <input type="date" class="form-control address" v-model="insertdata.job_close_date">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Authorising Officer</label>
                                            <input type="text" class="form-control authrosi_officer" v-model="insertdata.authrosi_officer">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Authorising Officer’s Designation</label>
                                            <input type="text" class="form-control authrosi_officer_desg" v-model="insertdata.authrosi_officer_desg" id="authrosi_officer_desg">

                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Contact Number</label>
                                            <input type="text" class="form-control contact_numb" v-model="insertdata.contact_numb" id="contact_numb">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Email</label>
                                            <input type="text" class="form-control email" v-model="insertdata.email" id="email">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Is this a new role</label>
                                            <select class="form-select" name="role" v-model="insertdata.role">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>

                                        </div>
                                        <div class="col-md-12">
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Language Requirements </label>
                                            <select class="form-select" name="lan_requirment" v-model="insertdata.lan_requirment">
                                                <option value="">Select</option>
                                                <option value="">&nbsp;</option>
                                                <option value="English Proficiency - Minimum of  UKVI IELTS 4 or  equivalent for international candidates only">English Proficiency - Minimum of UKVI IELTS 4 or equivalent for international candidates only</option>
                                                <option value="Not Required">Not Required</option>
                                                <option value="Others">Others</option>
                                            </select>

                                        </div>
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
export default {
    head: {
        title: 'New Job Post',
    },
    data() {
        return {
            insertdata: {
                id: '',
                soc_code: '',
                job_title: '',
                department: '',
                job_description: '',
                employee_type: '',
                working_hour: '',
                job_exp_min: '',
                job_exp_max: '',
                basic_salary_min: '',
                basic_salary_max: '',
                peroid: '',
                number_of_vacanci: '',
                job_location: '',
                qualification: '',
                skill_set: '',
                age_min: '',
                age_max: '',
                gender: '',
                job_code:'',
                job_post_date: '',
                job_close_date: '',
                authrosi_officer: '',
                authrosi_officer_desg: '',
                contact_numb: '',
                email: '',
                role: '',
                lan_requirment: '',
            },
            notifmsg: '',
            errors: {},
        }
    },
    created() {

    },
    methods: {

        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('soc_code', this.insertdata.soc_code);
            formData.append('job_code', this.insertdata.job_code);
            formData.append('department', this.insertdata.department);
            formData.append('job_title', this.insertdata.job_title);
            formData.append('job_description', this.insertdata.job_description);
            formData.append('employee_type', this.insertdata.employee_type);
            formData.append('working_hour', this.insertdata.working_hour);
            formData.append('job_exp_min', this.insertdata.job_exp_min);
            formData.append('job_exp_max', this.insertdata.job_exp_max);
            formData.append('basic_salary_min', this.insertdata.basic_salary_min);
            formData.append('basic_salary_min', this.insertdata.basic_salary_min);
            formData.append('peroid', this.insertdata.peroid);
            formData.append('number_of_vacanci', this.insertdata.number_of_vacanci);
            formData.append('job_location', this.insertdata.job_location);
            formData.append('qualification', this.insertdata.qualification);
            formData.append('skill_set', this.insertdata.skill_set);
            formData.append('age_min', this.insertdata.age_min);
            formData.append('age_max', this.insertdata.age_max);
            formData.append('job_post_date', this.insertdata.job_post_date);
            formData.append('job_close_date', this.insertdata.job_close_date);
            formData.append('authrosi_officer', this.insertdata.authrosi_officer);
            formData.append('authrosi_officer_desg', this.insertdata.authrosi_officer_desg);
            formData.append('contact_numb', this.insertdata.contact_numb);
            formData.append('email', this.insertdata.email);
            formData.append('role', this.insertdata.role);
            formData.append('lan_requirment', this.insertdata.lan_requirment);
            formData.append('gender', this.insertdata.gender);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/recruitment/saveJobPosting',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/recruitment/job-posting-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
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
