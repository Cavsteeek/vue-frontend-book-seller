<template>
    <NavBar />
    <router-view></router-view>

    <div class="px-5 py-5">
        <table class="table-fixed border-separate m-auto w-full">
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
                    </tr>
                    <tr class="text-left font-semibold">
                        <td class="">2</td>
                        <td class="">Witchy Woman</td>
                        <td class="">The Eagles</td>
                        <td class=""><button class="border bg-slate-500 text-white rounded-md py-1 px-1">Add To
                                Cart</button></td>
                    </tr>
                    <tr class="text-left font-semibold">
                        <td class="">3</td>
                        <td class="">Shining Star</td>
                        <td class="">Earth, Wind, and Fire</td>
                        <td class=""><button class="border bg-slate-500 text-white rounded-md py-1 px-1">Add To
                                Cart</button></td>
                    </tr>
                </tbody>
            </div>
        </table>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "Books",
    components: {
        NavBar,
    }

}
</script>

