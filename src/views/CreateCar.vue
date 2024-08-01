<template>
	<div class="p-7 rounded-[20px] tablet:mb-9">
	  <form @submit.prevent="submitForm" enctype="multipart/form-data" class="space-y-3">
		<h2 class="font-[700] text-[30px]">Register Your Car</h2>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="car-make">Car Make</label>
		  <input
			id="car-make"
			type="text"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write the car make"
			v-model="car.make"/>
		  <span v-if="errors.make" class="text-red-500 text-sm">{{ errors.make[0] }}</span>
		</div>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="car-model">Car Model</label>
		  <input
			id="car-model"
			type="text"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write the car model"
			v-model="car.model"/>
		  <span v-if="errors.model" class="text-red-500 text-sm">{{ errors.model[0] }}</span>
		</div>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="registration-year">Registration Year</label>
		  <input
			id="registration-year"
			type="number"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write the registration year"
			v-model="car.registration_year" />
		  <span v-if="errors.registration_year" class="text-red-500 text-sm">{{ errors.registration_year[0] }}</span>
		</div>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="price">Price</label>
		  <input
			id="price"
			type="number"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write the price"
			v-model="car.price"/>
		  <span v-if="errors.price" class="text-red-500 text-sm">{{ errors.price[0] }}</span>
		</div>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="description">Description</label>
		  <textarea
			id="description"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write the description"
			v-model="car.description"
		  ></textarea>
		  <span v-if="errors.description" class="text-red-500 text-sm">{{ errors.description[0] }}</span>
		</div>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="file">Upload Image</label>
		  <input
			id="file"
			type="file"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please upload an image"
			@change="handleFileUpload"
			multiple
		  />
		</div>
  
		<div class="text-center mt-6">
		  <button
			type="submit"
			class="bg-blue-200 px-7 py-2 shadow-md hover:transition-all hover:duration-150 hover:bg-blue-300 me-3"
		  >
			Post Car
		  </button>
		  <router-link
			to="/"
			class="bg-white border-2 border-blue-200 px-7 py-2 shadow-md hover:transition-all hover:duration-150"
		  >
			Cancel
		  </router-link>
		</div>
	  </form>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
import instance from '../axios';
  
  const router = useRouter();
  const errors = ref([]);
  
  const car = ref({
	make: '',
	model: '',
	registration_year: '',
	price: '',
	description: '',
	picture_url: [],
  });
  
  const handleFileUpload = (event) => {
	const files = event.target.files;
	car.value.picture_url = Array.from(files);
  };
  
  const submitForm = async () => {
	try {
	  const formData = new FormData();
	  
	  formData.append('make', car.value.make);
	  formData.append('model', car.value.model);
	  formData.append('registration_year', car.value.registration_year);
	  formData.append('price', car.value.price);
	  formData.append('description', car.value.description);
	  if (car.value.picture_url) {
      const file = document.querySelector('#file').files[0];
      formData.append('picture_url', file);
    }
	
	  const response = await instance.post('/car', formData);
	  console.log(response);
  
	  router.push('/');
	} catch (error) {
	  if (error.response && error.response.status === 422) {
		errors.value = error.response.data.errors;
	  } else {
		console.error('Failed to create car:', error);
	  }
	}
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  