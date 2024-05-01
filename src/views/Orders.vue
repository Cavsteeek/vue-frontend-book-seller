<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="px-4 sm:px-5 py-5" v-if="userRole === 'USER'">
        <div>
            <p class="text-base sm:text-lg font-serif">Welcome {{ username }}!</p>
        </div><br>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 text-center text-black">
            <div v-for="(order, index) in books" :key="index"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <img class="mt-2 w-full h-48 rounded-t-lg object-scale-down" :src="book.imageUrl" alt="product image" />
                <div class="p-4 flex flex-col items-center flex-grow">
                    <p class="text-sm sm:text-lg font-semibold tracking-wider mt-2 mb-2 whitespace-nowrap url-field"
                        :title="book.title">
                        {{ book.title }}
                    </p>
                    <p class="text-xs sm:text-sm font-semibold tracking-wider" :title="book.description">Genre: {{
                        book.description }}
                    </p>
                    <p class="text-xs sm:text-sm font-semibold tracking-wider" :title="book.author">Author: {{ book.author
                    }}</p>
                    <div class="flex flex-col items-center mt-2.5">
                        <span class="text-lg sm:text-xl font-bold mb-2">₦{{ book.price }}</span>
                        <a href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs sm:text-sm px-3 py-1.5 text-center">Add
                            to cart</a>
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
        }
    },

    methods: {
        async getAllOrders() {
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