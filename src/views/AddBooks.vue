<template>
    <AdminNavbar />
    <router-view></router-view>
    <div class="px-5 py-5">
        <form class="text-center mx-auto">
            <div class="mb-5">
                <label for="book-name" class="mb-2 text-sm font-medium text-gray-900 ">Name</label><br>
                <input type="text" name="Book Name" id="book-name">
            </div>

            <div class="mb-5">
                <label for="book-price" class="mb-2 text-sm font-medium text-gray-900">Price</label><br>
                <input type="number" name="Book Price" id="book-price" class="focus:ring-white4">
            </div>

            <div class="mb-5 text-center">
                <button type="submit" class="border border-black rounded-lg px-1 py-1">Add Book</button>
            </div>
        </form>
    </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
export default {
    name: "AddBooks",
    components: { AdminNavbar }
}
</script>