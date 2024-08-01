
  <template>
    <div class="about m-auto max-w-screen-xl">
      <main class="container mx-auto mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 sm:p-0">
            <div>
                <h1 class="text-4xl font-bold text-gray-900">Find Your Dream Car</h1>
                <p class="mt-4 text-gray-600">We offer a wide variety of used cars to suit your needs. Whether you're looking for a budget-friendly option or a high-end luxury car, we have something for everyone.</p>
                <div class="mt-6 flex">
                    <div class="bg-white p-4 rounded-lg shadow-md flex items-center mr-4">
                        <span class="text-2xl font-bold text-gray-800">5+</span>
                        <span class="ml-2 text-gray-600">Years in Business</span>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
                        <span class="text-2xl font-bold text-gray-800">1000+</span>
                        <span class="ml-2 text-gray-600">Happy Customers</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="../assets/car.png" alt="Car" class="">
            </div>
        </div>
    </main>
    <Footer></Footer>
    </div>

</template>

<script setup>
import Footer from './Footer.vue';
</script>

<style lang="scss" scoped>

</style>
