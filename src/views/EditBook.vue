<script>
import axios from 'axios'
export default {
    name: "EditBook",
    data() {
        return {
            title: '',
            author: '',
            price: '',
            description: '',
            bookId: null

        };
    },

    mounted() {
        this.bookId = this.$route.params.bookId;
    },

    methods: {
        async updateBook() {
            // const bookId = this.$route.params.bookId;

            const apiUrl = `http://localhost:8080/api/v1/book/update/${this.bookId}`

            const token = localStorage.getItem("access_token");

            const userData = {
                title: this.title,
                description: this.description,
                author: this.author,
                price: this.price,
            };

            await axios.put(apiUrl, userData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class=" mt-9" style="">

            <!-- AddBook -->
            <h2 class="text-3xl font-semibold text-center mb-5 font-sans">Edit Book
            </h2>
            <div class="text-center">
                <form @submit.prevent="updateBook" class="">

                    <!-- Book Title -->
                    <div class="">
                        <!-- Book Title -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden mt-4" type="text"
                            id="userInput" placeholder="Book Title" v-model="title" required>
                    </div>
                    <br>
                    <!-- Book Author -->
                    <div class="">
                        <!-- Book Author -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden" type="text"
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
                        <textarea class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden" type="text"
                            id="userInput" placeholder="Book Description" v-model="description"></textarea>
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

<style scoped>
#loginButton {
    width: 374px;
}

#userInput {
    width: 374px;
}
</style>