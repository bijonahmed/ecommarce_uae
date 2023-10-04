<template>
    <div class="card">
        <div class="card-header">
            My Profile
        </div>
        <div class="card-body">
            <form action="" @submit.prevent="updateProfile" @keydown="userForm.onKeydown($event)">
                <div class="form-group mb-3">
                    <label for="">Your name </label>
                    <input type="text" class="form-control" v-model="userForm.name" name="name" placeholder="Enter name" :class="{ 'is-invalid': userForm.errors.has('name') }">
                    <has-error :form="userForm" field="name"></has-error>
                </div>
                <div class="form-group mb-3">
                    <label for="">Your email </label>
                    <input type="text" class="form-control" v-model="userForm.email" name="email" placeholder="Enter email" :class="{ 'is-invalid': userForm.errors.has('email') }">
                    <has-error :form="userForm" field="email"></has-error>
                </div>
                <div class="form-group mb-3">
                    <label for="">Your Password</label>
                    <input type="password" class="form-control" v-model="userForm.password" name="password" placeholder="Enter password" :class="{ 'is-invalid': userForm.errors.has('password') }">
                    <has-error :form="userForm" field="password"></has-error>
                </div>
                <button type="submit" :disabled="userForm.busy" class="btn btn-success">
                    Update profile
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userForm: this.$vform({
                name: '',
                email: '',
                password: '',
            }),
        }
    },
    methods: {
        async updateProfile() {
            try {
                let { data } = await this.userForm.post('/auth/profile');
                this.userForm.password = '';
                await this.$auth.fetchUser()

                this.$toast.success({
                    title: 'Success!',
                    message: 'Profile updated successfully',
                })
            } catch (err) {
                console.log(err)
            }
        },
        getUser(){
            let user = this.$store.state.auth.user;
            
            this.userForm.name = user.name;
            this.userForm.email = user.email;
        }
    },
    mounted() {
        this.getUser();
    }
}
</script>

<style>

</style>