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
                                <router-link to="/ecommarce/product-list">Product List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Add Attribue Varient</li>
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
                                <div class="card">
                                    <!-- Start -->
                                    <span>Choose Attribue</span>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-2 p-1 g-0" v-for="(item, index) in attributeslist" :key="item.id">
                                                    <button type="button" class="btn btn-dark btn-sm w-100" @click="showAttrVal(item.id)">{{ item.name }}</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <hr />
                                            <input type="hidden" class="product_attribute_id" />
                                            <span v-for="(item, index) in attrValList" :key="item.id">
                                                <input type="checkbox" v-model="arr_val[item.id]" :value="item.id" />
                                                {{ item.name }}
                                            </span>
                                            <span v-if="attrValList.length > 0">
                                                <hr />
                                                <button @click="getSelectedValues" class="btn btn-primary w-100 btn-sm">Merge</button>
                                                <br />
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- <button @click="attributHistory" type="text">Test</button> -->
                                        <div class="col-md-2 g-1 p-1" v-for="item in pro_arr_val_history" :key="item.id" style="background-color: #d8dfdf;">
                                            {{ item.name }}
                                            <hr />
                                            <span v-for="(data, index) in item.value_history" :key="data.id">
                                                <input type="radio" :value="data.id" v-model="arr_his_val[item.id]" />
                                                {{ data.attr_val_name }} <br />
                                            </span>
                                        </div>
                                    </div>
                                    <span v-if="pro_arr_val_history.length > 0">
                                        <br />
                                        <button class="btn btn-success btn-sm w-100" type="button" @click="setHistoryValue" style="margin-left: -11px;">Add Varient</button>
                                    </span>
                                </div>
                                <form @submit.prevent="updateVarient()" id="formrest" enctype="multipart/form-data">
                                    <div class="row" v-if="historVarient.length > 0">
                                        <hr />
                                        <div class="alert-dark border-0 bg-dark alert-dismissible fade show">
                                            <div class="text-white">Varient History</div>
                                        </div>
                                        <table class="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col"></th>
                                                    <th scope="col">SKU<span class="required">*</span></th>
                                                    <th scope="col">Qty<span class="required">*</span></th>
                                                    <th scope="col">Price<span class="required">*</span></th>
                                                    <th scope="col">Image Upload<span class="required">*</span></th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(data, index) in historVarient" :key="data.varient_id">
                                                    <th scope="row">{{ index + 1 }}.</th>
                                                    <td>{{ data.path }}</td>
                                                    <td>
                                                        <input type="hidden" v-model="data.varient_id" name="varient_id" style="width: 50px;" />
                                                        <input type="text" placeholder="SKU" v-model="data.sku" :name="'data[' + index + '][sku]'" style="width: 80px;" required />
                                                        <p class="error-message" v-if="errors.name">{{ errors.sku }}</p>
                                                    </td>
                                                    <td><input type="text" placeholder="Qty" v-model="data.qty" :name="'data[' + index + '][qty]'" style="width: 50px;" required /></td>
                                                    <td><input type="text" placeholder="0.00" v-model="data.price" :name="'data[' + index + '][price]'" style="width: 50px;" required /> </td>
                                                    <td><input type="file" @change="onFileChange(index, $event)" accept="image/*" />
                                                    </td>
                                                    <td><button type="button" @click="deleteVarrientrow(data.varient_id)">DEL</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button class="btn btn-dark btn-sm w-100 btnsize" type="submit">Submit</button>
                                    </div>
                                </form>
                                <!-- END -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
    </div>
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
        title: 'Attribue Varient',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                description: '',
                meta_title: '',
                meta_description: '',
                meta_keyword: '',
                parent_id: 0,
                mobile_view_class: '',
                keyword: '',
                status: 1,
            },
            arr_his_val: [],
            selectedItem: [],
            historVarient: [{
                varient_id: '',
                sku: '',
                qty: 1,
                price: '',
                file: null
            }],
            arr_val: [],
            attributeslist: [],
            attrValList: [],
            pro_arr_val_history: [],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.attributHistory();
        this.varientHistory();
        await this.fetchAttributeList();
    },
    methods: {
        onFileChange(index, event) {
            const file = event.target.files[0];
            this.historVarient[index].file = file;

            if (file) {
                const fileExtension = file.name.split('.').pop().toLowerCase();
                const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

                if (allowedExtensions.includes(fileExtension)) {
                    // File is an image with an allowed extension, you can proceed with the upload
                    // Add your upload logic here
                } else {
                    // Invalid file extension
                    alert('Please select a valid image file (jpg, jpeg, png, or gif).');
                    // Clear the file input
                    event.target.value = '';
                }
            }
        },
        updateVarient() {
            const formData = new FormData();
            this.historVarient.forEach((varrient, index) => {
                formData.append(`varrient[${index}][varient_id]`, varrient.varient_id);
                formData.append(`varrient[${index}][sku]`, varrient.sku);
                formData.append(`varrient[${index}][qty]`, varrient.qty);
                formData.append(`varrient[${index}][price]`, varrient.price);
                formData.append(`varrient[${index}][file]`, varrient.file);
            });
            this.$axios.post('/product/insertVarientGroup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                const product_id = this.$route.query.parameter;
                //return false;
                this.$router.push({
                    path: '/ecommarce/product-preview',
                    query: {
                        parameter: product_id
                    }
                })
                console.log('Saved successfully:', response.data);
                //this.attributHistory();
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

            return false;
            //redirect 

        },
        deleteVarrientrow(id) {
            this.$axios.get(`/product/deleteValrient`, {
                params: {
                    varient_id: id
                }
            }).then(response => {
                this.pos4_error_noti();
                this.varientHistory();
                //this.attributHistory();
            });
        },
        setHistoryValue() {
            let product_id = this.$route.query.parameter;
            const inputString = this.arr_his_val;
           // console.log(`Selected history ${this.arr_his_val}`);
            const inputStringCopy = String(inputString);
            const valuesArray = inputStringCopy.split(',');
            const filteredArray = valuesArray.filter(value => value.trim() !== '');
            const resultArrValue = filteredArray.join(',');
            console.log(`Selected history ${resultArrValue}`);
            //return false;
            this.$axios.get(`/product/insertProductVarient`, {
                params: {
                    selectedHistoryValues: resultArrValue,
                    product_id: product_id
                }
            }).then(response => {
                this.round_success_noti();
                this.varientHistory();
                //this.attributHistory();
            });
        },
        varientHistory() {
            let product_id = this.$route.query.parameter;
            this.$axios.get(`/product/getVarientHistory`, {
                params: {
                    product_id: product_id
                }
            }).then(response => {
                console.log(`Varient History: ${response.data}`);
                this.historVarient = response.data;
                //this.round_success_noti();
                //this.attributHistory();
            });
        },
        getSelectedValues() {
            let selectedValues = Object.keys(this.arr_val).filter(
                key => this.arr_val[key]
            );
            const product_attribute_id = $(".product_attribute_id").val();
            let AttrValues = selectedValues;
            const product_id = this.$route.query.parameter;
            console.log('attr:', product_attribute_id);
            console.log('Selected Items:', AttrValues);
            //console.log(`selected val ${this.arr_val}`);
            this.$axios.get(`/product/insertProductAttrAndValues`, {
                params: {
                    product_attribute_id: product_attribute_id,
                    AttrValues: AttrValues,
                    product_id: product_id
                }
            }).then(response => {
                this.round_success_noti();
                this.attributHistory();
            });
            this.arr_val = {};
        },
        showAttrVal(attribue_id) {
            $(".product_attribute_id").val(attribue_id);
            const product_id = this.$route.query.parameter;
            const product_attribute_id = attribue_id;
            this.$axios.get(`/category/attributeValRows/${product_id}/${product_attribute_id}`).then(response => {
                // this.attrValList = response.data.data; // this method no need now already tell me mamun bhai 
                this.round_success_noti();
                this.attributHistory();
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.insertdata.id);
            formData.append('name', this.insertdata.name);
            formData.append('mobile_view_class', this.insertdata.mobile_view_class);
            //formData.append('description', desc);
            formData.append('description', this.insertdata.description);
            formData.append('meta_title', this.insertdata.meta_title);
            formData.append('meta_description', this.insertdata.meta_description);
            formData.append('meta_keyword', this.insertdata.meta_keyword);
            formData.append('parent_id', this.insertdata.parent_id);
            formData.append('status', this.insertdata.status);
            formData.append('keyword', this.insertdata.keyword);
            // formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/save',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/ecommarce/category-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        attributHistory() {
            let product_id = this.$route.query.parameter;
            this.$axios.get(`/product/getAttrHistory/${product_id}`).then(response => {
                console.log(response.data);
                this.pro_arr_val_history = response.data;
            });
        },
        async fetchAttributeList() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/attributes-list`);
                this.attributeslist = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
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
        round_success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                size: 'mini',
                rounded: true,
                icon: 'bx bx-check-circle',
                delayIndicator: false,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                msg: 'Successfully merge attribue values...'
            });
        },
        pos4_error_noti() {
            Lobibox.notify('error', {
                pauseDelayOnHover: true,
                icon: 'bx bx-x-circle',
                size: 'mini',
                continueDelayOnInactiveTab: false,
                position: 'bottom left',
                msg: 'Successfully remove varient.'
            });
        }
    },
}
</script>
<style scoped>
.required{
    content: "\2605";
    color: red;
    margin-right: 4px;
}
.checkbox-label {
  display: block;
  margin-bottom: 5px;
}
.checkbox-input {
  margin-right: 5px;
}
.p-4 {
padding: 1rem !important;
}
.btn-group-sm > .btn, .btn-sm {
padding: .25rem .10rem;
font-size: .750rem;
border-radius: .1rem;
}
.alert {
position: relative;
padding: 0.5rem 0.5rem;
margin-bottom: 1rem;
background-color: #fff;
border: 1px solid transparent;
border-radius: .25rem;
box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);
}
.btnsize{
margin-top: 10px;
margin-left: -10px;
margin-right: -10px;
}
</style>
