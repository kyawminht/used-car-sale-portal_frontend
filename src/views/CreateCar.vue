<template>
	<div class="p-7 rounded-[20px] tablet:mb-9">
		<form action="" class="space-y-3">
			<h2 class="font-[700] text-[30px]">Register Your Car</h2>

			<div class="mt-5 relative">
				<label class="text-[20px]" for="car-make">Car Make</label>
				<input
					id="car-make"
					type="text"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write the car make"
					required
				/>
			</div>

			<div class="mt-5 relative">
				<label class="text-[20px]" for="car-model">Car Model</label>
				<input
					id="car-model"
					type="text"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write the car model"
					required
				/>
			</div>

			<div class="mt-5 relative">
				<label class="text-[20px]" for="registration-year">Registration Year</label>
				<input
					id="registration-year"
					type="number"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write the registration year"
					required
				/>
			</div>

			<div class="mt-5 relative">
				<label class="text-[20px]" for="price">Price</label>
				<input
					id="price"
					type="number"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write the price"
					required
				/>
			</div>

			<div class="mt-5 relative">
				<label class="text-[20px]" for="description">Description</label>
				<textarea
					id="description"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please write the description"
					required
				></textarea>
			</div>

			<div class="mt-5 relative">
				<label class="text-[20px]" for="file">Upload Image</label>
				<input
					id="file"
					type="file"
					class="bg-transparent border border-black block px-5 py-2 w-full mt-3 placeholder:text-black"
					placeholder="Please upload an image"
					required
				/>
			</div>

			<div class="text-center mt-6">
				<button
					type="submit"
					class="bg-blue-200 px-7 py-2 shadow-md hover:transition-all hover:duration-150 hover:bg-blue-300 me-3"
				>
					Post Car
				</button>
                <router-link to="/"
                
                class="bg-white border-2 broder-blue-200 px-7 py-2 shadow-md hover:transition-all hover:duration-150"
            >
                Cancel
            </router-link>
			</div>
		</form>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
