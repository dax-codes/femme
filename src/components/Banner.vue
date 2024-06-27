<template>
  <div class="w-full lg:flex hidden flex-wrap items-start justify-center gap-3">
    <!-- First image with fixed height -->
    <img
      class="image w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden object-cover"
      :style="{ height: '370.3px' }"
      alt="Image"
      src="/image/bumi1.jpg"
    />
    <!-- Second block with two images on larger screens, single column on smaller screens -->
    <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 gap-3">
      <img
        class="image w-full rounded-lg overflow-hidden object-cover"
        :style="{ height: '151px' }"
        alt="Image"
        src="/image/bigV1.jpg"
      />
      <img
        class="image w-full rounded-lg overflow-hidden object-cover"
        :style="{ height: '250px' }"
        alt="Image"
        src="/image/swvgg1.jpg"
      />
    </div>
    <!-- Third block with two images on larger screens, single column on smaller screens -->
    <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 gap-3">
      <img
        class="image w-full rounded-lg overflow-hidden object-cover"
        :style="{ height: '245.7px' }"
        alt="Image"
        src="/image/swvgg2.jpg"
      />
      <img
        class="image w-full rounded-lg overflow-hidden object-cover"
        :style="{ height: '156.1px' }"
        alt="Image"
        src="/image/kattyka1.jpg"
      />
    </div>
    <!-- Fourth image with fixed height -->
    <img
      class="image w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden object-cover"
      :style="{ height: '327.9px' }"
      alt="Image"
      src="/image/kattyka1.jpg"
    />
    <!-- Fifth block with two images on larger screens, single column on smaller screens -->
    <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 gap-3">
      <img
        class="image w-full rounded-lg overflow-hidden object-cover"
        :style="{ height: '201.9px' }"
        alt="Image"
        src="/image/bigV3.jpg"
      />
      <img
        class="image w-full rounded-lg overflow-hidden object-cover"
        :style="{ height: '201.9px' }"
        alt="Image"
        src="/image/vivian1.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
.image {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1023px) {
  .flex {
    flex-direction: column;
  }
}
</style>
