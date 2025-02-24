<template>
  <div class="home sm:w-[1170px] m-auto mt-10 p-5">
    <div class="sm:flex-row flex flex-col sm:space-x-10 space-x-0">
      <router-link to="car/create" class="mb-5">
        <button class="py-3 px-6 bg-blue-200 shadow-md transition-all duration-150 ease-in-out hover:bg-blue-300 hover:shadow-lg mb-5">
          Sell A Car
        </button>
      </router-link>
      <div class="search">
        <div class="flex items-center border border-logo border-opacity-75 sm:w-[460px] sm:h-[40px] rounded-sm h-[49px] mb-3 sm:mb-0">
          <input type="text" v-model="searchQuery" @keyup="handleSearch" class="w-full h-full focus:outline-none p-3 bg-white" placeholder="Search by make, model and price" />
          <div class="flex items-center justify-center w-10 h-full border border-black border-opacity-75 bg-blue-200">
            <i class="fa-solid fa-magnifying-glass text-black text-opacity-75"></i>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cars.length" class="flex flex-wrap gap-5">
      <router-link :to="`/detail/${car.id}`" v-for="car in cars" :key="car.id" class="group w-full sm:w-[calc(33%-1rem)] h-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img :src="getImageUrl(car.picture_url)" class="w-[350px] h-[200px] mb-3" alt="">
        <a href="#">
          <h5 class="mb-2 text-[20px] font-[600] tracking-tight text-black dark:text-white">{{ car.make }}</h5>
        </a>
        <p class="group-hover:hidden mb-3 font-[500] text-[18px] text-black dark:text-gray-400">{{ car.model }}</p>
        <p class="group-hover:hidden mb-3 font-[500] text-[18px] text-black dark:text-gray-400">$ {{ car.price }}</p>
        <div>
          <button class="hidden group-hover:block py-3 px-6 bg-blue-200 rounded-md transition-all duration-300 hover:bg-blue-300 hover:shadow-md">See More</button>
        </div>
      </router-link>
    </div>
    <div v-else class=" flex flex-wrap gap-5">
      <div v-for="n in 6" role="status" class="w-full sm:w-[calc(33%-1rem)] h-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow">
        <svg aria-hidden="true" class="inline w-[50px] h-[50px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarStore } from '@/stores/carStore';
import { onMounted, ref, watch } from 'vue';

const searchQuery = ref('');
const carStore = useCarStore();
const cars = ref([]);


const fetchCars = async (query = '') => {
  await carStore.fetchCars(query);
  cars.value = carStore.cars;
  console.log('Fetched cars:', cars.value);
};

const handleSearch = () => {
  fetchCars(searchQuery.value);
};

const getImageUrl = (fileName) => {
  return `https://speedlapx.cloud/storage/app/public/uploads/car/${fileName}`;
};

onMounted(async () => {
  await fetchCars();
});
</script>
