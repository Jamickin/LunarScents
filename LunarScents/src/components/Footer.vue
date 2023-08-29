<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="text-lg font-bold text-slate-500 grid py-6 grid-cols text-center place-items-center justify-center">
        <div>
            <nav class="my-6">Navigation:
                <ul class="flex gap-4">
                    <router-link class="text-slate-600 hover:text-green-800" to="/">Home</router-link>
                    <router-link class="text-slate-600 hover:text-green-800" to="/about">About</router-link>
                    <router-link class="text-slate-600 hover:text-green-800" to="/store">Store</router-link>
                    <router-link class="text-slate-600 hover:text-green-800" to="/checkout">Checkout</router-link>
                </ul>
            </nav>
        </div>
        <div>
            Lunar Scents | Fragrance Inspired by the Cosmos
            <br>
            © 2023 All rights reserved.
            <div></div>
        </div>
    </div>
</template>
