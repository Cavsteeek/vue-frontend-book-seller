<template>
  <HomeNavbar />
  <router-view></router-view>
  <div class="home">
    <h2 class="text-2xl font-semibold m-10">Cavsteek's</h2>
  </div>
  <div class="space-x-2">
    <a href="/login">Login</a>
    <a href="/signup">Sign Up</a>
    <a href="/forgotpassword">Forgot Password</a>
  </div>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    HomeNavbar
  }
}
</script>

