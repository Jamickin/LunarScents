<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="fixed top-0 left-0 h-12 w-full grid grid-cols-4 justify-center place-items-center z-50">
        <router-link to="/" class="menu-item" @click="closeSidebar">
            <p>HOME</p>
        </router-link>
        <router-link to="/about" class="menu-item" @click="closeSidebar">
            <p>ABOUT US</p>
        </router-link>
        <router-link to="/store" class="menu-item" @click="closeSidebar">
            <p>STORE</p>
        </router-link>
        <router-link to="/checkout" class="menu-item" @click="closeSidebar">
            <p>CHECKOUT</p>
        </router-link>
    </div>
</template>

<style scoped>
img {
    @apply w-[2.7rem] cursor-pointer transition-all duration-[600ms];
}

.menu-item {
    @apply text-slate-600 w-48 flex place-items-center justify-center text-center transition-all duration-300 h-full font-bold text-lg;
}

.menu-item:hover {
    @apply text-green-800 shadow-2xl rounded-2xl;
}

.menu-item:hover p {
    @apply drop-shadow-lg
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

p {
    @apply w-full
}
</style>
