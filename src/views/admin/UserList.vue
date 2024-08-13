<template>
  <h1 class="text-2xl font-bold mb-4">Registered Users</h1>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr
         v-for="user in users" :key="user.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
          {{ user.name }}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            {{ user.role == '0'? 'User':'Admin' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   
  
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';

import instance from '../../axios';
  
  const users = ref([]);
  
  const fetchUsers = async () => {
    try {
      const response = await instance.get('/users');
      users.value = response.data.data;
      console.log("alluser",users.value);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };
  

 onMounted(() => {
   fetchUsers(); 
 })
  </script>
  