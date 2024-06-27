<template>
  <footer class="bg-[#161616] text-whitesmoke py-10 px-4 lg:px-10">
    <div class="max-w-screen-xl mx-auto">
      <!-- Info Section -->
      <div class="text-center text-white mb-8">
        Get the latest info on hot new girls in their first porn videos, unique
        promotions, upcoming scenes, and more!
      </div>

      <!-- Email Subscription Section -->
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8"
      >
        <b class="cursor-pointer text-white">Email</b>
        <input
          type="email"
          placeholder="Enter your email"
          class="w-[90%] lg:w-64 h-10 px-4 py-2 rounded border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-gray-400"
        />
        <button
          class="bg-crimson-200 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-800 transition-colors duration-200"
        >
          Submit
        </button>
      </div>

      <!-- Navigation Links Section -->
      <div class="text-center mb-8">
        <nav class="flex flex-wrap justify-center gap-4 text-lg text-white">
          <b class="cursor-pointer hover:text-gray-300">Home</b>
          <b class="cursor-pointer hover:text-gray-300">Girls</b>
          <b class="cursor-pointer hover:text-gray-300">Contact Us</b>
          <b class="cursor-pointer hover:text-gray-300">Terms & Conditions</b>
          <b class="cursor-pointer hover:text-gray-300">Privacy Policy</b>
        </nav>
      </div>

      <!-- Legal Notice Section -->
      <div class="text-center text-lg font-marmelad text-white mb-8">
        <p class="mb-4">
          Our Commitment to Privacy At FemmeFling, your privacy is our top
          priority. We ensure all interactions are handled with the utmost
          confidentiality and discretion. Trust us to provide a secure and
          luxurious experience.
        </p>
        <p>
          Subscribe to Our Newsletter Stay updated with our latest offerings,
          exclusive events, and special promotions.
        </p>
      </div>

      <!-- Copyright Notice Section -->
      <div class="text-center text-sm font-inter text-white mb-8 relative">
        <div
          class="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 border-t border-white"
        ></div>
        ©️ 2024 FemmeFling. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional script needed for this footer component
</script>

<style scoped>
footer a {
  color: #ffffff;
  transition: color 0.3s;
}

footer a:hover {
  color: #f5a623;
}

footer nav b:hover {
  color: #f5a623;
}

footer input::placeholder {
  color: #d1d5db;
}
</style>
