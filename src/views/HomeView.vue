<template>
  <div class="home sm:w-[1170px] m-auto mt-10 p-5">

    <router-link to="car/create" class=" mb-5">
      <button class=" py-3 px-6 bg-blue-200 shadow-md transition-all duration-150 ease-in-out hover:bg-blue-300 hover:shadow-lg mb-5">Sell A Car</button>
    </router-link>
    <div class="flex flex-wrap gap-5">
      <router-link to="" v-for="n in 20" :key="n" class="w-full sm:w-[calc(33%-1rem)] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src="https://placehold.co/600x400/000000/FFF" class="w-[350px] mb-3" alt="">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </router-link>
    </div>
  </div>
  
</template>

<script setup>

</script>
