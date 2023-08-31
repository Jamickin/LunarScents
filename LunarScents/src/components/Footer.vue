<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="text-lg font-bold text-slate-500 grid py-6 grid-cols text-center place-items-center justify-center">
        <div>
            <nav>Navigation:
                <ul class="flex place-items-center justify-center gap-4 bg-glass shadow-xl px-2 rounded-2xl">
                    <router-link class="text-slate-600 hover:text-green-600 transition-colors duration-300 ease-in-out"
                        to="/">Home</router-link>
                    <router-link class="text-slate-600 hover:text-green-600 transition-colors duration-300 ease-in-out"
                        to="/about">About</router-link>
                    <router-link class="text-slate-600 hover:text-green-600 transition-colors duration-300 ease-in-out"
                        to="/store">Store</router-link>
                    <router-link class="text-slate-600 hover:text-green-600 transition-colors duration-300 ease-in-out"
                        to="/checkout">Checkout</router-link>
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
