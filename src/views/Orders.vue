<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="px-4 sm:px-5 py-5" v-if="userRole === 'USER'">
        <div>
            <p class="text-base text-center sm:text-lg font-serif">Cart Total: ₦{{ cartTotal }}</p>
        </div><br>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 text-center text-black">
            <div v-for="(filteredOrder) in filteredOrders" :key="filteredOrder.id"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <img class="mt-2 w-full h-48 rounded-t-lg object-scale-down" :src="filteredOrder.book.imageUrl"
                    alt="product image" />
                <div class="p-4 flex flex-col items-center flex-grow">
                    <p class="text-sm sm:text-lg font-semibold tracking-wider mt-2 mb-2 whitespace-nowrap url-field"
                        :title="filteredOrder.book.title">
                        {{ filteredOrder.book.title }}
                    </p>
                    <p class="text-xs sm:text-sm font-semibold tracking-wider" :title="filteredOrder.book.description">
                        Genre: {{
                            filteredOrder.book.description }}
                    </p>
                    <p class="text-xs sm:text-sm font-semibold tracking-wider" :title="filteredOrder.book.author">Author: {{
                        filteredOrder.book.author
                    }}</p>
                    <p class="text-xs sm:text-sm font-semibold tracking-wider">Quantity: {{ filteredOrder.quantity }}</p>
                    <div class="flex flex-col items-center mt-2.5">
                        <span class="text-lg sm:text-xl font-bold mb-2">₦{{ filteredOrder.book.price }}</span>
                        <p
                            class="lg:text-lg bg-blue-700 hover:bg-gray-800 text-white font-medium rounded-md sm:text-sm px-3 py-1.5 text-center">
                            Total: {{ filteredOrder.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="text-center font-raleway text-xl font-bold m-auto items-center rounded-md px-3 py-1.5">
        <button
            class="bg-gray-800 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-blue-500">
            CHECKOUT
        </button>
    </footer>
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

    computed: {
        filteredOrders() {
            return this.orders.filter(order => order.user.username === this.username);
        },

        cartTotal() {
            return this.filteredOrders.reduce((total, order) => total + order.price, 0);
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

<style scoped>
.url-field {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>