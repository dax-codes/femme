<template>
  <div class="relative w-full h-64 rounded-lg overflow-hidden text-center text-white font-nirmala-ui shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
    <!-- Image -->
    <img class="rounded-lg w-full h-full object-cover object-top transition duration-300 ease-in-out transform hover:scale-105" alt="" :src="rectangle4355" />

    <!-- Text Overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center px-4 py-2 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
      <div class="text-xl font-bold mb-2">{{ name }}</div>
      <div class="flex flex-col items-start gap-2">
        <!-- <div>Natasha</div> -->
        <div class="text-sm">Age: {{ age }}</div>
        <div class="text-sm">{{ country }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  rectangle4355: {
    type: String,
    required: true
  },
  name:{
  type:String
  },
  age:{
    type:String
  },
  country:{
    type:String
  }
});
</script>

<style scoped>
/* Scoped styles */
/* Ensure the styles fit within the parent's width */
/* Adjust as per design requirements */

/* Card Container */
.w-full {
  width: 100%;
}

.h-64 {
  height: 16rem;
}

/* Image */
.rounded-lg {
  border-radius: 0.5rem;
}

.object-cover {
  object-fit: cover;
}

/* Text Overlay */
.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.bg-black {
  background-color: #000;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.backdrop-filter {
  backdrop-filter: blur(8px);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.hover\:opacity-100:hover {
  opacity: 1;
}

/* Text Styling */
.text-xl {
  font-size: 1.25rem;
  font-weight: bold;
}

.text-sm {
  font-size: 0.875rem;
}

/* Hover Effects */
.transition {
  transition-property: all;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in-out {
  transition-timing-function: ease-in-out;
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
