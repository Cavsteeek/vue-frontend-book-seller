<!-- UI is bigger -->

<!-- <template>
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
                        <div class="flex items-center space-x-3">
                            <p
                                class="lg:text-lg bg-blue-700 text-white font-medium rounded-md sm:text-sm px-3 py-1.5 text-center ml-5">
                                Total: {{ filteredOrder.price }}
                            </p>
                            <button class="p-1">
                                <svg class="w-6 h-6 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="text-center font-raleway text-xl font-bold m-auto items-center rounded-md px-3 py-1.5">
        <button
            class="bg-gray-800 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition-colors duration-100 ease-in-out focus:outline-none focus:ring-blue-500">
            CHECKOUT
        </button>
    </footer>
</template> -->

<!-- UI is smaller -->

<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-xl mt-10">
        <p>You are not authorized to access this page. <RouterLink to="/login" class="text-black">Login</RouterLink>
        </p>
    </div>

    <div class="px-4 sm:px-6 py-4" v-if="userRole === 'USER'">
        <div>
            <p class="text-sm text-center font-serif">Cart Total: ₦{{ cartTotal }}</p>
        </div><br>

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
                    <p class="text-xs font-semibold tracking-wider" :title="filteredOrder.book.genre">
                        Genre: {{ filteredOrder.book.genre }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider" :title="filteredOrder.book.description">
                        Description: {{ filteredOrder.book.description }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider" :title="filteredOrder.book.author">
                        Author: {{ filteredOrder.book.author }}
                    </p>
                    <p class="text-xs font-semibold tracking-wider">Quantity: {{ filteredOrder.quantity }}</p>
                    <div class="flex flex-col items-center mt-2">
                        <span class="text-sm font-bold mb-1">₦{{ filteredOrder.book.price }}</span>
                        <div class="flex items-center space-x-2">
                            <p class="text-sm bg-blue-700 text-white font-medium rounded-md px-3 py-1 text-center">
                                Total: {{ filteredOrder.price }}
                            </p>
                            <button class="p-1 text-red-500" title="Delete" @click="deleteOrder(filteredOrder.id)">
                                <svg class="w-6 h-6 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-center font-raleway text-lg font-bold mx-auto rounded-md px-3 py-1">
            <button
                class="bg-gray-800 hover:bg-blue-700 text-white rounded-md px-3 py-2 transition-colors duration-200 ease-in-out">
                CHECKOUT
            </button>
        </footer>
    </div>
</template>

<style scoped>
.url-field {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>


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
        // create func clearCart that is on BE deleteAll onClick checkout button
        async deleteOrder(orderId) {
            const apiUrl = `http://localhost:8080/api/v1/purchases/delete-order/${orderId}` //localhost

            const token = localStorage.getItem("access_token");

            await axios.delete(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert('Deleted Successfully')
                        console.log("Token: ", token);
                        this.orders = this.orders.filter(filteredOrder => filteredOrder.id !== orderId);
                        this.getAllOrders();
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Deleting:', error);
                });
        },
    },

    mounted() {
        this.getAllOrders();
    }

}
</script>
<!-- Config for bigger UI -->
<!-- <style scoped>
.url-field {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style> -->