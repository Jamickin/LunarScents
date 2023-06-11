<script setup>
import { RouterLink } from "vue-router"
</script>
<template>
    <div class="absolute h-[4.5rem] top-0 left-0 w-full px-6 bg-TertiaryHL shadow-md">
        <div class="h-full grid grid-cols-3 justify-center place-items-center">
            <div class="gridItem flex justify-center text-2xl">
                <h1 class="font-FlyMe">Lunar</h1>
                <h1 class="font-Delicate">Scents</h1>
            </div>
            <div class="gridItem"></div>
            <div class="gridItem grid grid-cols-2 border-r-transparent">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="products">Products</RouterLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
.gridItem {
    width: 100%;
    height: 100%;
    border-top: none;
    border-bottom: none;
    border-left: none;
    text-align: center;
    place-items: center;
}

div {}
</style>