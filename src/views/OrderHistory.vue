<template>
    <AdminNavbar v-if="userRole === 'ADMIN'" />
    <router-view v-if="userRole === 'ADMIN'"></router-view>

    <div v-if="userRole !== 'ADMIN'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="px-5 py-5" v-if="userRole === 'ADMIN'">
        <table class="table-fixed border-separate m-auto w-full">
            <div class="">
                <thead>
                    <tr class="text-left px-2 py-2">
                        <th>Id</th>
                        <th>User ID</th>
                        <th>Book ID</th>
                        <th>Book</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </div>
            <div class="bg-slate-300">
                <tbody>
                    <tr class="text-left font-semibold">
                        <td class="">1</td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                    </tr>
                    <tr class="text-left font-semibold">
                        <td class="">2</td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                    </tr>
                    <tr class="text-left font-semibold">
                        <td class="">3</td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                        <td class=""></td>
                    </tr>
                </tbody>
            </div>
        </table>
    </div>
    <div>

    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
export default {
    name: "OrderHistory",
    components: { AdminNavbar },
    data() {
        return {
            userRole: localStorage.getItem('user_role') || '',
        }
    }

}
</script>

