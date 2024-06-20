<template>
    <AdminNavbar v-if="userRole === 'ADMIN'" />
    <router-view v-if="userRole === 'ADMIN'"></router-view>

    <div v-if="userRole !== 'ADMIN'" class="text-red-500 text-center text-3xl mt-20">
        <p>You are not authorized to access this page.</p>
    </div>

    <div v-if="userRole === 'ADMIN'">
        <h2 class="p-5 ml-40 mb-2 font-raleway text-xl font-semibold text-center text-gray-900 bg-white">
            CUSTOMERS
        </h2>
        <div class="relative w-screen overflow-x-auto shadow-md rounded-xl sm:rounded-lg" style="max-height: 400px;">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-800 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Firstname
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Lastname
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="overflow-y-auto">
                    <tr v-for="(user, index) in customers" :key="user.id" class="odd:bg-white even:bg-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ index + 1 }}
                        </th>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ user.username }}
                        </td>
                        <td class="px-6 py-4">
                            {{ user.firstName }}
                        </td>
                        <td class="px-6 py-4">
                            {{ user.lastName }}
                        </td>
                        <td class="px-6 py-4">
                            {{ user.email }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                            <button @click="deleteUser(user.id)"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import axios from 'axios'
import 'flowbite'
export default {
    name: "Customers",
    components: { AdminNavbar },

    data() {
        return {
            customers: [],
            userRole: localStorage.getItem('user_role') || '',
        };
    },

    methods: {
        async getAllCustomers() {
            const token = localStorage.getItem("access_token");

            // const apiUrl = 'https://book-seller-production.up.railway.app/api/v1/admin/all-users';
            const apiUrl = 'http://localhost:8080/api/v1/admin/all-users'; //localhost


            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.customers = (response.data);
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing Users:', error);
                });
        },

        async deleteUser(userId) {
            const apiUrl = `http://localhost:8080/api/v1/admin/delete-user/${userId}`

            const token = localStorage.getItem("access_token");

            await axios.delete(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert('User Deleted Successfully')
                        console.log("Token: ", token);
                        this.customers = this.customers.filter(user => user.id !== userId);
                        this.getAllCustomers();
                    } else {
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Deleting book:', error);
                });
        },
    },
    mounted() {
        this.getAllCustomers();
    },
}
</script>