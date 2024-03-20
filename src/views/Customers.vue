<template>
    <AdminNavbar />
    <router-view></router-view>

    <h2 class="p-5 text-lg font-semibold text-center text-gray-900 bg-white">
        CUSTOMERS
    </h2>
    <div class="relative w-screen overflow-x-auto shadow-md sm:rounded-lg">
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
            <tbody>
                <tr v-for="(user, index) in customers" :key="user.id" class="odd:bg-white even:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ index + 1 }}
                    </th>
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ user.username }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.firstname }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.lastname }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.email }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                        <button @click="deleteBook(user.id)"
                            class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
export default {
    name: "Customers",
    components: { AdminNavbar },

    data() {
        return {
            customers: [],
        };
    },

    methods: {
        async getAllCustomers() {
            const token = localStorage.getItem("access_token");

            const apiUrl = 'http://localhost:8080/api/v1/admin/all-users';

            await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.customers = (response.data);
                        console.log(this.customers);
                        console.log("Token: ", token);
                    } else {
                        /* alert(`you must be signed in to view books...confirm you are signed in`) */
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    console.error('Error Fecthing Users:', error);
                });
        },
    },
    mounted() {
        this.getAllCustomers();
    },
}
</script>