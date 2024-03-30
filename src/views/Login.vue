<template>
    <div id="body" class="bg-slate-100 flex w-screen h-screen">
        <div class="border border-slate-200 pt-10 pb-2 py-4 px-20 m-auto shadow-xl rounded-2xl bg-white"
            style="margin-top: 60px;">

            <!-- Login -->
            <h2 class="text-3xl font-semibold text-center mb-2 font-sans">Login
            </h2>

            <!-- Welcome message -->
            <h2 class="text-md font-semibold font-sans text-center mt-2 ">Welcome Back!
            </h2>
            <form @submit.prevent="signIn" class="">

                <!-- Username -->
                <div class="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 22px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- Username -->
                    <input class=" font-sans px-2 h-7 text-left text-wider focus:ring-white mt-4 border-hidden" type="text"
                        id="userInput" placeholder="Username" v-model="username" required>
                </div>
                <br>

                <!-- Password -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 12px;">
                        <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Password -->
                    <input id="input" class="font-sans px-2 h-7 text-left mt-2 focus:ring-white border-hidden"
                        v-model="password" type="password" placeholder="Password" requried>
                </div>

                <!-- login Button -->
                <button
                    class="ml-30 text-md border border-white rounded-md tracking-wider px-1 py-1 bg-gray-900 mt-8 text-white font-bold"
                    id="loginButton">LOGIN
                </button> <br><br>
            </form><br>

            <!-- Forgot Password -->
            <button class="font-semibold font-sans ml-36">
                <router-link to="/forgotpassword" class="hover:rounded-md hover:px-2 py-2 hover:bg-gray-900
                hover:text-white">Forgot
                    Password?</router-link></button> <br><br>

            <!-- Sign up -->
            <button class="font-semibold font-sans ml-20">Don't have an
                account? <router-link to="/signup" class="text-gray-900 font-3xl font-bold mt-10">Sign
                    Up</router-link></button>
            <br><br>

        </div>
    </div>
</template>
    

<script>
import axios from 'axios'


export default {
    name: "Login",
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async signIn() {
            const apiUrl = 'http://localhost:8080/api/v1/auth/sign-in';

            const userData = {
                username: this.username,
                password: this.password
            };

            await axios.post(apiUrl, userData)
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert()
                        const role = response.data.role;
                        localStorage.setItem("access_token", response.data.token)
                        localStorage.setItem("user_role", role)
                        if (role === 'ADMIN') {
                            this.$router.push('/add-books')
                        } else {
                            this.$router.push('/books')
                        }
                        console.log("Token: ", response.data)
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error signing in:', error);
                });
        },
    },
};
</script>

<style scoped>
#userInput {
    width: 374px;
}


#loginButton {
    width: 397px;
}

#input {
    width: 374px;
}
</style>