<template>
    <div class="admin-layout m-auto sm:w-[1170px]">
      <nav class="bg-gray-800 text-white p-4">
        <ul class="flex space-x-4">
          <li><router-link to="/admin/users" class="hover:underline">Users</router-link></li>
          <li><router-link to="/admin/cars" class="hover:underline">Cars</router-link></li>
        </ul>
      </nav>
      <div class="p-4">
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .admin-layout nav {
    background-color: #2d3748;
  }
  </style>
  