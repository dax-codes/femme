<template>
  <div class="max-w-screen-xl mx-auto  px-4 lg:px-10">
    <!-- Section 1: Check out our Girls -->
    <div class="flex flex-col items-center mb-3 lg:mb-10">
      <h2 class="text-[2rem] lg:text-[3rem] font-black   text-center">
        Meet Our Stunning Selection
      </h2>
      <p class=" leading-9 lg:text-[1.3rem] text-center text-white">
        Explore our captivating catalog of companions who embody elegance and charm. Each profile is meticulously curated to showcase not only beauty but also personality and sophistication. Whether you're seeking engaging conversation, a companion for an event, or intimate companionship, our girls are here to fulfill your desires discreetly and exquisitely. Browse now and discover the perfect match for your unique preferences.

      </p>
    </div>

    <!-- Section 2: Frames -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-8 lg:mb-16"
    >
      <Frame1 rectangle4355="/image/oluwatomisin1.jpg" name="Olutosin" age="25" country="Uganda" />
      <Frame1 rectangle4355="/image/alina2.jpg" name="Alina" age="26" country="Portugal" />
      <Frame1 rectangle4355="/image/ayomi3.jpg" name="Ayo" age="25" country="lesotho" />
      <Frame1 rectangle4355="/image/candy3.jpg" name="Candy" age="25" country="South Africa" />
      <Frame1 rectangle4355="/image/christin2.jpg" propPadding="unset" name="Christin" age="29" country="Lesotho" />
      <Frame1 rectangle4355="/image/kelly3.jpg" propPadding="unset" name="Kelly" age="25" country="Algeria" />
      <Frame1 rectangle4355="/image/magold3.jpg" propPadding="unset" name="Gold" age="27" country="Lesotho" />
      <Frame1 rectangle4355="/image/maria1.jpg" propPadding="unset" name="Maria" age="28" country="Venezuela" />
      <Frame1 rectangle4355="/image/merry3.jpg" propPadding="unset" name="Merry" age="32" country="South Africa" />
      <Frame1 rectangle4355="/image/nyyahonnii1.jpg" propPadding="unset"  name="Nyyahon" age="28" country="Ethopia"/>
      <Frame1 rectangle4355="/image/porche2.jpg" propPadding="unset" name="Porche" age="26" country="Tanzania" />
      <Frame1 rectangle4355="/image/puoro2.jpg" propPadding="unset" name="Puoro" age="26" country="Algeria" />
      <Frame1 rectangle4355="/image/so2.jpg" propPadding="unset" name="SO" age="30" country="Rwanda" />
      <Frame1 rectangle4355="/image/zever1.jpg" propPadding="unset" name="Zever" age="30" country="South Africa" />

    </div>
    <!-- Section 4: What we do? -->
    <div
      class="flex flex-col items-center justify-start gap-6 lg:gap-12 mb-8 lg:mb-16"
    >
      <div class="text-center">
        <h2 class=" text-[2rem] lg:text-[3rem] font-black  mb-4">
          What we do?
        </h2>
        <p class="leading-9  lg:text-[1.3rem] text-white">
          At FemmeFling, we specialize in connecting discerning individuals with a handpicked selection of captivating companions. Our exclusive service offers unparalleled elegance and discretion, ensuring every encounter is a luxurious and memorable experience. Whether you're seeking companionship for a social event, business trip, or private getaway, we meticulously match you with companions who embody sophistication and charm. Explore our curated catalog and indulge in bespoke encounters tailored to f
Explore our curated catalog and indulge in bespoke encounters tailored to fulfill your desires with utmost privacy and satisfaction. Elevate your lifestyle with FemmeFling, where luxury meets intimacy.
        </p>
      </div>

      <!-- Image and Text Side-by-Side Container -->
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 w-full"
      >
        <!-- Image Container -->
        <div class="relative h-[506px] lg:w-1/2 w-full">
          <img
            class="h-full w-full object-cover"
            src="/image/oluwatomisin2.jpg"
            alt=""
          />
        </div>

        <!-- Text Container -->
        <div class="flex flex-col items-center justify-center gap-4 lg:w-1/2 w-full">
          <p
            class="text-[2rem] lg:text-[3rem] font-black  lg:leading-[125%]  text-center"
          >
            We connect our ladies to guys that need them for fun
          </p>
        <Button />
         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import Frame1 from "./Frame1.vue";


function onChatContainerClick() {
  window.open("https://wa.me/+18652991020");
}
</script>

<style scoped>
/* Scoped styles */
/* Adjust any additional styles as needed */
</style>
