<template>
	<div
		class=" p-7 rounded-[20px] "
	>
		<form @submit.prevent="login" class="space-y-8">
			<h2 class="font-[700] text-[30px]">Welcome back</h2>
			<div>
				<label class="text-[20px]" for="">Email</label>
				<input
					type="email"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write your email address"
					v-model="user.email"/>
					<span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email[0] }}</span>
			</div>
			<div class="mt-5 relative">
				<label class="text-[20px]" for="">Password</label>
				<input
					type="password"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write your email password"
					v-model="user.password"/>
					<span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password[0] }}</span>
			</div>

			<div class="text-center mt-6">
				<button
					type="submit"
					class=" bg-blue-200 px-7 py-2">
					Login
				</button>
			</div>
		</form>
		<div class="mt-4">
			<h2 class="text-gray text-[18px] text-center mx-2">
				Or Login Using
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
		</div>

		<div class="text-[18px] text-center mt-4">
			Have not Register yet?
			<NuxtLink
				to="/auth/register"
				class="text-blue-500 cursor-pointer"
				>Register</NuxtLink
			>
			here
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref({
  email: '',
  password: '',
});
const errors=ref([]);
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', user.value);
	console.log(response.data.access_token)
    const token = response.data.access_token;

    localStorage.setItem('token', token);

    router.push('/');
  } catch (error) {
	if (error.response && error.response.status === 422) {
		errors.value = error.response.data.errors;
	}
  }
};

</script>

<style lang="scss" scoped>

</style>