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
    <!-- Display NavBar and router view if user role is 'USER' -->
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <!-- Show unauthorized message if user role is not 'USER' -->
    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-xl mt-10">
        <p>You are not authorized to access this page.</p>
    </div>

    <!-- Content for authenticated users -->
    <div class="px-3 sm:px-4 py-4" v-if="userRole === 'USER'">
        <div>
            <p class="text-sm sm:text-base font-serif">Welcome {{ username }}!</p>
        </div><br>

        <!-- Display books in a responsive grid layout -->
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 text-center text-black">
            <!-- Loop through books and display each book's details -->
            <div v-for="(book, index) in books" :key="index"
                class="max-w-xs mx-auto rounded-lg overflow-hidden flex flex-col items-center">
                <!-- Show book cover image, with a click to view details and hover to show description -->
                <img class="mt-2 w-full h-36 rounded-t-lg object-scale-down" @click="toBookDetails(book.id)"
                    :title="'Description:\n' + book.description" :src="book.imageUrl" alt="product image" />
                <div class="p-3 flex flex-col items-center flex-grow">
                    <!-- Display book title, genre, and author -->
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

                    <!-- Display price and wishlist button -->
                    <div class="flex flex-col items-center mt-2">
                        <div class="flex items-center space-x-2">
                            <span class="text-md font-bold mb-1">₦{{ book.price }}</span>
                            <!-- Toggle wishlist button with heart icon -->
                            <button class="p-1 text-red-500" title="Toggle Wishlist" @click="addToWishlist(book.id)">
                                <!-- Filled heart if book is in wishlist, outline if not -->
                                <svg v-if="wishlist[book.id]" class="w-5 h-4 fill-yellow-300 mb-1"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                </svg>

                                <svg v-else class="w-5 h-4 fill-yellow-300 mb-1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512">
                                    <path
                                        d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                </svg>
                            </button>
                        </div>
                        <!-- Add to cart button -->
                        <button @click="addToCart(book.id)"
                            class="text-white lg:text-[13.5px] bg-blue-700 hover:bg-gray-700 w-[100px] font-medium rounded-md text-xxs sm:text-xs px-2 py-1 text-center transition-colors duration-200 ease-in-out tracking-wider">Add
                            to Cart</button>
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
import NavBar from '@/components/NavBar.vue'; // Import NavBar component
import axios from 'axios'; // Import axios for HTTP requests
import 'flowbite'; // Import Flowbite for UI components

export default {
    name: "Books", // Component name
    components: {
        NavBar, // Register NavBar component
    },
    data() {
        return {
            books: [], // List of books
            userRole: localStorage.getItem('user_role') || '', // User role from local storage
            username: localStorage.getItem('username'), // Username from local storage
            userId: localStorage.getItem("userId") || '', // User ID from local storage
            wishlist: {}, // User's wishlist
        };
    },
    created() {
        this.loadWishlist(); // Load wishlist when component is created
    },
    methods: {
        // Fetch all books from the server
        async getAllBooks() {
            const token = localStorage.getItem("access_token"); // Access token from local storage
            const apiUrl = 'http://localhost:8080/api/v1/book/view-all'; // API URL for fetching books
            // const apiUrl = 'https://book-seller-production.up.railway.app/api/v1/book/view-all'; // Alternative API URL
            console.log("Username: " + localStorage.getItem('username'))

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}` // Authorization header with token
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.books = (response.data); // Update books data
                        // console.log(this.books);
                        // console.log("Token: ", token);
                    } else {
                        alert('Please sign in to view books.');
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fetching books:', error);
                });
        },
        // Add a book to the user's cart
        async addToCart(bookId) {
            const userId = localStorage.getItem("userId"); // User ID from local storage
            const token = localStorage.getItem("access_token"); // Access token from local storage

            console.log('User ID:', userId); // Log user ID

            if (!userId) {
                console.error('User ID is not available');
                return;
            }
            const apiUrl = `http://localhost:8080/api/v1/purchases/create/${userId}/${bookId}`; // API URL for adding to cart

            const quantity = prompt("Quantity:"); // Prompt for quantity
            if (quantity === null || isNaN(quantity) || quantity <= 0) {
                return;
            }

            const requestData = {
                quantity: parseInt(quantity) // Request data with quantity
            };
            await axios.post(apiUrl, requestData, {
                headers: {
                    'Authorization': `Bearer ${token}` // Authorization header with token
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert('Added To Cart');
                    } else {
                        alert(response.data);
                        console.log(response.data);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        // Add a book to the user's wishlist
        async addToWishlist(bookId) {
            const userId = this.userId; // User ID from data
            const token = localStorage.getItem("access_token"); // Access token from local storage

            console.log('User ID:', userId); // Log user ID

            if (!userId) {
                console.error('User ID is not available');
                return;
            }

            const apiUrl = `http://localhost:8080/api/v1/user/wishlist/create/${userId}/${bookId}`; // API URL for adding to wishlist

            try {
                const response = await axios.post(apiUrl, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Authorization header with token
                    }
                });

                if (response.status >= 200 && response.status < 300) {
                    alert('Added To Wishlist');
                    this.wishlist[bookId] = true; // Update wishlist
                    this.saveWishlist();
                    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
                } else {
                    console.error('Error adding to wishlist:', response.data);
                }
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        },
        // Save wishlist to local storage
        saveWishlist() {
            localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        },
        // Load wishlist from local storage
        loadWishlist() {
            const storedWishlist = localStorage.getItem('wishlist');
            if (storedWishlist) {
                this.wishlist = JSON.parse(storedWishlist);
            }
        },
        // Navigate to book details page
        toBookDetails(bookId) {
            this.$router.push({ path: `/book-details/${bookId}` });
        },
    },
    // Fetch books when component is mounted
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