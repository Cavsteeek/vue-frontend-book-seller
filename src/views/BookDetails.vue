<template>
    <div>
        <div v-if="book" class="mx-[550px] my-[50px]">
            <h1 class="text-center mb-2 text-[30px] whitespace-nowrap"> Book Details </h1>
            <img class="mb-2" :src="book.imageUrl" alt="product image" />
            <p class="whitespace-nowrap">Title: {{ book.title }}</p><br>
            <p>Genre: {{ book.genre }}</p><br>
            <p>Author: {{ book.author }}</p><br>
            <p class="whitespace-nowrap">Description: {{ book.description }}</p><br>
            <p class="mb-2">Price: ₦{{ book.price }}</p>
            <button
                class="text-white lg:text-[15px] bg-blue-700 hover:bg-gray-700 w-[200px] h-[30px] font-medium rounded-md sm:text-xs px-2 py-1 text-center transition-colors duration-200 ease-in-out tracking-wider"><router-link
                    to="/books">Back
                    to Catalog</router-link></button>
        </div>

    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "BookDetails",
    data() {
        return {
            book: null,
        }
    },
    mounted() {
        this.bookId = this.$route.params.id;
        if (this.bookId) {
            this.getBookDetails(this.bookId);
        } else {
            console.error('No book ID provided in the route.');
        }
    },

    methods: {
        async getBookDetails(bookId) {
            const apiUrl = `http://localhost:8080/api/v1/book/book-details/${bookId}`

            const token = localStorage.getItem("access_token");

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.book = (response.data);
                        console.log("Book Details: ", this.book);
                        console.log("Token: ", token);
                    } else {
                        alert(`you must be signed in to view books.`)
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing book details:', error);
                });
        }
    }

}
</script>
<style></style>