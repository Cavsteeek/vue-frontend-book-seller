<template>
    <NavBar v-if="userRole === 'USER'" />
    <router-view v-if="userRole === 'USER'"></router-view>

    <div v-if="userRole !== 'USER'" class="text-red-500 text-center text-xl mt-10">
        <p>You are not authorized to access this page.</p>
    </div>

    <div v-if="userRole === 'USER'">
        <div id="body" class="block bg-slate-100 flex w-screen h-screen">
            <div class="border border-slate-200 pt-10 pb-4 py-4 px-20 m-auto shadow-xl rounded-2xl bg-white"
                style="margin-top: 60px;">
                <div class="text-center" v-for="(user) in filteredUser" :key="user.id">
                    <!-- FName and LName -->
                    <div class="flex">

                        <!-- First name -->
                        <p class=" font-sans px-2 h-7 text-wider focus:ring-white rounded-md border-hidden" id="emailInput">
                            Firstname: {{ user.firstName }} </p>
                    </div>
                    <br>

                    <div class="flex focus:outline-none">

                        <!-- Last name -->
                        <p class=" font-sans px-2 h-7 text-wider focus:ring-white rounded-md border-hidden" id="emailInput">
                            Lastname: {{ user.lastName }}</p>

                    </div>
                    <br>

                    <!-- Email -->
                    <div class="flex focus:outline-none">

                        <!-- Email -->
                        <p class=" font-sans px-2 h-7 text-wider focus:ring-white rounded-md border-hidden" id="emailInput">
                            Email: {{ user.email }}</p>
                    </div>
                    <br>

                    <div class="flex focus:outline-none">

                        <!-- Username -->
                        <p class=" font-sans px-2 h-7 text-wider focus:ring-white rounded-md border-hidden" id="emailInput">
                            Username: {{ user.username }}</p>
                    </div>
                    <button class="ml-30 text-md rounded-md tracking-wider px-1 py-1 bg-gray-900 mt-8 text-white font-bold"
                        id="signupButton">Edit
                    </button> <br><br>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import 'flowbite'
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'Profile',
    components: { NavBar },

    data() {
        return {
            users: [],
            userRole: localStorage.getItem('user_role') || '',
            username: localStorage.getItem('username'),
        };
    },

    computed: {
        filteredUser() {
            return this.users.filter(user => user.username === this.username);
        },
    },

    methods: {
        async getAllUsers() {
            const token = localStorage.getItem("access_token");
            const apiUrl = 'http://localhost:8080/api/v1/user/all-users'; //localhost


            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.users = (response.data);
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing Users:', error);
                });
        },
    },

    mounted() {
        this.getAllUsers();
    },

}
</script>
<style scoped>
#emailInput {
    width: 374px;
}

#signupButton {
    width: 397px;
}
</style>