<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="flex flex-col">
     <div
        class="flex h-screen -mt-12 justify-center place-items-center bg-cover homepic rounded-b-2xl">
        <p class="text-white text-center font-extrabold text-4xl w-full">Have you ever wondered if there
            is
            a store for all
            your
            homeopathic
            needs? <br> <br> You've
            arrived at your destination:</p>
    </div> 
    <div class="grid justify-items-center place-items-center h-screen mt-36">
        <div class="logo w-full h-full"></div>
        <p class="text-center font-bold text-slate-600 md:px-24 px-12 text-2xl">We are the one-stop for all of your
            holistic
            needs! Click
            on
            the shop button
            below to
            get started!
        <div class="text-center z-30 my-16">
            <RouterLink to="/store"
                class="text-center text-white hover:bg-TertiaryHL font-bold bg-gray-500 p-8 transition-all rounded-2xl hover:opacity-95 hover:shadow-2xl z-30">
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
