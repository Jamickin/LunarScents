<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const showSideBar = ref(false);
const router = useRouter();

function toggle() {
    showSideBar.value = !showSideBar.value;
}

function closeSidebar() {
    showSideBar.value = false;
}
</script>

<template>
    <img src="../assets/images/MenuIcon.svg" :class="showSideBar ? 'opacity-0 cursor-not-allowed' : ''" class="fixed left-0"
        @click="toggle()">
    <img src="../assets/images/MenuIcon.svg" :class="showSideBar ? '' : 'opacity-0 cursor-not-allowed'"
        class="fixed left-48" @click="toggle()">

    <Transition name="fade">
        <div v-if="showSideBar" :class="showSideBar ? 'left-0' : '-left-[192px]'"
            class="fixed top-0 h-screen w-48 p-12 shadow-2xl backdrop-blur-sm text-neutral-100 text-center sideBar z-10">
            <div class="h-full grid grid-rows-3 justify-center place-items-center">
                <RouterLink to="/" class="menu-item hover:shadow-2xl" @click="closeSidebar">HOME</RouterLink>
                <RouterLink to="/about" class="menu-item hover:shadow-2xl" @click="closeSidebar">ABOUT US</RouterLink>
                <RouterLink to="/store" class="menu-item hover:shadow-2xl" @click="closeSidebar">STORE</RouterLink>
                <RouterLink to="/checkout" class="menu-item hover:shadow-2xl" @click="closeSidebar">CHECKOUT</RouterLink>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
img {
    width: 2.7rem;
    height: auto;
    cursor: pointer;
    transition: 600ms;
}

.menu-item {
    transition: 400ms;
    padding: 4rem;
    width: 12rem;
    /* @apply bg-red-100; */
}

.menu-item:hover {
    @apply text-TertiaryHL;
    border-radius: 2rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
