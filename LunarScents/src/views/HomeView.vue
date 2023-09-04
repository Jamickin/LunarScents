<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="grid grid-cols-2 h-screen -mt-12">
        <div class="flex justify-items-center place-items-center relative">
            <img src="../assets/images/Logo.png" class="w-full -z-20">
        </div>
        <div class="grid justify-items-center place-items-center relative">
            <img src="../assets/images/wood.jpeg" class="absolute top-0 h-full opacity-[66%] rounded-2xl z-0">
            <p class="z-10 font-bold text-2xl">This is description</p>
        </div>
    </div>
    <div class="text-center z-30 mt-12">
        <RouterLink to="/store" class="text-center bg-Secondary p-8 rounded-2xl hover:shadow-2xl z-30">STORE</RouterLink>
    </div>
</template>

<style scoped></style>
