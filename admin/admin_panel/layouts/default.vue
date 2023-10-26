<template>
<div>
    <Nuxt />
    <!--wrapper-->
    <div class="wrapper" v-if="$auth.loggedIn">
        <Sidebar />
        <NavBar />
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
        <footer class="page-footer">
            <p class="mb-0">Copyright © 2023. All right reserved.</p>
        </footer>

    </div>

</div>
</template>

<script>
import $ from "jquery";
import Sidebar from '@/components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    middleware: "auth",
    components: {
        Sidebar,
        NavBar
    },

    methods: {
        async logout() {
            this.$nuxt.$loading.start();
            this.$auth.logout();
            this.$nuxt.$loading.finish();
            this.$router.push("/login");
        },
    },
};
</script>
