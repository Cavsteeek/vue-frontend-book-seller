<template>
    <div id="body" class="bg-slate-100 flex w-screen h-screen">
        <div class="border border-slate-200 pt-10 pb-2 py-4 px-16 shadow-xl rounded-2xl bg-white"
            style="margin-top: 55px;margin-left: 380px;height: 450px;">
            <div class="" style="margin-top: 30px;">
                <!-- Login -->
                <h2 class="text-3xl font-semibold text-center mb-2 font-sans">Forgot Password
                </h2>

                <!-- Welcome message -->
                <h2 class="text-md font-semibold font-sans text-center mt-2 ">
                </h2>
                <form>

                    <!-- Email -->
                    <div class="flex mt-[45px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-5 h-5 mt-1">
                            <path
                                d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                            <path
                                d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>
                        <!-- Email -->
                        <input class=" font-sans px-2 h-7 text-left text-wider focus:ring-white border-hidden" type="email"
                            id="input" placeholder="Username" v-model="email" required>
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
                    <button @click="home"
                        class="ml-30 text-md border border-white rounded-md tracking-wider px-1 py-1 bg-gray-900 mt-8 text-white font-bold"
                        id="loginButton">Forgot Password
                    </button> <br><br>
                </form><br>

                <!-- Forgot Password -->
                <button class="font-semibold font-sans ml-36">
                    <router-link to="/login" class="hover:rounded-md hover:px-2 py-2 hover:bg-gray-900
                hover:text-white">Back to Login?</router-link></button> <br><br>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'flowbite'

export default {
    name: "ForgotPassword",
    data() {
        return {
            email: localStorage.setItem('email'),
            password: '',
            userId: ''
        }
    },

    methods: {
        async resetPassword() {
            const apiUrl = 'http://localhost:8080/api/v1/user/generate-otp';

            const userData = {
                password: this.password
            }
        }
    }
}
</script>
    
<style scoped>
#loginButton {
    width: 397px;
}

#input {
    width: 397px;
}
</style>
