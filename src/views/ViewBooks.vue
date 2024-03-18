<template>
    <AdminNavbar />
    <router-view></router-view>
    <h2>Books</h2>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
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
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id" class="">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ book.title }}
                    </th>
                    <td class="px-6 py-4">
                        {{ book.description }}
                    </td>
                    <td class="px-6 py-4">
                        {{ book.author }}
                    </td>
                    <td class="px-6 py-4">
                        {{ book.price }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
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
        };
    },

    methods: {
        async getAllBooks() {
            try {
                const token = localStorage.getItem("access_token");
                const apiUrl = 'http://localhost:8080/api/v1/book/view-all';
                const response = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.books = (response.data);
                console.log(this.books);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        },
    },

    mounted() {
        this.getAllBooks();
    }
}
</script>