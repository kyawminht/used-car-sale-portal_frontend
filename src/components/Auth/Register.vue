<template>
	<div class="p-7 rounded-[20px]">
	  <form @submit.prevent="register" class="space-y-3"> <
		<h2 class="font-[700] text-[30px]">Register your account</h2>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="username">User Name</label>
		  <input
			id="username" 
			type="text"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write your username"
			v-model="user.name"/>
			<span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name[0] }}</span>
		</div>
  
		<div>
		  <label class="text-[20px]" for="email">Email</label>
		  <input
			id="email" 
			type="email"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write your email address"
			v-model="user.email"/>
			<span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email[0] }}</span>
		</div>
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="password">Password</label>
		  <input
			id="password" 
			type="password"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write your password"
			v-model="user.password"/>
			<span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password[0] }}</span>
		</div>
  
		<div class="mt-5 relative">
		  <label class="text-[20px]" for="confirm_password">Confirm Password</label>
		  <input
			id="confirm_password" 
			type="password"
			class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
			placeholder="Please write your confirm password"
			v-model="user.password_confirmation"/>
			<span v-if="errors.password_confirmation" class="text-red-500 text-sm">{{ errors.password_confirmation[0] }}</span>
		</div>
  
		<div class="flex justify-start items-center gap-5">
		  <input type="checkbox" v-model="agreement"> 
		  <span class="text-[16px]">
			I agree to
			<span class="text-black cursor-pointer">User Agreement</span>
			and
			<span class="text-black cursor-pointer">Privacy Policy</span>.
		  </span>
		</div>
  
		<div class="text-center mt-6">
		  <button
			type="submit"
			class="bg-blue-200 px-7 py-2"
		  >
			Register
		  </button>
		</div>
	  </form>
	  <!-- <div class="mt-4">
		<h2 class="text-[--gray-2] text-[18px] text-center mx-2">
		  Or Register Using
		</h2>
  
		<div class="flex w-full justify-center items-center gap-9 mt-4">
		  <div
			class="w-[50px] h-[50px] shadow-lg flex justify-center items-center rounded-lg"
			@click="login"
		  >
			<img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
		  </div>
  
		  <div
			class="w-[50px] h-[50px] shadow-lg flex justify-center items-center rounded-lg"
			@click="facebookLogin"
		  >
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdoxHpvBb2ovxPTGhqtTBdOwGWvZGeJKi7FnJNTdqHSOoxkqfDctqzX29jCKb8Nep7S0o&usqp=CAU" alt="" />
		  </div>
		</div>
	  </div> -->
  
	  <div class="text-[18px] text-center mt-4">
		Already have an account?
		<NuxtLink
		  to="/auth/login"
		  class="text-red-400 cursor-pointer"
		>Login</NuxtLink>
		here
	  </div>
	  <Footer></Footer>
	</div>
  </template>
  
  <script setup>

  import instance from '@/axios';
	import Footer from '@/views/Footer.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const user = ref({
	name: '',
	email: '',
	password: '',
	password_confirmation: ''
  });
  
  const errors = ref([]);
  const agreement = ref(false); 
  const router = useRouter(); 
  
  const register = async () => {
	try {
	  const formData = new FormData();
	  formData.append('name', user.value.name);
	  formData.append('email', user.value.email);
	  formData.append('password', user.value.password);
	  formData.append('password_confirmation', user.value.password_confirmation);
  
	  const response = await instance.post('/register', formData);
	  console.log(response);
	  router.push('/');
	} catch (error) {
	  if (error.response && error.response.status === 422) {
		errors.value = error.response.data.errors;
	  } else {
		console.error(error);
	  }
	}
  };
  
  
  const login = () => {
	console.log('Google login');
  };
  
  const facebookLogin = () => {
	console.log('Facebook login');
  };
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  