<template>
    <div class="fixed top-0 left-0 h-12 w-full grid grid-cols-4 justify-center place-items-center z-50"
        :class="{ 'scrolling': isScrolling }">
        <router-link to="/" class="menu-item">
            <p>HOME</p>
        </router-link>
        <router-link to="/about" class="menu-item">
            <p>ABOUT US</p>
        </router-link>
        <router-link to="/store" class="menu-item">
            <p>STORE</p>
        </router-link>
        <router-link to="/checkout" class="menu-item">
            <p>CHECKOUT</p>
        </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolling = ref(false);

const handleScroll = () => {
    if (window.scrollY > 12) { // Adjust the threshold as needed
        isScrolling.value = true;
    } else {
        isScrolling.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
img {
    @apply w-[2.7rem] cursor-pointer transition-all duration-[600ms];
}

.menu-item {
    @apply text-Secondary w-48 flex place-items-center justify-center text-center transition-all duration-300 h-full font-bold text-lg;
}

.menu-item:hover {
    @apply shadow-2xl rounded-2xl;
}


p {
    @apply w-full
}

.scrolling .menu-item {
    color: black;
    @apply bg-Glass w-full backdrop-blur-sm
}
</style>
