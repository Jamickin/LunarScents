<script setup>
import Carousel from '../components/Carousel.vue';
import BannerCarousel from '../components/BannerCarousel.vue';

const videoUrl = "/images/CartIcon.svg"; // Specify the path to your video
const imageUrls = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
];
</script>
<template>
    <div class="grid justify-items-center place-items-center">
        <img src="../assets/images/Logo.png" class="h-screen -z-20">
    </div>
    <Carousel />
    <div class="home-view">
        <BannerCarousel :videoUrl="videoUrl" :imageUrls="imageUrls" />
    </div>
</template>

<style scoped></style>
