<template>
    <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'>
    <div id="body" class="bg-slate-100 flex h-screen">
        <div class="border border-slate-200 pt-10 pb-4 py-4 px-20 m-auto rounded-2xl bg-white" style="margin-top: 145px;">

            <!-- Login -->
            <h2 class="text-3xl font-semibold text-center mb-2 font-sans">Login
            </h2>


            <!-- Welcome message -->
            <h2 class="text-md font-semibold font-sans text-center mt-2 ">Welcome Back!
            </h2>
            <form @submit.prevent="signIn" class="">

                <!-- Email -->
                <div class="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mt-5">
                        <path
                            d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path
                            d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                    <!-- Email -->
                    <input class=" font-sans px-2 h-7 text-left text-wider focus:border-2 border-black mt-4" type="text"
                        id="emailInput" placeholder="Username" v-model="username" required>
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
                    <input id="input" class="font-sans px-2 h-7 text-left mt-2" v-model="password" type="password"
                        placeholder="Password" requried>
                </div>


                <!-- login Button -->
                <button
                    class="ml-30 text-md border border-white rounded-md tracking-wider px-1 py-1 bg-green-800 mt-8 text-white font-bold"
                    id="loginButton"><a @click="signIn">LOGIN</a>
                </button> <br><br>
            </form><br>

            <!-- Forgot Password -->
            <button class="font-semibold font-sans ml-28">
                <a class="hover:rounded-md hover:px-2 py-2 hover:bg-green-800 hover:text-white"
                    href="/forgotpassword">Forgot
                    Password?</a></button> <br><br>

            <!-- Sign up -->
            <button class="font-semibold font-sans ml-20">Don't have an
                account? <a class="text-slate-500 font-3xl font-bold mt-10" href="/signup">Sign
                    Up</a></button>
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
            /* email:'', */
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
                    if (response.status === 200) {
                        this.$router.push('/dashboard')
                        console.log(response.data)
                        localStorage.setItem("access_token", response.data.token)
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    // Handle request error
                    console.error('Error signing in:', error);
                });
        },
    },
};
</script>

<style scoped>
#emailInput {
    width: 374px;
}


#loginButton {
    width: 397px;
}

#input {
    width: 374px;
}
</style>