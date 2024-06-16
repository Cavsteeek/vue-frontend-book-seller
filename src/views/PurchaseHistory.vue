<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>
    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-xl mt-10">
        <p>You are not authorized to access this page. <RouterLink to="/login" class="text-black">Login</RouterLink>
        </p>
    </div>

    <div class="px-4 sm:px-6 py-4" v-if="userRole === 'USER'">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 text-center text-black">
            <div v-for="(filteredOrder) in  filteredOrders " :key="filteredOrder.id"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <img class="mt-2 w-full h-36 rounded-t-lg object-scale-down" :src="filteredOrder.book.imageUrl"
                    alt="product image" />
                <div class="p-3 flex flex-col items-center flex-grow">
                    <p class="text-sm font-semibold tracking-wider mt-1 mb-1 whitespace-nowrap url-field"
                        :title="filteredOrder.book.title">
                        {{ filteredOrder.book.title }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider desc-field" :title="filteredOrder.book.genre">
                        Genre: {{ filteredOrder.book.genre }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider whitespace-nowrap desc-field"
                        :title="filteredOrder.book.description">
                        Description: {{ filteredOrder.book.description }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider whitespace-nowrap desc-field"
                        :title="filteredOrder.book.author">
                        Author: {{ filteredOrder.book.author }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider whitespace-nowrap desc-field">Quantity: {{
                        filteredOrder.quantity }}</p>
                    <div class="flex flex-col items-center mt-2">
                        <span class="text-sm font-bold mb-1">₦{{ filteredOrder.book.price }}</span>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm bg-blue-700 text-white font-medium rounded-md px-3 py-1 text-center">
                                Total: {{ filteredOrder.price }}
                            </p>
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
    name: "PurchaseHistory",
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
    },

    methods: {
        async getAllOrders() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/purchase-history';

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
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}

.desc-field {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>