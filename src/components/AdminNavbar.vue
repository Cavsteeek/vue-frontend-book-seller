<script>
import 'flowbite'
export default {
    methods: {
        logout() {
            localStorage.removeItem("access_token")
            this.$router.push({ path: '/login' });
        }
    }
}
</script>

<template>
    <nav class="bg-gray-200 w-screen">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Cavsteek's Book
                Store</span>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" @click="logout"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">Logout</button>

                <button type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg viewBox="0 0 100 80" width="30" height="30" fill="currentColor">
                        <rect width="100" height="15"></rect>
                        <rect y="30" width="100" height="15"></rect>
                        <rect y="60" width="100" height="15"></rect>
                    </svg>
                </button>

            </div>
            <div class="items-center justify-between mr-36 hidden w-full md:flex md:w-auto md:order-1 mt-2">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black">
                    <router-link v-slot="{ isActive }" to="/add-books"
                        :class="['text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent', isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700']">
                        <span :class="{ 'font-bold text-blue-700 text-2xl': isActive }">Add Books</span>
                    </router-link>
                    <router-link v-slot="{ isActive }" to="/all-customers"
                        :class="['text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent', isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700']">
                        <span :class="{ 'font-bold text-blue-700 text-2xl': isActive }">Users</span>
                    </router-link>
                    <router-link v-slot="{ isActive }" to="/order-history"
                        :class="['text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent', isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700']">
                        <span :class="{ 'font-bold text-blue-700 text-2xl': isActive }">Orders</span>
                    </router-link>
                    <router-link v-slot="{ isActive }" to="/all-books"
                        :class="['text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent', isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700']">
                        <span :class="{ 'font-bold text-blue-700 text-2xl': isActive }">View Books</span>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
    <hr class="w-screen border-1 border-black">
</template>