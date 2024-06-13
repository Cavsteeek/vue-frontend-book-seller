<template>
    <div>
        Book details Page
        <div v-if="book">
            <img class="" :src="book.imageUrl" alt="product image" />
            <p>{{ book.title }}</p>
            <p>Genre: {{ book.genre }}</p>
            <p>Author: {{ book.author }}</p>
            <p>Description: {{ book.description }}</p>
            <p>Price: ₦{{ book.price }}</p>
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