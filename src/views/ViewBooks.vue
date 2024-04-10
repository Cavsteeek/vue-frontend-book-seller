<template>
    <AdminNavbar v-if="userRole === 'ADMIN'" />
    <router-view v-if="userRole === 'ADMIN'"></router-view>

    <div v-if="userRole !== 'ADMIN'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div v-if="userRole === 'ADMIN'">

        <h2 class="p-5 text-lg font-semibold text-center text-gray-900 bg-white">
            BOOKS
        </h2>

        <div class="relative w-screen overflow-x-auto shadow-md sm:rounded-lg" style="max-height: 400px;">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-800 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image URL
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="overflow-y-auto">
                    <tr v-for="(book, index) in books" :key="book.id" class="odd:bg-white even:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ index + 1 }}
                        </th>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ book.title }}
                        </td>
                        <td class="px-6 py-4">
                            {{ book.description }}
                        </td>
                        <td class="px-6 py-4">
                            {{ book.author }}
                        </td>
                        <td class="px-6 py-4">
                            {{ book.price }}
                        </td>
                        <td class="px-6 py-4 url-field">
                            {{ book.imageUrl }}
                        </td>
                        <td class="px-6 py-4" style="row-span: 2px;">
                            <button @click="updateBook(book.id)"
                                class="font-medium text-blue-600 hover:underline">Edit</button>
                            <button @click="deleteBook(book.id)"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
import axios from 'axios'
import 'flowbite'

export default {
    name: "ViewBooks",
    components: { AdminNavbar },

    data() {
        return {
            books: [],
            userRole: localStorage.getItem('user_role') || '',
        };
    },

    methods: {
        async getAllBooks() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/book/view-all';
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

        async deleteBook(bookId) {
            const apiUrl = `http://localhost:8080/api/v1/book/${bookId}`

            const token = localStorage.getItem("access_token");

            await axios.delete(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert('Book Deleted Successfully')
                        console.log("Token: ", token);
                        this.books = this.books.filter(book => book.id !== bookId);
                        this.getAllBooks();
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Deleting book:', error);
                });
        },

        updateBook(bookId) {
            this.$router.push({ path: `/edit-book/${bookId}` });
        }
    },

    mounted() {
        this.getAllBooks();
    }
}
</script>

<style>
.url-field {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>