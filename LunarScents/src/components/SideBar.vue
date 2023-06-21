<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router"

const showSideBar = ref(false)

function toggle() {
    showSideBar.value = !showSideBar.value;
}
</script>

<template>
    <div class="fixed hover:cursor-pointer hover:scale-110 h-10 w-10 transition"
        :class="showSideBar ? 'left-48' : 'left-0'">
        <img src="../assets/images/MenuIcon.svg" @click="toggle()" />
    </div>

    <Transition name="fade">
        <div v-if="showSideBar" :class="showSideBar ? 'left-0' : '-left-[192px]'"
            class="fixed top-0 h-screen w-48 p-12 shadow-2xl backdrop-blur-sm text-neutral-100 text-center sideBar">
            <div class="h-full grid grid-rows-3 justify-center place-items-center">
                <RouterLink to="/home" class="menu-item hover:shadow-2xl">HOME</RouterLink>
                <RouterLink to="/about" class="menu-item hover:shadow-2xl">ABOUT US</RouterLink>
                <RouterLink to="/store" class="menu-item hover:shadow-2xl">STORE</RouterLink>
                <RouterLink to="checkout" class="menu-item hover:shadow-2xl">CHECKOUT</RouterLink>
            </div>
        </div>
    </Transition>
</template> 

<style scoped>
.menu-item {
    transition: 400ms;
    padding: 4rem;
    width: 12rem
}

.menu-item:hover {
    color: black;
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
