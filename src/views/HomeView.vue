<template>
  <!--<div
    class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="../assets/logo.png" alt="" />
     <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p class="text-slate-500 font-medium">
          Product Engineer
        </p>
      </div>
      <button
        class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div> -->


  <!--  <div class="py-2 px-2 bg-white rounded-sm shadow-md space-y-2 flex items-center space-y-0 space-x-6">
    <img class="block mx-auto h-24 rounded-full mx-0 shrink-0" src="../assets/logo.png" alt="" />
    <div class="home">
      <h2 class="text-2xl font-semibold mr-3 ml-2">Cavsteek's</h2>
    </div>

    <div class="flex space-x-2 text-center pt-4 pl-2">
      <a href="/login"
        class="px-4 py-2 text-sm text-blue-600 font-semibold rounded-lg border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent ">Login</a>
      <a href="/signup"
        class="px-4 py-2 text-sm text-blue-600 font-semibold rounded-lg border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent ">Sign
        Up</a>
      <a href="/forgotpassword"
        class="px-4 py-2 text-sm text-blue-600 font-semibold rounded-lg border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent ">Forgot
        Password</a>
    </div>
  </div> -->


  <div class="home">
    <h2 class="text-2xl font-semibold m-10">Cavsteek's</h2>
  </div>
  <div class="flex space-x-2 ml-16">
    <a href="/login">Login</a>
    <a href="/signup">Sign Up</a>
    <a href="/forgotpassword">Forgot Password</a>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

