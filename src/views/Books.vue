<!-- UI is Bigger -->

<!-- <template>
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
            <div v-for="(book, index) in books" :key="index"
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
                        <button @click="addToCart(book.id)"
                            class="text-white transition-colors duration-100 ease-in-out bg-blue-700 hover:bg-gray-800 font-medium rounded-md text-xs sm:text-sm px-3 py-1.5 text-center">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->

<!-- UI is smaller -->
<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-xl mt-10">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="px-3 sm:px-4 py-4" v-if="userRole === 'USER'">
        <div>
            <p class="text-sm sm:text-base font-serif">Welcome {{ username }}!</p>
        </div><br>

        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 text-center text-black">
            <div v-for="(book, index) in books" :key="index"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <!-- Hover over picture for description -->
                <img class="mt-2 w-full h-36 rounded-t-lg object-scale-down" @click="toBookDetails(book.id)"
                    :title="'Description:\n' + book.description" :src="book.imageUrl" alt="product image" />
                <div class="p-3 flex flex-col items-center flex-grow">
                    <p class="text-xs sm:text-sm font-semibold tracking-wider mt-1 mb-1 whitespace-nowrap url-field"
                        :title="book.title">
                        {{ book.title }}
                    </p>
                    <p class="text-xxs sm:text-xs font-semibold tracking-wider" :title="book.genre">
                        Genre: {{ book.genre }}
                    </p>
                    <p class="text-xxs sm:text-xs font-semibold tracking-wider" :title="book.author">
                        Author: {{ book.author }}
                    </p>
                    <div class="flex flex-col items-center mt-2">
                        <span class="text-sm sm:text-md font-bold mb-1">₦{{ book.price }}</span>
                        <button @click="addToCart(book.id)"
                            class="text-white bg-blue-700 hover:bg-gray-800 font-medium rounded-md text-xxs sm:text-xs px-2 py-1 text-center transition-colors duration-200 ease-in-out">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.url-field {
    max-width: 150px;
    /* Ensures text doesn't overflow on smaller screens */
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>





<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios'
import 'flowbite'

export default {
    name: "Books",
    components: {
        NavBar,
    },
    data() {
        return {
            books: [],
            userRole: localStorage.getItem('user_role') || '',
            username: localStorage.getItem('username'),
            userId: ''

        };
    },

    methods: {
        async getAllBooks() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/book/view-all';
            // const apiUrl = 'https://book-seller-production.up.railway.app/api/v1/book/view-all';
            console.log("Username: " + localStorage.getItem('username'))

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.books = (response.data);
                        console.log(this.books);
                        console.log("Token: ", token);
                    } else {
                        alert(`you must be signed in to view books...confirm you are signed in`)
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing books:', error);
                });
        },

        async addToCart(bookId) {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("access_token");

            // Log the userId to ensure it's being set correctly
            console.log('User ID:', userId);

            // Check if userId is available
            if (!userId) {
                console.error('User ID is not available');
                return;
            }
            const apiUrl = `http://localhost:8080/api/v1/purchases/create/${userId}/${bookId}` //localhost

            const quantity = prompt("Quantity:");
            if (quantity === null || isNaN(quantity) || quantity <= 0) {
                return;
            }

            const requestData = {
                quantity: parseInt(quantity)
            };
            await axios.post(apiUrl, requestData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert('Added To Cart')
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        toBookDetails(bookId) {
            this.$router.push({ path: `/book-details/${bookId}` });
        },
    },

    mounted() {
        this.getAllBooks();
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