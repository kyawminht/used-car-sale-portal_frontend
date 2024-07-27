<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Registered Users</h1>
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="py-2 px-4 border-b">{{ user.name }}</td>
            <td class="py-2 px-4 border-b">{{ user.email }}</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:underline">Edit</button>
              <button class="text-red-500 hover:underline ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from '../../axios';
  
  const users = ref([]);
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users');
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
  