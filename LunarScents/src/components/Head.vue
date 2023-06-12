<script setup>
import { RouterLink } from "vue-router"


function toggle() {
    document.getElementById("button").classList.toggle("left-48");
    document.getElementById("head").classList.toggle("hidden")
}

</script>
<template>
    <div id="button" class="absolute left-0 hover:cursor-pointer h-10 w-10">
        <img src="../assets/images/MenuIcon.svg" id="button" @click="toggle(event)" />
    </div>

    <div id="head"
        class="hidden fixed top-0 left-0 h-screen w-48 p-12 shadow-2xl backdrop-blur-lg text-neutral-100text-center">
        <div class="h-full grid grid-rows-3 justify-center place-items-center">
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
