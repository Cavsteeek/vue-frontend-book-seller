<template>
    <AdminNavbar />
    <router-view></router-view>
    <div class="px-5 py-5">
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

}
</script>

