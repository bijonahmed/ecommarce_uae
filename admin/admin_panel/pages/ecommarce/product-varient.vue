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
                                        <div class="col-md-5">
                                            <div class="row">
                                                <div class="col-4 p-1 g-0" v-for="(item, index) in attributeslist" :key="item.id">
                                                    <button type="button" class="btn btn-dark btn-sm w-100" @click="showAttrVal(item.id)">{{ item.name }}</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <input type="hidden" class="product_attribute_id" />
                                            <span v-for="(item, index) in attrValList" :key="item.id">
                                                <input type="checkbox" v-model="arr_val[item.id]" :value="item.id" />
                                                {{ item.name }}
                                            </span>
                                            <span v-if="attrValList.length > 0">
                                                <hr />
                                                <button @click="getSelectedValues" class="btn btn-primary w-100 btn-sm">Merge</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- <button @click="attributHistory" type="text">Test</button> -->
                                        <div class="col-md-2 g-1 p-1" v-for="item in pro_arr_val_history" :key="item.id" style="background-color: #d8dfdf;">
                                            {{ item.name }}
                                            <hr />
                                            <span v-for="(data, index) in item.value_history" :key="data.id">
                                                <!-- <input type="checkbox" v-model="arr_his_val[data.product_attribute_id]" :value="data.product_attribute_id" :name="'category_' + item.id" /> -->
                                                <input type="radio" :value="data.id" v-model="arr_his_val[item.id]" />
                                                {{ data.attr_val_name }} <br />
                                            </span>

                                        </div>
                                        <button class="btn btn-success btn-sm w-100" type="button" @click="setHistoryValue" style="margin-top: 10px;">Add Varient</button>
                                    </div>

                                </div>

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
        await this.fetchAttributeList();
    },
    methods: {
        setHistoryValue() {
            let selectedHistoryValues = Object.keys(this.arr_his_val).filter(
                key => this.arr_his_val[key]
            );
            console.log(`Selected history ${selectedHistoryValues}`);
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
            this.$axios.get(`/category/attributeValRows/${attribue_id}`).then(response => {
                this.attrValList = response.data.data;
            });
            //attrValList
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
    },
}
</script>
<style scoped>
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
</style>
