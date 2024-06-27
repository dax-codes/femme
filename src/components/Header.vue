<template>
  <div
    class="bg-gray-500 w-full gap-4 lg:gap-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between py-4 lg:py-5 md:px-10 px-2 text-whitesmoke font-secular-one shadow-lg"
  >
    <div class="h-[41.2px] flex-shrink-0 relative">
      <img class="" alt="" src="/femme.png" />
    </div>
    <div
      class=" lg:pr-10 pr-0   lg:flex flex-row  items-center justify-center  gap-4 lg:gap-10"
    >
      <!-- <b
        class="text-crimson-300 cursor-pointer text-sm lg:text-lg"
        @click="onHomeTextClick"
      >
        Home
      </b>
      <b
        class="text-crimson-300 cursor-pointer text-sm lg:text-lg"
        @click="onGalleryTextClick"
      >
        Girls
      </b> -->
      <!-- <b
        class="text-crimson-300 cursor-pointer text-sm lg:text-lg"
        @click="onTopVideoTextClick"
      >
        Top Video
      </b> -->
      <b
        class="text-crimson-300 cursor-pointer  text-sm lg:text-lg"
        @click="onGirlsTextClick"
      >
        <!-- Girls -->
      </b>
      <!-- Uncomment if needed -->
      <!-- <b class="text-crimson-300 cursor-pointer text-sm lg:text-lg" @click="onContactUsClick">
        Contact Us
      </b> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const {
  onHomeTextClick,
  onGalleryTextClick,
  onTopVideoTextClick,
  onGirlsTextClick,
} = defineProps<{
  onHomeTextClick: () => void;
  onGalleryTextClick: () => void;
  onTopVideoTextClick: () => void;
  onGirlsTextClick: () => void;
}>();
</script>

<style scoped>
/* Shadow for the container */
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive typography */
@media (min-width: 1024px) {
  .text-lg {
    font-size: 1.125rem;
  }
}

.text-sm {
  font-size: 0.875rem;
}

.text-2xl {
  font-size: 1.5rem;
}
</style>
