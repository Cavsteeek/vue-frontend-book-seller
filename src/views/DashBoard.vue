<template>
    <AdminNavbar />
    <AddBooks />
    <router-view></router-view>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import AddBooks from './AddBooks.vue';

export default {
    name: "DashBoard",
    components: { AdminNavbar, AddBooks }
}
</script>
