<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router"

const showSideBar = ref(false)

function toggle() {
    // document.getElementById("button").classList.toggle("left-48");
    // document.getElementById("button").classList.toggle("rotate-180");
    // document.getElementById("head").classList.toggle("hidden")
    showSideBar.value = !showSideBar.value;
    sayHello()
}

function sayHello() {
    console.log("hello")
}
</script>

<template>
    <div id="button" class="fixed left-0 hover:cursor-pointer hover:scale-110 h-10 w-10">
        <img src="../assets/images/MenuIcon.svg" id="button" @click="toggle()" />
    </div>

    <div id="head" v-if="showSideBar" :class="showSideBar ? 'left-0' : '-left-[192px]'"
        class="fixed top-0 h-screen w-48 p-12 shadow-2xl backdrop-blur-sm text-neutral-100 text-center">
        <div class="h-full grid grid-rows-3 justify-center place-items-center">
            <div id="button" class="fixed left-0 hover:cursor-pointer hover:scale-110 h-10 w-10">
                <img src="../assets/images/MenuIcon.svg" id="button" @click="toggle()" />
            </div>
            <RouterLink to="/home" class="menu-item hover:shadow-2xl">HOME</RouterLink>
            <RouterLink to="/about" class="menu-item hover:shadow-2xl">ABOUT US</RouterLink>
            <RouterLink to="/store" class="menu-item hover:shadow-2xl">STORE</RouterLink>
        </div>
    </div>
</template> 

<style scoped>
.menu-item {
    transition: 400ms;
    padding: 4rem;
}

.menu-item:hover {
    color: black;
    border-radius: 2rem;
}
</style>
