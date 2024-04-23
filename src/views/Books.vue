<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>


    <div class="px-5 py-5" v-if="userRole === 'USER'">

        <div>
            <p class="font-serif text-lg">Welcome {{ username }}!</p>
        </div><br>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 text-center text-black">

            <div v-for="(book) in  books " :key="book.id" class="max-w-xs rounded-lg flex flex-col">
                <img class="object-scale-down mt-2 w-full h-48 rounded-t-lg bg-cover" :src="book.imageUrl"
                    alt="product image" />
                <div class="px-4 pb-2 flex flex-col flex-grow">
                    <p class="text-lg font-semibold tracking-wider mt-2 mb-2 url-field">{{ book.title }}</p>
                    <p class="text-sm font-semibold tracking-wider">Genre: {{ book.description }}
                    </p>
                    <p class="text-sm font-semibold tracking-wider text-black url-field">Author: {{ book.author }}</p>
                    <div class="flex flex-col items-center mt-2.5">
                        <span class="text-xl font-bold mb-2">₦{{ book.price }}</span>
                        <a href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 text-center">Add
                            to cart</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

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

        };
    },

    methods: {
        async getAllBooks() {
            const token = localStorage.getItem("access_token");
            // const apiUrl = 'http://localhost:8080/api/v1/book/view-all';
            const apiUrl = 'https://book-seller-production.up.railway.app/api/v1/book/view-all';
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

    },

    mounted() {
        this.getAllBooks();
    }

}
</script>

<style>
.url-field {
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center
}
</style>