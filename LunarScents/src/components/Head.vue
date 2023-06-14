<script setup>
import { RouterLink } from "vue-router"
</script>
<template>
    <div class="h-[4.5rem] top-0 left-0 w-full px-6 bg-TertiaryHL">
        <div class="h-full grid grid-cols-3 justify-center place-items-center">
            <div class="gridItem flex justify-center">
                <h1></h1>
            </div>
            <div class="gridItem"></div>
            <div class="gridItem grid grid-cols-2 border-r-none">
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
</style>