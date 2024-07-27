<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Car Management</h1>
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Make</th>
            <th class="py-2 px-4 border-b">Model</th>
            <th class="py-2 px-4 border-b">Year</th>
            <th class="py-2 px-4 border-b">Price</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in cars" :key="car.id">
            <td class="py-2 px-4 border-b">{{ car.make }}</td>
            <td class="py-2 px-4 border-b">{{ car.model }}</td>
            <td class="py-2 px-4 border-b">{{ car.registration_year }}</td>
            <td class="py-2 px-4 border-b">{{ car.price }}</td>
            <td class="py-2 px-4 border-b">
              <router-link :to="{ name: 'UpdateCar', params: { id: car.id } }" class="text-blue-500 hover:underline">Edit</router-link>
              <button class="text-red-500 hover:underline ml-2" @click="deleteCar(car.id)">Delete</button>
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
      const response = await axios.get('http://127.0.0.1:8000/api/cars');
      cars.value = response.data.data;
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    }
  };
  
  const deleteCar = async (id) => {
    try {
      await axios.delete(`/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error('Failed to delete car:', error);
    }
  };
  
  onMounted(fetchCars);
  </script>
  