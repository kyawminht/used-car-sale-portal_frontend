<template>
  <div class="p-5">
    <router-link to="/" class="my-5 cursor-pointer bg-blue-200 w-[50px] h-[50px] shadow-md rounded-md flex items-center justify-center">
      <i class="fa-solid fa-arrow-left w-[20px] h-[20px]"></i>
    </router-link>
    <div class="flex items-center justify-center">
      <div v-if="car">
        <div class="bg-white shadow-lg rounded-lg p-6 w-full grid grid-cols-12 gap-5">
          <div class="col-span-12 sm:col-span-8">
            <img :src="getImageUrl(car.picture_url)" class="w-full h-[500px]" alt="">
          </div>
          <div class="col-span-12 sm:col-span-4">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ car.make }} {{ car.model }}</h2>
              <p class="text-gray-700 mb-2">Year: {{ car.registration_year }}</p>
              <p class="text-gray-700 mb-4">Price: ${{ car.price }}</p>
              <p class="text-gray-600">{{ car.description }}</p>
            </div>
            <div class="mt-4">
              <form @submit.prevent="submitBid">
                <input v-model="bidPrice" type="number" step="0.01" placeholder="You can place your bid from here" class="mb-2 p-2 bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black">
                <span v-if="errors.bid_price" class="text-red-500 text-sm">{{ errors.bid_price[0] }}</span>
                <button type="submit" class="py-3 px-6 bg-blue-200 rounded-md transition-all duration-300 hover:bg-blue-300 hover:shadow-md w-full focus:outline-none">Bid</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-else>  
        <div role="status" class="">
          <svg aria-hidden="true" class="inline w-[150px] h-[150px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import axios from '../axios';
  import { onMounted, ref } from 'vue';
  import { useRoute,useRouter } from 'vue-router';
import instance from '../axios';
  
  const route = useRoute();
  const id = route.params.id;
  const car = ref(null); 
  const bidPrice=ref(null);
  const router = useRouter();
  const errors=ref([]);
  const fetchCarById = async () => {
    try {
      const response = await instance.get(`/car/${id}`);
      console.log("Car by ID:", response.data.data);
      car.value = response.data.data; 
    } catch (error) {
      console.error('Failed to fetch car details:', error);
    }
  };
  const getImageUrl=(fileName) =>{
    return `https://speedlapx.cloud/storage/app/public/uploads/car/${fileName}`;
  };

  const submitBid= async()=>{
    try {
      const response= await instance.post('/bid/store',{
        car_id:id,
        bid_price:bidPrice.value,
      });
      console.log("bid succes",response);
      router.push('/');
    } catch (error) {
      if (error.response && error.response.status === 422){
        errors.value=error.response.data.errors;
      }
      console.error("Failed to place bid",error)
    }
  }
  onMounted(() => {
    fetchCarById();
  });
  </script>
  
  <style scoped>
  
  </style>
  