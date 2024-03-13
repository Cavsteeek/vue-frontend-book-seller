<template>
    <AdminNavbar />
    <router-view></router-view>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';

export default {
    name: "DashBoard",
    components: { AdminNavbar }
}
</script>
