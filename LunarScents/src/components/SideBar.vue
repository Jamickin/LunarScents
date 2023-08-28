<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showSideBar = ref(false);

function toggle() {
    showSideBar.value = !showSideBar.value;
}

function closeSidebar() {
    showSideBar.value = false;
}
</script>

<template>
    <img src="../assets/images/MenuIcon.svg" :class="[showSideBar ? 'opacity-0 cursor-not-allowed' : '', 'fixed left-0']"
        @click="toggle()">
    <img src="../assets/images/MenuIcon.svg" :class="[showSideBar ? '' : 'opacity-0 cursor-not-allowed', 'fixed left-48']"
        @click="toggle()">

    <transition name="fade">
        <div v-if="showSideBar"
            :class="[showSideBar ? 'left-0' : '-left-[192px]', 'fixed top-0 h-screen w-48 shadow-2xl backdrop-blur-sm z-10']">
            <div class="h-full w-48 grid grid-rows-4 justify-center place-items-center">
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
        </div>
    </transition>
</template>

<style scoped>
img {
    @apply w-[2.7rem] cursor-pointer transition-all duration-[600ms];
}

.menu-item {
    @apply w-48 flex place-items-center justify-center text-center transition-all duration-300 h-full font-bold text-lg;
}

.menu-item:hover {
    @apply text-TertiaryHL shadow-2xl rounded-2xl;
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
