<template>
  <div
    class="w-full flex flex-col items-start justify-start text-left text-lg-6 text-gray-100 font-nirmala-ui"
  >
    <div
      class="w-full rounded-[7.46px] bg-darkslategray-200 box-border flex flex-row items-start justify-start py-[14.9px] px-[21.4px] text-mini-9 text-grey-1 border-[0.9px] border-solid border-crimson-500"
    >
      <textarea 
        v-model="message" 
        placeholder="Enter your message" 
        class="w-full bg-transparent border-none outline-none text-white"
        rows="4"
        @input="emitMessage"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const message = ref('');
const emit = defineEmits(['message-sent']);

const emitMessage = () => {
  emit('message-sent', message.value);
};
</script>
