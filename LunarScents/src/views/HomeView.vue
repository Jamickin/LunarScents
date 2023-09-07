<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex h-screen px-36 flex-col -mt-12 justify-center place-items-center homepic rounded-b-2xl">
        <p class="text-center font-extrabold text-4xl text-white w-full">Ever wondered if there is the perfect store for all
            your
            herbal and
            homeopathic
            needs? You've
            arrived at your destination</p>
    </div>
    <div class="grid grid-cols-2 justify-items-center place-items-center py-16 h-[600px]">
        <div class="logo w-full h-full"></div>
        <p class="text-center font-bold text-slate-600 px-24 text-2xl">We are the one-stop for all of your
            holistic-olfactory
            needs! Click
            on
            the shop button
            below to
            get started!
        <div class="text-center z-30 my-16">
            <RouterLink to="/store"
                class="text-center font-bold bg-Secondary p-8 rounded-2xl hover:opacity-95 hover:shadow-2xl z-30">STORE
            </RouterLink>
        </div>
        </p>
    </div>
</template>

<style scoped>
.homepic {
    background-image: url('../assets/images/Box.jpg');
    background-size: cover;
    background-repeat: no-repeat;

}

.logo {
    background-image: url("../assets/images/Logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
