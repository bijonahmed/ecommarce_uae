<template lang="en">
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
                                <router-link to="/ecommarce/product-list">Product List </router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">New Product</li>
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
                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                        <div class="card-body">
                                            <ul class="nav nav-pills mb-3" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='bx bx-home font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">General</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='bx bx-user-pin font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">Data</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-contact" role="tab" aria-selected="false">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">Categories</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#attribute" role="tab" aria-selected="false">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='fadeIn animated bx bx-outline font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">Attribute</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#image" role="tab" aria-selected="false">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='fadeIn animated bx bx-images font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">Images</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="pills-tabContent">
                                                <div class="tab-pane fade show active" id="primary-pills-home" role="tabpanel">
                                                    <!-- General  -->
                                                    <div class="row mb-3 required">
                                                        <label for="input-name-1" class="col-sm-2 col-form-label">Product Name</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="name" placeholder="Product Name" v-model="insertdata.name" class="form-control" />
                                                            <input type="hidden" name="id" id="id" class="form-control" />
                                                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-description-1" class="col-sm-2 col-form-label">Description</label>
                                                        <div class="col-sm-10">
                                                            <client-only placeholder="loading...">
                                                                <ckeditor-nuxt v-model="insertdata.description" :config="editorConfig" class="form-control" />
                                                            </client-only>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 required">
                                                        <label for="input-meta-title-1" class="col-sm-2 col-form-label">Meta Tag Title</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="meta_title" value placeholder="Meta Tag Title" v-model="insertdata.meta_title" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Meta Tag Description</label>
                                                        <div class="col-sm-10">
                                                            <textarea name="meta_description" rows="5" placeholder="Meta Tag Description" v-model="insertdata.meta_description" id="meta_description" class="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Meta Tag Keywords</label>
                                                        <div class="col-sm-10">
                                                            <textarea name="meta_keyword" rows="5" placeholder="Meta Tag Keywords" class="form-control" v-model="insertdata.meta_keyword"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 required">
                                                        <label for="input-meta-title-1" class="col-sm-2 col-form-label">Product Tags</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="meta_title" placeholder="Product Tags" v-model="insertdata.product_tag" class="form-control" />
                                                            <small>Comma separated</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                                                    <!-- Data -->
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">Model</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" name="meta_title" placeholder="Model" id="model" v-model="insertdata.model" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">SKU</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" name="meta_title" placeholder="SKU" v-model="insertdata.sku" class="form-control" />
                                                                    <small>Stock Keeping Unit</small>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">Location</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" name="meta_title" placeholder="Location" v-model="insertdata.location" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">Price</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" name="meta_title" placeholder="Price" v-model="insertdata.price" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">Stock Quantity</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" placeholder="1" v-model="insertdata.stock_qty" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">Stock Minimum Quantity</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" v-model="insertdata.stock_mini_qty" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3 required">
                                                                <label for="input-meta-title-1" class="col-sm-2 col-form-label">Out Of Stock Status</label>
                                                                <div class="col-sm-10">
                                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="insertdata.stock_status">
                                                                        <option selected>Select</option>
                                                                        <!-- categories -->
                                                                        <option value="6">2-3 Days</option>
                                                                        <option value="7">In Stock</option>
                                                                        <option value="5">Out Of Stock</option>
                                                                        <option value="8">Pre-Order</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="primary-pills-contact" role="tabpanel">
                                                    <!-- SEO -->
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Manufacturer</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" placeholder="Manufacturer" v-model="insertdata.manufacturer" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Categories</label>
                                                                <div class="col-sm-10">
                                                                    <div>
                                                                        <input v-model="categories" @input="search" class="form-control" placeholder="Search..." />
                                                                        <ul v-if="searchResults.length">
                                                                            <li v-for="result in searchResults" :key="result.name" class="custom-list">
                                                                                {{ result.category }} <a href="javascript:void(0);" @click="addToSelected(result)"><i class="fadeIn animated bx bx-plus-circle"></i></a>
                                                                            </li>
                                                                        </ul>
                                                                        <div v-else>
                                                                            <!-- <small>No results found.</small> -->
                                                                        </div>
                                                                        <span class="d-none_">
                                                                            <textarea v-model="multi_categories" placeholder="Selected Value" class="w-100"></textarea>
                                                                        </span>
                                                                        <div v-if="selectedItems.length" class="bgColor">
                                                                            <hr />
                                                                            <div v-for="item in selectedItems" :key="item.id">
                                                                                {{ item.category }} <a href="javascript:void(0);" @click="removeFromSelected(item)"><i class="fadeIn animated bx bx-minus-circle"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Download Link</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" name="keyword" value placeholder="Download" v-model="insertdata.download_link" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <!-- <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="attribute" role="tabpanel">
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Download Link</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="keyword" value placeholder="Download" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Download Link</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="keyword" value placeholder="Download" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Download Link</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="keyword" value placeholder="Download" class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="image" role="tabpanel">
                                                    <div class="alert alert-info" bis_skin_checked="1"><i class="fas fa-info-circle"></i> Must Upload Products Images 300x300px</div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Thumbnail Image</label>
                                                        <div class="col-sm-10">
                                                            <input type="file" value class="form-control" accept="image/png,image/jpeg" ref="files" @change="previewImage" />
                                                            <img v-if="previewUrl" :src="previewUrl" alt="Preview" class="img-fluids" />
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Additional Image</label>
                                                        <div class="col-sm-10">
                                                            <input type="file" multiple class="form-control" accept="image/png,image/jpeg" @change="handleImageUpload" ref="images" />
                                                            <div class="row mt-3">
                                                                <div class="col-md-3" v-for="(image, index) in images" :key="index">
                                                                    <div class="card">
                                                                        <img :src="image.url" class="card-img-top img-fluid" alt="Preview" />
                                                                        <div class="card-body">
                                                                            <button type="button" class="btn btn-danger btn-sm" @click="removeImage(index)">Remove</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

<script>
export default {
    components: {
        'ckeditor-nuxt': () => {
            if (process.client) {
                return import('@blowstack/ckeditor-nuxt')
            }
        },
    },
    head: {
        title: 'Product Add',
    },
    data() {
        return {
            editorConfig: {
                removePlugins: ['Title'],
                simpleUpload: {
                    uploadUrl: 'path_to_image_controller',
                    headers: {
                        'Authorization': 'optional_token'
                    }
                }
            },
            insertdata: {

                id: '',
                name: '',
                description: '',
                meta_title: '',
                meta_description: '',
                meta_keyword: '',
                product_tag: '',
                model: '',
                sku: '',
                location: '',
                price: '',
                stock_qty: 1,
                stock_mini_qty: 1,
                stock_status: '',
                manufacturer: '',
                download_link: '',
               // categories: '',
                //multi_categories: '',
                files: '',
                images: '',
 

                status: 1,
            },
            previewUrl: null,
            // addPreviewUrls: [],
            images: [],
            selectedCategory: null,
            multi_categories: '',
            results: [],
            selectedItems: [],
            categories: '',
            searchResults: [],
            notifmsg: '',
            file: '',
            errors: {},
        }
    },
    async mounted() {
        await this.loadCKEditor();
        CKEDITOR.replace('editor');
    },
    methods: {
        handleImageUpload(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                this.checkImageDimensions(file);
            }
        },
        checkImageDimensions(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    if (img.width === 300 && img.height === 300) {
                        const url = e.target.result;
                        this.images.push({
                            url,
                            file
                        });
                    } else {
                        alert('Image dimensions must be 300x300 pixels.');
                        this.$refs.images.value = ''; // Reset file input
                        //this.$refs.files = '';
                    }
                };
            };
            reader.readAsDataURL(file);
        },
        removeImage(index) {
            this.images.splice(index, 1);
        },
        previewImage(event) {
            const file = event.target.files[0];
            this.previewUrl = URL.createObjectURL(file);
            this.checkImageDimensionsThunbnail(file);
        },
        checkImageDimensionsThunbnail(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    if (img.width === 300 && img.height === 300) {
                        this.previewUrl = e.target.result;
                    } else {
                        alert('Image dimensions must be 300x300 pixels.');
                    }
                };
            };
            reader.readAsDataURL(file);
            this.resetInput();
        },
        resetInput() {
            this.previewUrl = null;
            this.$refs.files.value = '';
        },
        addToSelected(result) {

            //console.log(result);
           

            this.selectedItems.push(result);
            this.multi_categories = this.selectedItems.map(result => result.id).join(',');
            //this.selectedItemIds = this.selectedItems.map(item => item.id).join(', ');


        },
        removeFromSelected(item) {
            const index = this.selectedItems.indexOf(item);
            if (index !== -1) {
                this.selectedItems.splice(index, 1);
                this.updatemulti_categories();
            }
        },
        updatemulti_categories() {
            this.multi_categories = this.selectedItems.map(item => item.id).join(',');
        },
        search() {
            if (this.categories.length > 2) {
                this.$axios.$get(`/category/search?term=${this.categories}`)
                    .then(response => {
                        this.searchResults = response;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                this.searchResults = [];
            }
        },
        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },
        loadCKEditor() {
            return new Promise((resolve) => {
                if (typeof CKEDITOR === 'undefined') {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
                    script.async = true;
                    script.onload = resolve;
                    document.head.appendChild(script);
                } else {
                    resolve();
                }
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('files', this.files); 
            formData.append('images', this.images); //multiple
            formData.append('category', this.multi_categories);
            formData.append('name', this.insertdata.name);
            formData.append('description', this.insertdata.description);
            formData.append('meta_title', this.insertdata.meta_title);
            formData.append('meta_description', this.insertdata.meta_description);
            formData.append('meta_keyword', this.insertdata.meta_keyword);
            formData.append('product_tag', this.insertdata.product_tag);
            formData.append('model', this.insertdata.model);
            formData.append('sku', this.insertdata.sku);
            formData.append('location', this.insertdata.location);
            formData.append('price', this.insertdata.price);
            formData.append('stock_qty', this.insertdata.stock_qty);
            formData.append('stock_mini_qty', this.insertdata.stock_mini_qty);
            formData.append('stock_status', this.insertdata.stock_status);
            formData.append('manufacturer', this.insertdata.manufacturer);
            formData.append('download_link', this.insertdata.download_link);
            formData.append('status', this.insertdata.status);
            formData.append('keyword', this.insertdata.keyword);
            // formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/product/save',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/ecommarce/product-list');
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

<style scoped>
/* CSS */
ol,
ul {
    padding-left: 0rem;
}

ul {
    list-style: none;
}

.bgColor {
    background-color: #c8c8c8;
    padding: 1px;
    border-radius: 2px;
}

.img-fluid {
    width: 300px;
    height: 150px;
}

.img-fluids {
    margin-top: 10px;
    width: 300px;
    height: 300px;
}
</style>
