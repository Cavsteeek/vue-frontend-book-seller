<template>
    <AdminNavbar v-if="userRole === 'ADMIN'" />
    <router-view v-if="userRole === 'ADMIN'"></router-view>

    <div v-if="userRole !== 'ADMIN'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="container" v-if="userRole === 'ADMIN'">
        <div class=" mt-9" style="">

            <!-- AddBook -->
            <h2 class="text-3xl font-semibold text-center mb-5 font-sans">Add Book
            </h2>
            <div class="text-center">
                <form @submit.prevent="addBook" class="">

                    <!-- Book Title -->
                    <div class="">
                        <!-- Book Title -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden mt-4 capitalize"
                            type="text" id="userInput" placeholder="Book Title" v-model="title" required>
                    </div>
                    <br>
                    <!-- Book Author -->
                    <div class="">
                        <!-- Book Author -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden capitalize" type="text"
                            id="userInput" placeholder="Book Author" v-model="author" required>
                    </div>
                    <br>
                    <!-- Book Price -->
                    <div class="">
                        <!-- Book Price -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden" type="text"
                            id="userInput" placeholder="Book Price" v-model="price" required>
                    </div>
                    <br>
                    <!-- Book Description -->
                    <div class="">
                        <!-- Book Description -->
                        <textarea class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden capitalize"
                            type="text" id="userInput" placeholder="Book Description" v-model="description"></textarea>
                    </div>
                    <br>
                    <div class="">
                        <!-- Book Image -->
                        <input class="border border-gray-300 font-sans px-2 py-2 text-left focus:ring-white border-hidden"
                            type="file" id="userInput" @change="handleFileChange" required>
                    </div>
                    <!-- Add Book -->
                    <button
                        class="ml-30 text-md border border-white rounded-md tracking-wider px-2 py-2 bg-gray-900 mt-8 text-white font-bold"
                        id="loginButton">Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
import axios from 'axios'

export default {
    name: "AddBooks",
    components: { AdminNavbar },
    data() {
        return {
            title: '',
            description: '',
            author: '',
            price: '',
            file: '',
            userRole: localStorage.getItem('user_role') || '',
        };
    },

    methods: {
        handleFileChange(event) {
            this.file = event.target.files[0];
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },


        async addBook() {
            const apiUrl = 'http://localhost:8080/api/v1/book'

            this.title = this.capitalize(this.title);
            this.description = this.capitalize(this.description);
            this.author = this.capitalize(this.author);

            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('author', this.author);
            formData.append('price', this.price);
            formData.append('file', this.file);

            const token = localStorage.getItem("access_token");

            await axios.post(apiUrl, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert(`Book has been added successfully`);
                        console.log("Data: ", response.data)
                        window.location.reload();
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error adding book:', error);
                });
        },
    },


}
</script>

<style scoped>
#loginButton {
    width: 374px;
}

#userInput {
    width: 374px;
}
</style>