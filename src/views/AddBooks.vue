<template>
    <div class="px-5 py-5">
        <!-- <h4 class="mb-5">dashboard</h4> -->
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