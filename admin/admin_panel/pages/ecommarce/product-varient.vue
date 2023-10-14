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
                                    <p>Attribue List</p>
                                    <div class="row">
                                        <div class="col-md-4 bgattr">
                                            <div v-for="(item, index) in attributeslist">
                                                <input type="checkbox" v-model="selectedItem[item.id]" :value="item.id" class="checkbox-input" @click="showAttrVal(item.id)" />
                                                {{ item.name }}
                                                <!-- <button type="button" class="btn btn-dark px-5 w-100" @click="showAttrVal(item.id)">{{ item.name }}</button> -->
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <!-- <form @submit.prevent="saveProductAttributeVal()" id="formrest" class="forms-sample" enctype="multipart/form-data"> -->
                                            <input type="hidden" class="product_attribute_id" />
                                            <span v-for="(item, index) in attrValList" :key="item.id">
                                                <input type="checkbox" v-model="arr_val[item.id]" :value="item.id" class="checkbox-input" />
                                                {{ item.name }}
                                            </span>
                                            <span v-if="attrValList.length > 0">

                                                <button @click="getSelectedValues" class="btn btn-primary btn-sm">Merge</button>
                                            </span>
                                            <hr/>

                                            <!-- </form> -->

                                        </div>
                                    </div>
                                </div>
                                <!-- END -->
                                <hr />
                            </div>
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
            selectedItem: [],
            arr_val: [],
            attributeslist: [],
            attrValList: [],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.getData();
        await this.fetchAttributeList();
    },
    methods: {
        getSelectedValues() {
            //
            const selectedValues = Object.keys(this.arr_val).filter(
                key => this.arr_val[key]
            );
            const product_attribute_id = $(".product_attribute_id").val();
            const AttrValues = selectedValues;
            const product_id = this.$route.query.parameter;

            this.round_success_noti();
            console.log('attr:', product_attribute_id);
            console.log('Selected Items:', AttrValues);
            //console.log(`selected val ${this.arr_val}`);
            this.$axios.get(`/product/insertProductAttrAndValues`, {
                params: {
                    product_attribute_id: product_attribute_id,
                    AttrValues: AttrValues,
                    product_id:product_id
                }
            }).then(response => {



                //this.attrValList = response.data.data;
            });

        },
        showAttrVal(id) {
            // alert(id);
            $(".product_attribute_id").val(id);
            this.$axios.get(`/category/attributeValRows/${id}`).then(response => {
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
        getData() {
            let id = this.$route.query.parameter;
            // alert(id);
            this.$axios.get(`/category/categoryRow/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.mobile_view_class = response.data.data.mobile_view_class;
                this.insertdata.description = response.data.data.description ? response.data.data.description : "";
                this.insertdata.meta_title = response.data.data.meta_title;
                this.insertdata.meta_description = response.data.data.meta_description;
                this.insertdata.meta_keyword = response.data.data.meta_keyword;
                this.insertdata.parent_id = response.data.data.parent_id;
                this.insertdata.status = response.data.data.status;
                this.insertdata.keyword = response.data.data.keyword;
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
.bgattr{
    background-color: gainsboro;
border-radius: 5px;
padding: 10px;
}
</style>
