<template>
    <div class="transition-colors duration-300 ease-in-out fixed top-0 left-0 h-12 w-screen flex justify-center place-items-center flex-row z-50 bg-white shadow-md"
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
        <!-- <router-link to="/gallery" class="menu-item">
            <p>GALLERY</p>
        </router-link> -->
        <router-link to="/faq" class="menu-item">
            <p>FAQ</p>
        </router-link>
        <!-- <router-link to="/profile" class="menu-item">
            <p>PROFILE</p>
        </router-link> -->
        <router-link to="/checkout" class="menu-item">
            <p>CHECKOUT</p>
        </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolling = ref(false);

const windowWidth = ref(window.innerWidth < 640);

const handleScroll = () => {
    if (window.scrollY > 18) {
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
    @apply w-full sm:px-2 sm:py-1 flex place-items-center justify-center text-center transition-all duration-700 h-full font-bold text-lg;
}

.menu-item:hover {
    @apply shadow-2xl text-TertiaryHL;
}

p {
    @apply w-full
}


/* .scrolling {
    @apply bg-Glass
} */
</style>
