<template>
	<div
		class=" p-7 rounded-[20px]"
	>
		<form action="" class="space-y-3">
			<h2 class="font-[700] text-[30px]">Register your account</h2>

            <div class="mt-5 relative">
				<label class="text-[20px]" for="">User Name</label>
				<input
					type="text"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write your username"
					
					required
				/>
			</div>

			<div>
				<label class="text-[20px]" for="">Email</label>
				<input
					type="email"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write your email address"
					required
				/>
			</div>
			<div class="mt-5 relative">
				<label class="text-[20px]" for="">Password</label>
				<input
					type="password"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write your password"
					
					required
				/>
				<img
					:src="eyeIcon"
					alt=""
					class="absolute bottom-[12px] right-[8px]"
				/>
			</div>

            <div class="mt-5 relative">
				<label class="text-[20px]" for="">Confirm Password</label>
				<input
					type="password"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write your confirm password"
					
					required
				/>
			</div>

			<div class="flex justify-start items-center gap-5">
				<input type="checkbox">
				<span class="text-[16px]"
					>I agree to
					<span class="text-black cursor-pointer"
						>User Agreement</span
					>
					and
					<span class="text-black cursor-pointer"
						>Privacy Policy</span
					>.</span
				>
			</div>

			<div class="text-center mt-6">
				<button
					type="submit"
					class=" bg-blue-200 px-7 py-2"
					
				>
					Register
				</button>
			</div>
		</form>
		<div class="mt-4">
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
		</div>

		<div class="text-[18px] text-center mt-4">
			Already an account?
			<NuxtLink
				to="/login"
				class="text-red-400 cursor-pointer"
				>Login</NuxtLink
			>
			here
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>