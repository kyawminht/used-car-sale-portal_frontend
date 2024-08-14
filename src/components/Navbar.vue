<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 sm:w-[1170px] m-auto">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Used Car Sale Portal</span>
      </router-link>
      <button @click="toggleMenu" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div :class="menuOpen ? 'block' : 'hidden'" class="w-full md:block md:w-auto">
        <ul class="flex flex-col md:flex-row md:space-x-8">
          <li><router-link to="/" class="block py-2 px-3 text-black rounded dark:text-white">Home</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/about" class="block py-2 px-3 text-gray-900 rounded dark:text-white">About</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/auth/login" class="block py-2 px-3 text-gray-900 rounded dark:text-white">Login</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/auth/register" class="block py-2 px-3 text-gray-900 rounded dark:text-white">Register</router-link></li>
          <li v-if="isLoggedIn"><a href="#" @click="logout" class="block py-2 px-3 text-gray-900 rounded dark:text-white">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composable/useAuth';

const { isLoggedIn, logout } = useAuth();

console.log("logged in",isLoggedIn.value)
const menuOpen = ref(false);

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
.router-link-exact-active{
  color: blue;
  
}
</style>