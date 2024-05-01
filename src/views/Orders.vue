<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="px-4 sm:px-5 py-5" v-if="userRole === 'USER'">

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 text-center text-black">
            <div v-for="(order, index) in orders" :key="index"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <div v-if="order.user.username === username">
                    <img class="mt-2 w-full h-48 rounded-t-lg object-scale-down" :src="order.book.imageUrl"
                        alt="product image" />
                    <div class="p-4 flex flex-col items-center flex-grow">
                        <p class="text-sm sm:text-lg font-semibold tracking-wider mt-2 mb-2 whitespace-nowrap url-field"
                            :title="order.book.title">
                            {{ order.book.title }}
                        </p>
                        <p class="text-xs sm:text-sm font-semibold tracking-wider" :title="order.book.description">Genre: {{
                            order.book.description }}
                        </p>
                        <p class="text-xs sm:text-sm font-semibold tracking-wider" :title="order.book.author">Author: {{
                            order.book.author
                        }}</p>
                        <p class="text-xs sm:text-sm font-semibold tracking-wider">Quantity: {{ order.quantity }}</p>
                        <div class="flex flex-col items-center mt-2.5">
                            <span class="text-lg sm:text-xl font-bold mb-2">₦{{ order.book.price }}</span>
                            <p
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs sm:text-sm px-3 py-1.5 text-center">
                                Total: {{ order.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import 'flowbite'

export default {
    name: "Orders",
    components: {
        NavBar
    },
    data() {
        return {
            orders: [],
            userRole: localStorage.getItem('user_role') || '',
            username: localStorage.getItem('username'),
        }
    },

    methods: {
        async getAllOrders() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/purchases/all-purchases';

            console.log("Username: " + localStorage.getItem('username'))

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.orders = response.data;
                        console.log(this.orders);
                        console.log("Token: ", token);
                    } else {
                        alert(`you must be signed in to view this...confirm you are signed in`)
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing Orders:', error);
                });
        },
    },

    mounted() {
        this.getAllOrders();
    }

}
</script>

<style >
.url-field {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>