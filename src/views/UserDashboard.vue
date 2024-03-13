<template>
    <NavBar />
    <router-view></router-view>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "UserDashboard",
    components: {
        NavBar,
    },
    methods: {
        logout() {
            this.$router.push({ path: '/login' });
        }
    }
}
</script>