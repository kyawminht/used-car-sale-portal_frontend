<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Make</th>
          <th scope="col" class="px-6 py-3">Model</th>
          <th scope="col" class="px-6 py-3">Year</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="car in cars"
          :key="car.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ car.make }}
          </td>
          <td class="px-6 py-4">
            {{ car.model }}
          </td>
          <td class="px-6 py-4">
            {{ car.registration_year }}
          </td>
          <td class="px-6 py-4">
            {{ car.price }}
          </td>
          <td class=" flex justify-center items-center mt-1">
            <router-link :to="`car/update/${car.id}`" class="text-white hover:underline py-3 px-6 bg-gray-400 rounded-md me-2">Edit</router-link>
            <router-link :to="`car/bid/detail/${car.id}`" class="text-white hover:underline py-3 px-6 bg-red-400 rounded-md">Detail</router-link>
            <button class="text-white hover:underline ml-2 py-3 px-6 bg-black rounded-md" @click="deleteCar(car.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from '@/axios';
  import { useRouter } from 'vue-router';
  
  const cars = ref([]);
  const router = useRouter();
  
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/car');
      cars.value = response.data.data;
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    }
  };
  
  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/car/delete/${id}`);
      fetchCars();
      console.log("delete success");
    } catch (error) {
      console.error('Failed to delete car:', error);
    }
  };
  
  onMounted(fetchCars);
  </script>
  