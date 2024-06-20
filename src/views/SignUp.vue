<template>
    <!-- Main container for the registration page -->
    <div id="body" class="block bg-slate-100 flex w-screen h-screen">
        <div class="border border-slate-200 pt-10 pb-4 py-4 px-20 m-auto shadow-xl rounded-2xl bg-white"
            style="margin-top: 60px;">

            <!-- Register heading -->
            <h2 class="text-3xl font-semibold text-center mt-5 ">Register To Get Started!
            </h2>

            <!-- Registration form -->
            <form @submit.prevent="signUp" class="mt-3">
                <!-- First and Last Name fields -->
                <div class="flex">
                    <!-- User icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 29px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- First name input -->
                    <input id="input"
                        class="mt-6 font-sans px-2 h-7 text-left focus:ring-white rounded-md border-hidden capitalize"
                        type="text" v-model="firstName" placeholder="Firstname" required>

                    &NonBreakingSpace;
                    &NonBreakingSpace;

                    <!-- User icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 29px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- Last name input -->
                    <input id="input"
                        class="mt-6 font-sans px-2 h-7 text-left focus:ring-white rounded-md border-hidden capitalize"
                        type="text" placeholder="Lastname" v-model="lastName" required>
                </div>
                <br>

                <!-- Email field -->
                <div class="flex">
                    <!-- Email icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mt-1">
                        <path
                            d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path
                            d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                    <!-- Email input -->
                    <input class=" font-sans px-2 h-7 text-left text-wider focus:ring-white rounded-md border-hidden"
                        type="email" id="emailInput" placeholder="Email" v-model="email" required>
                </div>
                <br>

                <!-- Shipping Address field -->
                <div class="flex focus:outline-none">
                    <!-- Address icon -->
                    <svg class="w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path
                            d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    <!-- Shipping Address input -->
                    <input class="font-sans px-2 h-7 text-left text-wider focus:ring-white rounded-md border-hidden"
                        type="text" id="emailInput" placeholder="Shipping Address" v-model="shippingAddress" required>
                </div>
                <br>

                <!-- Payment Method field -->
                <div class="flex focus:outline-none">
                    <!-- Payment icon -->
                    <svg class="w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
                    </svg>
                    <!-- Payment Method input -->
                    <input class="font-sans px-2 h-7 text-left text-wider focus:ring-white rounded-md border-hidden"
                        type="text" id="emailInput" placeholder="Payment Method" v-model="paymentMethod" required>
                </div>
                <br>

                <!-- Username and Password fields -->
                <div class="flex focus:outline-none">
                    <!-- Username icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 6px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>

                    <!-- Username input -->
                    <input id="input" class=" font-sans px-2 h-7 text-left focus:ring-white rounded-md border-hidden"
                        type="text" placeholder="Username" v-model="username" required>

                    &NonBreakingSpace;
                    &NonBreakingSpace;

                    <!-- Password icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 4px;">
                        <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Password input -->
                    <input id="input" class="block font-sans px-2 h-7 text-left focus:ring-white rounded-md border-hidden"
                        type="password" placeholder="Password" v-model="password" required>
                </div>

                <!-- Sign Up button -->
                <button class="ml-30 text-md rounded-md tracking-wider px-1 py-1 bg-gray-900 mt-8 text-white font-bold"
                    id="signupButton">SIGN UP
                </button> <br><br>
            </form>

            <!-- Footer with login link -->
            <footer class="mt-3">
                <button class="font-semibold font-sans m-2 ml-20 text-center">Already have an
                    account? <router-link class="text-gray-900 font-3xl font-bold text-right"
                        to="/login">Login</router-link></button>
                <br><br>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "SignUp",
    data() {
        return {
            // Form data variables
            firstName: '',
            lastName: '',
            email: '',
            shippingAddress: '',
            paymentMethod: '',
            username: '',
            password: '',
        };
    },
    methods: {
        // Method to handle user registration
        async signUp() {
            const apiUrl = 'http://localhost:8080/api/v1/auth/sign-up';
            // const apiUrl = 'https://book-seller-production.up.railway.app/api/v1/auth/sign-up';

            // User data to be sent to the server
            const userData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                shippingAddress: this.shippingAddress,
                paymentMethod: this.paymentMethod,
                username: this.username,
                password: this.password
            };

            // Sending registration data to the server
            await axios.post(apiUrl, userData)
                .then(response => {
                    // On successful registration, redirect to login page
                    if (response.status >= 200 && response.status < 300) {
                        this.$router.push('/login')
                        console.log("Token:", response.data)
                    } else {
                        console.log(response.data)
                    }
                })
                .catch((error) => {
                    console.error('Error signing up:', error);
                });
        },
    },
};
</script>

<style scoped>
/* Style for the email input field */
#emailInput {
    width: 374px;
}

/* Style for the sign-up button */
#signupButton {
    width: 397px;
}

/* Style for input fields */
#input {
    width: 168px;
}
</style>
