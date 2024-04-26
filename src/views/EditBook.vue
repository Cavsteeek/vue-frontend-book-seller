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
            file: '',
            bookId: null

        };
    },

    mounted() {
        this.bookId = this.$route.params.bookId;
    },

    methods: {
        handleFileChange(event) {
            this.file = event.target.files[0];
        },
        capitalize(string) {
            if (!string) return '';
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        async updateBook() {

            const apiUrl = `http://localhost:8080/api/v1/book/update-book/${this.bookId}` //localhost
            // const apiUrl = `https://book-seller-production.up.railway.app/api/v1/book/update-book/${this.bookId}`

            const token = localStorage.getItem("access_token");

            const formData = new FormData();
            if (this.title.trim()) {
                formData.append('title', this.capitalize(this.title.trim()));
            }
            if (this.description.trim()) {
                formData.append('description', this.capitalize(this.description.trim()));
            }
            if (this.author.trim()) {
                formData.append('author', this.capitalize(this.author.trim()));
            }
            if (this.price.trim()) {
                formData.append('price', this.price.trim());
            } else {
                formData.append('price', this.price);
            }

            if (this.file) {
                formData.append('file', this.file);
            }

            await axios.patch(apiUrl, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert(`Book has been edited successfully`);
                        console.log("Data: ", response.data)
                        this.$router.push('/all-books')
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error editing book:', error);
                });
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
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden mt-4 capitalize"
                            type="text" id="userInput" placeholder="Book Title" v-model="title">
                    </div>
                    <br>
                    <!-- Book Author -->
                    <div class="">
                        <!-- Book Author -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden capitalize" type="text"
                            id="userInput" placeholder="Book Author" v-model="author">
                    </div>
                    <br>
                    <!-- Book Price -->
                    <div class="">
                        <!-- Book Price -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden " type="text"
                            id="userInput" placeholder="Book Price" v-model="price">
                    </div>
                    <br>
                    <!-- Book Description -->
                    <div class="">
                        <!-- Book Description -->
                        <textarea class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden capitalize"
                            type="text" id="userInput" placeholder="Book Description" v-model="description"></textarea>
                    </div>
                    <div class="">
                        <!-- Book Image -->
                        <input class="border border-gray-300 font-sans px-2 py-2 text-left focus:ring-white border-hidden"
                            type="file" id="userInput" @change="handleFileChange">
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