<template>
    <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'>
    <div id="body" class="bg-slate-400 flex h-screen">
        <div class="border-4 border-slate-500 w-min h-min pt-10 pb-4 py-4 px-4 m-auto rounded-2xl bg-white"
            style="margin-top: 145px;">
            <form action="" class="">
                <!-- Sign Up -->
                <h2 class="text-3xl font-semibold text-left mt-2 mb-2 font-sans">Sign Up
                </h2>


                <!-- Register ...... -->
                <h2 class="text-md font-semibold font-sans text-left mt-2 ">Register To Get Started!
                </h2>


                <!-- FName and LName -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 29px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- First name -->
                    <input id="input" class="mt-6 font-sans px-2 h-7 text-left" type="text" placeholder="Firstname"
                        style="">

                    &NonBreakingSpace;
                    &NonBreakingSpace;

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 29px;">
                        <path
                            d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <!-- Last name -->
                    <input id="input" class="mt-6 font-sans px-2 h-7 text-left focus:border-2 border-black" type="text"
                        placeholder="Lastname" style="">

                </div>
                <br>

                <!-- <label for="username" class="text-base mt-5">Username:</label><br /> -->
                <!-- Email -->
                <div class="flex">
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


                <!-- Phone Number and Password -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-5 mt-1">
                        <path fill-rule="evenodd"
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Phone Number -->
                    <input id="input" class=" font-sans px-2 h-7 text-left"
                        type="text focus:border-2 border-black rounded-md" placeholder="Phone Number">

                    &NonBreakingSpace;
                    &NonBreakingSpace;

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"
                        style="margin-top: 4px;">
                        <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Password -->
                    <input id="input" class="font-sans px-2 h-7 text-left focus:" type="password" placeholder="Password">
                </div>

                <!-- Sign Up Button -->
                <button
                    class="ml-30 text-md border border-black rounded-md tracking-wider px-1 py-1 bg-black mt-2 text-white font-bold"
                    id="signupButton"><a href="/dashboard" target="_blank">SIGN
                        UP </a>
                </button> <br><br>


                <!-- Forgot Password -->
                <button class="font-semibold font-sans">
                    <a class="hover:border border-black rounded-md hover:px-2 py-2 hover:bg-black hover:text-white"
                        href="/forgotpassword" target="_blank">Forgot
                        Password?</a></button> <br><br>

                <!-- Login -->
                <button class="font-semibold font-sans ">Already have an
                    account? <a class="text-slate-500 font-3xl font-bold" href="/login" target="_blank">Login</a></button>
                <br><br>

            </form>
        </div>
    </div>
</template>
    
<script>


export default {
    name: "SignUp",


}
</script>

<style scoped>
#emailInput {
    width: 374px;
}


#signupButton {
    width: 397px;
}

#body {}

#input {
    width: 168px;
}
</style>
<!-- dribble -->