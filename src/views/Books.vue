<template>
    <div>
        <h1>Available Books</h1>
    </div>
</template>

<script>
export default {
    name: "Books"
}
</script>

<router-link to="/add-books"
class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">View
Books</router-link>
<router-link to="/orders"
class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> View
Orders</router-link>
<router-link to="" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">View
Users</router-link>