<template>
    <router-view v-if="userRole === 'USER'"></router-view>
    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-xl mt-10">
        <p>You are not authorized to access this page.</p>
    </div>

    <div class="px-3 sm:px-4 py-4" v-if="userRole === 'USER'">
        Wishlist

        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 text-center text-black">

            <div v-for="(wish) in filteredWish" :key="wish.id"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <!-- Hover over picture for description -->
                <img class="mt-2 w-full h-36 rounded-t-lg object-scale-down" @click="toBookDetails(wish.book.id)"
                    :title="'Description:\n' + wish.book.description" :src="wish.book.imageUrl" alt="product image" />

                <div class="p-3 flex flex-col items-center flex-grow">
                    <p class="text-xs sm:text-sm font-semibold tracking-wider mt-1 mb-1 whitespace-nowrap url-field"
                        :title="wish.book.title">
                        {{ wish.book.title }}
                    </p>

                    <p class="text-xxs sm:text-xs font-semibold tracking-wider" :title="wish.book.genre">
                        Genre: {{ wish.book.genre }}
                    </p>

                    <p class="text-xxs sm:text-xs font-semibold tracking-wider desc-field" :title="wish.book.genre">
                        Description: {{ wish.book.description }}
                    </p>

                    <p class="text-xxs sm:text-xs font-semibold tracking-wider" :title="wish.book.author">
                        Author: {{ wish.book.author }}
                    </p>

                    <div class="flex flex-col items-center mt-2">
                        <span class="text-sm font-bold mb-1">₦{{ wish.book.price }}</span>

                        <div class="flex items-center space-x-2">

                            <div class="flex flex-col items-center mt-2">
                                <button @click="addToCart(wish.book.id)"
                                    class="text-md bg-blue-700 text-white font-medium rounded-md px-3 py-1 text-center sm:text-xs transition-colors duration-200 ease-in-out">Add
                                    to Cart</button>
                            </div>
                            <button class="p-1 text-red-500" title="Delete" @click="deleteFromWishlist(wish.id)">
                                <svg class="w-6 h-6 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                    <div class="flex flex-col items-center mt-2">
                        <button
                            class="text-white bg-blue-700 hover:bg-gray-800 w-[100px] font-medium rounded-md text-xxs sm:text-xs px-2 py-1 text-center transition-colors duration-200 ease-in-out"><router-link
                                to="/books">Back
                                to Catalog</router-link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import 'flowbite'

export default {
    name: "Wishlist",

    data() {
        return {
            wishlist: [],
            userRole: localStorage.getItem('user_role') || '',
            username: localStorage.getItem('username'),
        }
    },

    computed: {
        filteredWish() {
            return this.wishlist.filter(wish => wish.user.username === this.username);
        },
    },

    methods: {
        async getWishlist() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/user/wishlist/get-wishlist';

            console.log("Username: " + localStorage.getItem('username'))

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.wishlist = response.data;
                        console.log(this.wishlist);
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

        async deleteFromWishlist(id) {
            const apiUrl = `http://localhost:8080/api/v1/user/wishlist/delete-wish/${id}` //localhost

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
                        this.wishlist = this.wishlist.filter(filteredWish => filteredWish.id !== id);
                        this.getWishlist();
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Deleting:', error);
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
        this.getWishlist();
    }

}
</script>


<style scoped>
.url-field {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}

.desc-field {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>