<template>
    <div id="body" class="block bg-slate-100 flex w-screen h-screen">
        <div class="border border-slate-200 pt-10 pb-4 py-4 px-20 m-auto shadow-xl rounded-2xl bg-white"
            style="margin-top: 80px;">

            <!-- Register ...... -->
            <h2 class="text-3xl font-semibold text-center mt-5 ">Register To Get Started!
            </h2>

            <form @submit.prevent="signUp" class="mt-3">
                <!-- FName and LName -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 29px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- First name -->
                    <input id="input" class="mt-6 font-sans px-2 h-7 text-left focus:outline-none" type="text"
                        v-model="firstName" placeholder="Firstname" required>

                    &NonBreakingSpace;
                    &NonBreakingSpace;

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 29px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- Last name -->
                    <input id="input" class="mt-6 font-sans px-2 h-7 text-left focus:outline-none" type="text"
                        placeholder="Lastname" v-model="lastName" required>

                </div>
                <br>


                <!-- Email -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mt-1">
                        <path
                            d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path
                            d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                    <!-- Email -->
                    <input class=" font-sans px-2 h-7 text-left text-wider focus:outline-none" type="email" id="emailInput"
                        placeholder="Email" v-model="email" required>
                </div>
                <br>


                <!-- Phone Number and Password -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-5 mt-1">
                        <path fill-rule="evenodd"
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Phone Number -->
                    <input id="input" class=" font-sans px-2 h-7 text-left focus:outline-none rounded-md    " type="text"
                        placeholder="Username" v-model="username" required>

                    &NonBreakingSpace;
                    &NonBreakingSpace;

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 4px;">
                        <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Password -->
                    <input id="input" class="font-sans px-2 h-7 text-left focus:outline-none" type="password"
                        placeholder="Password" v-model="password" required>
                </div>

                <!-- Sign Up Button -->
                <button class="ml-30 text-md rounded-md tracking-wider px-1 py-1 bg-green-800 mt-8 text-white font-bold"
                    id="signupButton">SIGN UP
                </button> <br><br>
            </form>

            <footer class="mt-3">
                <!-- Login -->
                <button class="font-semibold font-sans m-2 ml-20 text-center">Already have an
                    account? <a class="text-green-800 font-3xl font-bold text-right" href="/login">Login</a></button>
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
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
        };
    },
    methods: {
        async signUp() {
            const apiUrl = 'http://localhost:8080/api/v1/auth/sign-up';

            const userData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                username: this.username,
                password: this.password
            };

            await axios.post(apiUrl, userData)
                .then(response => {
                    if (response.status === 200) {
                        this.$router.push('/login')
                        console.log(response.data)
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
#emailInput {
    width: 374px;
}


#signupButton {
    width: 397px;
}

#body {}

#input {
    width: 168px;
}
</style>
