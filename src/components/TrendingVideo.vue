<template>
  <div
    class="flex flex-col items-center justify-center w-full mb-10 mt-14 gap-8"
  >
    <div
      class="text-center text-[2rem] lg:text-[3rem] font-black  relative  inline-block"
    >
    Tailored Companionship for Every Occasion
    </div>
    <div
      class="w-[90%] lg:w-[70%] text-center leading-9 text-[1.3rem]   text-white inline-block"
    >
    Whether you're seeking a companion for a social event, a business trip, or a private encounter, FemmeFling offers a range of services to suit your needs. Our companions are available for various engagements, ensuring a personalized and enjoyable sexual experience.
    </div>

    <div
      class="relative w-full lg:w-1/2 h-[500px] flex items-center justify-center"
    >
      <button
        @click="prevVideo"
        class="absolute left-0 bg-gray-700 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <transition name="fade" mode="out-in">
        <video
          v-bind:key="videos[currentVideo].id"
          :src="videos[currentVideo].src"
          controls
          autoplay
          @ended="nextVideo"
          class="rounded-lg w-full h-full object-cover"
        ></video>
      </transition>

      <button
        @click="nextVideo"
        class="absolute right-0 bg-gray-700 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const currentVideo = ref(0);
const videos = ref([
  { id: 1, src: "/oluwatosin1.mov" },
  { id: 4, src: "/jamiel.mov" },
  { id: 2, src: "/ayomide1.mov" },
  { id: 3, src: "/oluwatosin2.mov" },
]);

const nextVideo = () => {
  currentVideo.value = (currentVideo.value + 1) % videos.value.length;
};

const prevVideo = () => {
  currentVideo.value =
    (currentVideo.value - 1 + videos.value.length) % videos.value.length;
};

// Watch for changes in currentVideo and trigger autoplay
watchEffect(() => {
  const videoElement = document.querySelector("video");
  if (videoElement) {
    videoElement.play();
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
