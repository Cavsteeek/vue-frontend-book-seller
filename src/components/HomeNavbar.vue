<template>
    <nav class="bg-gray-200 w-screen">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <div class="flex items-center space-x-3">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap">Cavsteek's Librairie</span>
            </div>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 mt-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-[10px]"><router-link
                        to="/login">Login</router-link></button>
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 mt-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-[10px]"><router-link
                        to="/signup">Sign Up</router-link></button>


                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

        </div>
    </nav>
    <hr class="w-screen border-1 border-black">
</template>

<script>
import 'flowbite'
export default {

}
</script>

