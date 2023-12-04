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
                                <router-link to="/orders/order-list">Orders</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{ orderid }}</li>
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

                                <div class="row">

                                    <div class="col">
                                        <h4>Orders Details </h4>
                                        Customer Name: {{ customername }}, Customer Email: {{ customeremail }}
                                    </div>

                                    <div class="col">
                                        <strong style="color:green; text-align: right;">
                                            <h4>Order Status: {{ orderstatus }}</h4>
                                        </strong>
                                    </div>

                                </div>

                                <table width="100%" border="0" class="table table-bordered hover">
                                    <tr>
                                        <td width="22">#</td>
                                        <td>Images</td>
                                        <td width="916">Item Description </td>
                                        <td width="63">
                                            <div align="center">Qty</div>
                                        </td>
                                        <td width="80">
                                            <div align="center">Price</div>
                                        </td>
                                        <td width="80">
                                            <div align="center">Total</div>
                                        </td>
                                    </tr>
                                    <tr v-for="(order, index) in orders" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>
                                            <img :src="order.thumbnail_img" alt="Thumbnail Image" style="height:50px;width:50px;" />
                                        </td>
                                        <td>{{ order.product_name }}</td>
                                        <td>
                                            <div align="center">{{ order.quantity }}</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ order.price }}</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ order.total }}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div align="right">Total</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ totalQuantity }}</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ totalAmount }}</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ totalAmount }}</div>
                                        </td>
                                    </tr>
                                </table>
                                <hr />
                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Order Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.orderstatus" class="form-select orderstatus">
                                                <option v-for="(option, index) in order_status" :key="index" :value="option.id">
                                                    {{ option.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
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

<script>
export default {

    data() {
        return {
            orderstatus: '',
            orderid: '',
            customername: '',
            customeremail: '',
            insertdata: {
                orderId: this.$route.query.orderId,
                orderstatus: '',
            },
            orders: [],
            order_status:[],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.defaultLoading();
    },
    computed: {
        pageTitle() {
            return this.orderid ? 'Order Details ' + this.orderid : 'Order Details';
        },
        totalQuantity() {
            // Calculate total quantity
            return this.orders.reduce((total, order) => total + order.quantity, 0);
        },
        totalAmount() {
            // Calculate total amount
            return this.orders.reduce((total, order) => total + order.total, 0);
        },
    },
    head() {
        return {
            title: this.pageTitle
        };
    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('orderId', this.insertdata.orderId);
            formData.append('orderstatus', this.insertdata.orderstatus);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/order/update_order_status',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/orders/order-list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        async defaultLoading() {
            const orderId = this.$route.query.orderId;
            this.orderid = orderId;
            await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
                    this.orders = response.data.orderdata;
                    this.orderstatus = response.data.orderrow;
                    this.customername = response.data.customername;
                    this.customeremail = response.data.customeremail;
                    this.order_status = response.data.OrderStatus; 
                    this.insertdata.orderstatus = response.data.orderstatus_id; 
                   // $(".orderstatus").html(1);
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Has been successfully update order'
            });
        },

    },
}
</script>
