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
                            <li class="breadcrumb-item active" aria-current="page">Product Preview</li>
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

                                    <table class="table table-bordered w-100">
                                        <tr>
                                            <td width="21%">Product Name</td>
                                            <td width="1%"><strong>:</strong></td>
                                            <td width="78%">dd</td>
                                        </tr>
                                        <tr>
                                            <td>Meta Tag Title</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>Meta Tag Description</td>
                                            <td><strong>:</strong></td>
                                            <td>dsf</td>
                                        </tr>
                                        <tr>
                                            <td>Meta Tag Keywords</td>
                                            <td><strong>:</strong></td>
                                            <td>dsf</td>
                                        </tr>
                                        <tr>
                                            <td>Product Tags</td>
                                            <td><strong>:</strong></td>
                                            <td>4sdf</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>SKU</td>
                                            <td><strong>:</strong></td>
                                            <td>sd</td>
                                        </tr>
                                        <tr>
                                            <td>External Link</td>
                                            <td><strong>:</strong></td>
                                            <td>sd</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td><strong>:</strong></td>
                                            <td>sd</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td><strong>:</strong></td>
                                            <td>s</td>
                                        </tr>
                                        <tr>
                                            <td>Unit</td>
                                            <td><strong>:</strong></td>
                                            <td>s</td>
                                        </tr>
                                        <tr>
                                            <td>Discount</td>
                                            <td><strong>:</strong></td>
                                            <td>s</td>
                                        </tr>
                                        <tr>
                                            <td>Quantity</td>
                                            <td><strong>:</strong></td>
                                            <td>sadf</td>
                                        </tr>
                                        <tr>
                                            <td>Minimum Quantity</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>Out Of Stock Status</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>Free Shipping</td>
                                            <td><strong>:</strong></td>
                                            <td>sdfsdf</td>
                                        </tr>
                                        <tr>
                                            <td>Flat Rate</td>
                                            <td><strong>:</strong></td>
                                            <td>sdfsdf</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Days</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>Vat</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>Manufacturer</td>
                                            <td><strong>:</strong></td>
                                            <td>sadfsdf</td>
                                        </tr>
                                        <tr>
                                            <td>Categories</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                        <tr>
                                            <td>Download Link</td>
                                            <td><strong>:</strong></td>
                                            <td>sdf</td>
                                        </tr>
                                    </table>

                                </div>

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
                                                <th scope="col">SKU</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Product Images</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(data, index) in historVarient" :key="data.varient_id">
                                                <th scope="row">{{ index + 1 }}.</th>
                                                <td>{{ data.path }}</td>
                                                <td>{{ data.sku }}</td>
                                                <td>{{ data.qty }}</td>
                                                <td>{{ data.price }}</td>

                                                <td><img :src="data.file" alt="N/A" style="height: 50px; width: 60px;" class="img-fluid max-width-100 img-thumbnail" />
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>

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
        title: 'Product Preview',
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
                qty: '',
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
        // getSelectedValues() {
        //     let selectedValues = Object.keys(this.arr_val).filter(
        //         key => this.arr_val[key]
        //     );
        //     const product_attribute_id = $(".product_attribute_id").val();
        //     let AttrValues = selectedValues;
        //     const product_id = this.$route.query.parameter;
        //     console.log('attr:', product_attribute_id);
        //     console.log('Selected Items:', AttrValues);
        //     //console.log(`selected val ${this.arr_val}`);
        //     this.$axios.get(`/product/insertProductAttrAndValues`, {
        //         params: {
        //             product_attribute_id: product_attribute_id,
        //             AttrValues: AttrValues,
        //             product_id: product_id
        //         }
        //     }).then(response => {
        //         this.round_success_noti();
        //         this.attributHistory();
        //     });
        //     this.arr_val = {};
        // },
        showAttrVal(attribue_id) {
            $(".product_attribute_id").val(attribue_id);
            this.$axios.get(`/category/attributeValRows/${attribue_id}`).then(response => {
                this.attrValList = response.data.data;
            });
            //attrValList
        },
        // saveData() {
        //     const formData = new FormData();
        //     formData.append('file', this.file);
        //     formData.append('id', this.insertdata.id);
        //     formData.append('name', this.insertdata.name);
        //     formData.append('mobile_view_class', this.insertdata.mobile_view_class);
        //     //formData.append('description', desc);
        //     formData.append('description', this.insertdata.description);
        //     formData.append('meta_title', this.insertdata.meta_title);
        //     formData.append('meta_description', this.insertdata.meta_description);
        //     formData.append('meta_keyword', this.insertdata.meta_keyword);
        //     formData.append('parent_id', this.insertdata.parent_id);
        //     formData.append('status', this.insertdata.status);
        //     formData.append('keyword', this.insertdata.keyword);
        //     // formData.append('status', this.insertdata.status);
        //     const headers = {
        //         'Content-Type': 'multipart/form-data'
        //     };
        //     this.$axios.post('/category/save',
        //         formData, {
        //             headers
        //         }).then((res) => {
        //         $('#formrest')[0].reset();
        //         this.success_noti();
        //         this.$router.push('/ecommarce/category-list');
        //     }).catch(error => {
        //         if (error.response.status === 422) {
        //             this.errors = error.response.data.errors;
        //         }
        //     });
        // },
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

    },
}
</script>
    <style scoped>

    </style>
