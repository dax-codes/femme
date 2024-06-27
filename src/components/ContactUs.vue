<template lang="">
  <div
    class=" flex flex-col items-center gap-4 mt-[5rem] "
  >
  <div class="relative text-[2rem] lg:text-[3rem] font-black ">Contact Us</div>

  <div
        class="relative w-[80%] leading-9   text-[1.3rem] text-white text-center inline-block"
      >
      We are here to assist you in creating unforgettable moments. Whether you have questions, need assistance with booking, or require a bespoke experience, our dedicated team is ready to provide exceptional service with the utmost discretion.
      </div>
    <div
      class="rounded-[21.91px] mt-[4rem] bg-gray-300 flex flex-row items-start justify-start p-[43.8px] box-border text-[30px] font-marmelad"
    >
      <div
        class="lg:w-[50‰] flex  flex-col items-center justify-start gap-[18.6px]"
      >
        <div class="">
          <div class="relative text-[2rem] lg:text-[3rem] font-black  text-white">Request A Girl</div>
        </div>
        <div
          class="flex flex-col items-center justify-start text-center text-[16.8px] text-white font-nirmala-ui"
        >
          <div
            class="flex flex-col items-center justify-start gap-[39px] z-[0]"
          >
            <div
              class=" w-full gap-[18.6px]"
            >
              <SelectorInput yourName="Your Name" />
            
            </div>
            <div class="flex flex-col items-start justify-start">
              <div
                class="w-[373px] rounded-[7.58px] bg-crimson-200 h-[53.1px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[12.3px] px-[18.1px] box-border"
              >
                <div class="relative">Massage on whatsapp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SelectorInput from "../components/SelectorInput.vue";
</script>
<style lang=""></style>
