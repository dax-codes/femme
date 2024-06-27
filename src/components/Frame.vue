<template>
  <div
    class="w-[279px] relative rounded-lg h-[322.2px] overflow-hidden shrink-0 text-center text-7xl-7 text-white font-nirmala-ui"
  >
    <img
      class="absolute top-[1px] left-[-0.5px] rounded-3xs w-[279px] h-[321px] object-cover"
      alt=""
      :src="rectangle4355"
    />
    <div
      class="absolute bottom-[0.2px] left-[calc(50%_-_142.5px)] bg-crimson-200 w-[286px] h-[67px]"
    >
      <div
        class="absolute top-[15px] left-[calc(50%_-_119px)] flex flex-row items-center justify-start gap-[96px]"
      >
        <div class="flex flex-col items-start justify-start">
          <div class="relative">Natasha</div>
        </div>
        <div class="flex flex-col items-end justify-start text-base-4">
          <div class="flex flex-row items-center justify-start gap-[5.4px]">
            <div class="relative">23</div>
            <img
              class="w-[21.6px] relative h-[18.5px]"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Frame",
    props: {
      rectangle4355: { type: String },
    },
  });
</script>
