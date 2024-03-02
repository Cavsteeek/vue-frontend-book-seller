<template>
    <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'>
    <div id="body" class="bg-slate-400 flex h-screen">
        <div class="border-4 border-slate-500 w-min h-min pt-10 pb-4 py-4 px-4 m-auto rounded-2xl bg-white"
            style="margin-top: 145px;">
            <form action="" class="">
                <!-- Forgot Password -->
                <h2 class="text-3xl font-semibold text-left mb-2 font-sans">Forgot Password
                </h2>


                <!-- Message -->
                <h2 class="text-md font-semibold font-sans text-left mt-2 mb-2">Email will be sent to confirm your password
                    change
                </h2>


                <!-- Email -->
                <div class="flex mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mt-1">
                        <path
                            d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path
                            d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                    <!-- Email -->
                    <input class=" font-sans px-2 h-7 text-left text-wider focus:border-2 border-black" type="email"
                        id="emailInput" placeholder="Email" style="">
                </div>
                <br>


                <!-- Password -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 4px;">
                        <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Password -->
                    <input id="input" class="font-sans px-2 h-7 text-left focus:" type="password" placeholder="Password">
                </div>


                <!-- Submit Button -->
                <button
                    class="ml-30 text-md border border-black rounded-md tracking-wider px-1 py-1 bg-black mt-4 text-white font-bold"
                    id="submitButton"><a href="/login">SUBMIT</a>
                </button> <br><br>

                <!-- Login -->
                <button class="font-semibold font-sans "><a class="text-slate-500 font-3xl font-bold" href="/login">Back to
                        Login?</a></button>
                <br><br>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ForgotPassword"
}
</script>
    
<style scoped>
#emailInput {
    width: 374px;
}


#submitButton {
    width: 397px;
}

#input {
    width: 374px;
}
</style>
