<template>
    <div class="review-card bg-gray-200  text-white">
      <div class="review-content">
        <div class="mb-2">
          <span class="font-bold text-[1.3rem] text-white">{{ reviewer }}</span>
          <span class="text-sm text-white">, {{ location }}</span>
        </div>
        <div class="text-[1.3rem] text-white">
          {{ content }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    reviewer: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .review-card {
    border: 2px solid #ff5252; /* Red border */
    border-radius: 10px;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }
  
  .review-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid transparent;
    border-radius: 12px;
    opacity: 0;
    animation: glowing-border 2s infinite alternate;
  }
  
  @keyframes glowing-border {
    0% {
      border-color: transparent;
      box-shadow: 0 0 10px 0 #ff5252;
    }
    100% {
      border-color: #ff5252;
      box-shadow: 0 0 20px 10px rgba(255, 82, 82, 0);
    }
  }
  
  .review-card:hover::before {
    opacity: 1;
  }
  
  .review-content {
    position: relative;
    z-index: 1;
  }
  
  .review-card .font-bold {
    font-weight: 700;
  }
  
  .review-card .text-base {
    font-size: 16px;
  }
  
  .review-card .text-sm {
    font-size: 12px;
    opacity: 0.8;
  }
  
  </style>
  