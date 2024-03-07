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
                <router-link to="/orders"
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
    <div class="px-5 py-5">
        <table class="table-fixed border-separate m-auto w-screen">
            <div class="">
                <thead>
                    <tr class="text-left px-2 py-2">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </div>
            <div class="bg-slate-300">
                <tbody>
                    <tr class="text-left font-semibold">
                        <td class="">1</td>
                        <td class="">In Every Mirror She's Black</td>
                        <td class="">Adewale.O.O</td>
                        <td class=""><button class="border bg-slate-500 text-white rounded-md py-1 px-1">Add To
                                Cart</button></td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                                    clip-rule="evenodd" />
                            </svg></td>


                    </tr>
                    <tr class="text-left font-semibold">
                        <td class="">2</td>
                        <td class="">Witchy Woman</td>
                        <td class="">The Eagles</td>
                        <td class=""><button class="border bg-slate-500 text-white rounded-md py-1 px-1">Add To
                                Cart</button></td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                                    clip-rule="evenodd" />
                            </svg></td>
                    </tr>
                    <tr class="text-left font-semibold">
                        <td class="">3</td>
                        <td class="">Shining Star</td>
                        <td class="">Earth, Wind, and Fire</td>
                        <td class=""><button class="border bg-slate-500 text-white rounded-md py-1 px-1">Add To
                                Cart</button></td>
                        <td class="w-3 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red"
                                class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                                    clip-rule="evenodd" />
                            </svg></td>
                    </tr>
                </tbody>
            </div>
        </table>
    </div>
</template>

<script>
export default {
    name: "AddBooks"
}
</script>