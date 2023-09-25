<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex flex-col">
     <div
        class="flex h-screen md:px-36 -mt-12 justify-center place-items-center md:bg-cover bg-contain homepic rounded-b-2xl">
        <p class="md:text-white md:pt-0 pt-12 text-center font-extrabold text-4xl text-black w-full">Ever wondered if there
            is
            the perfect store for all
            your
            herbal and
            homeopathic
            needs? You've
            arrived at your destination</p>
    </div> 
    <div class="grid sm:grid-cols-2 justify-items-center place-items-center md:py-16 h-[600px]">
        <div class="logo w-full h-full"></div>
        <p class="text-center font-bold text-slate-600 px-24 text-2xl">We are the one-stop for all of your
            holistic
            needs! Click
            on
            the shop button
            below to
            get started!
        <div class="text-center z-30 my-16">
            <RouterLink to="/store"
                class="text-center font-bold bg-Secondary p-8 transition-all rounded-2xl hover:opacity-95 hover:shadow-2xl z-30">
                STORE
            </RouterLink>
        </div>
        </p>
    </div>
    </div>
</template>

<style scoped>
.homepic {
    background-image: url('../assets/images/All.jpg');
    background-repeat: no-repeat;
}

.logo {
    background-image: url("../assets/images/Logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
