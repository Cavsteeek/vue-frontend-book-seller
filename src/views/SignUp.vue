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
