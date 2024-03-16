<template>
    <AdminNavbar />
    <router-view></router-view>
    <div class="container">
        <div class=" mt-9" style="">

            <!-- AddBook -->
            <h2 class="text-3xl font-semibold text-center mb-5 font-sans">Add Book
            </h2>
            <div class="text-center">
                <form @submit.prevent="" class="">

                    <!-- Book Title -->
                    <div class="">
                        <!-- Book Title -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden mt-4" type="text"
                            id="userInput" placeholder="Book Title" v-model="username" required>
                    </div>
                    <br>
                    <!-- Book Author -->
                    <div class="">
                        <!-- Book Author -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden" type="text"
                            id="userInput" placeholder="Book Author" v-model="username" required>
                    </div>
                    <br>
                    <!-- Book Price -->
                    <div class="">
                        <!-- Book Price -->
                        <input class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden" type="text"
                            id="userInput" placeholder="Book Price" v-model="username" required>
                    </div>
                    <br>
                    <!-- Book Description -->
                    <div class="">
                        <!-- Book Description -->
                        <textarea class=" font-sans px-2 py-2 text-left focus:ring-white border-hidden" type="text"
                            id="userInput" placeholder="Book Description" v-model="username"></textarea>
                    </div>

                    <!-- Add Book -->
                    <button
                        class="ml-30 text-md border border-white rounded-md tracking-wider px-2 py-2 bg-gray-900 mt-8 text-white font-bold"
                        id="loginButton">Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
export default {
    name: "AddBooks",
    components: { AdminNavbar }
}
</script>

<style scoped>
#loginButton {
    width: 374px;
}

#userInput {
    width: 374px;
}
</style>