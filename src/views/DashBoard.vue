<template>
    <nav class="flex items-center justify-between bg-green-500 px-6 py-6 w-screen">
        <div class="flex items-center text-white mr-6">
            <span class="font-semibold text-2xl tracking-tight">Cavsteek's Book Store</span>
        </div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="ml-60 block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="lg:flex-grow mt-1">
                <router-link to="/add-books"
                    class="block text-md mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">View
                    Books</router-link>
                <router-link to="/admin-orders"
                    class="block text-md mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"> View
                    Orders</router-link>
                <router-link to="/all-customers"
                    class="block text-md mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white">View
                    Users</router-link>
            </div>
            <div>
                <button @click="logout"
                    class="flex px-1 px-1 font-semibold border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white lg:mt-0"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 10 0 10 20" fill="currentColor"
                        class="w-5 h-5 mt-1 mb-1 font-bold">
                        <path fill-rule="evenodd"
                            d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: "DashBoard",
    methods: {
        logout() {
            this.$router.push({ path: '/login' });
        }
    }
}
</script>