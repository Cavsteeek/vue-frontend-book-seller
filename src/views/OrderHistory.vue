<template>
    <AdminNavbar v-if="userRole === 'ADMIN'" />
    <router-view v-if="userRole === 'ADMIN'"></router-view>

    <div v-if="userRole !== 'ADMIN'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div v-if="userRole === 'ADMIN'">

        <h2 class="p-5 text-xl ml-40 mb-2 font-raleway font-semibold text-center text-gray-900 bg-white">
            ORDER HISTORY
        </h2>

        <div class="relative w-screen overflow-x-auto shadow-md rounded-xl sm:rounded-lg" style="max-height: 400px;">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-800 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Book Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Purchase Time
                        </th>
                    </tr>
                </thead>
                <tbody class="overflow-y-auto">
                    <tr v-for="(order, index) in orderHistory" :key="order.id" class="odd:bg-white even:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ index + 1 }}
                        </th>
                        <td class="px-6 py-4">
                            {{ order.book.title }}
                        </td>
                        <td class="px-6 py-4 ">
                            {{ order.quantity }}
                        </td>
                        <td class="px-6 py-4 ">
                            {{ order.price }}
                        </td>

                        <td class="px-6 py-4">
                            {{ order.user.username }}
                        </td>
                        <td class="px-6 py-4">
                            {{ order.purchaseTime }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import axios from 'axios'
import 'flowbite'

export default {
    name: "OrderHistory",
    components: { AdminNavbar },
    data() {
        return {
            orderHistory: [],
            userRole: localStorage.getItem('user_role') || '',
        };
    },

    methods: {
        async getOrderHistory() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/purchases/all-purchases';

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.orderHistory = response.data;
                        console.log(this.orderHistory);
                        console.log("Token: ", token);
                    } else {
                        alert(`you must be signed in to view this...confirm you are signed in`)
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing Order History:', error);
                });
        },

    },

    mounted() {
        this.getOrderHistory();
    }
}
</script>

