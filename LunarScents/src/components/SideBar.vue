<template>
    <div class="fixed top-0 left-0 h-12 w-screen flex justify-center place-items-center z-50 bg-white shadow-md"
        :class="{ 'scrolling': isScrolling }">
        <router-link to="/" class="menu-item">
            <p>HOME</p>
        </router-link>
        <router-link to="/about" class="menu-item">
            <p>ABOUT</p>
        </router-link>
        <router-link to="/store" class="menu-item">
            <p>STORE</p>
        </router-link>
        <router-link to="/checkout" class="menu-item">
            <p>CHECKOUT</p>
        </router-link>
        <router-link to="/gallery" class="menu-item">
            <p>GALLERY</p>
        </router-link>
        <router-link to="/faq" class="menu-item">
            <p>FAQ</p>
        </router-link>
        <router-link to="/profile" class="menu-item">
            <p>PROFILE</p>
        </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolling = ref(false);

const handleScroll = () => {
    if (window.scrollY > 0) { // Adjust the threshold as needed
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
    @apply text-Secondary w-full flex place-items-center justify-center text-center transition-all duration-700 h-full font-bold text-lg;
    @apply px-2 py-1;
}

.menu-item:hover {
    @apply shadow-2xl text-TertiaryHL;
}

p {
    @apply w-full
}

.scrolling .menu-item {
    color: black;
    @apply bg-Glass backdrop-blur-sm
}

.scrolling {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: background-color 0.3s ease-in-out;
    @apply bg-Glass
}
</style>
