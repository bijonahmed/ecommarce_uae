<!-- layouts/splashscreen.vue -->
<template>
    <div class="splash-screen">
      <div class="spinner"></div>
    </div>
  </template>
  
  <style scoped>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff; /* Change to your desired background color */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.3);
    border-top: 4px solid #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  