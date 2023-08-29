<script>
import store from "@/store";
import { RouterLink } from "vue-router";

export default {
    name: 'Carousel',
    data() {
        return {
            currentIndex: 0,
            slideWidth: 0,
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.slideWidth = this.$refs.carouselWrapper.clientWidth;
            this.startAutoScroll();
        });
    },
    watch: {
        currentIndex() {
            this.updateSlidePosition();
        },
    },
    methods: {
        updateSlidePosition() {
            this.$nextTick(() => {
                this.slideWidth = this.$refs.carouselWrapper.clientWidth;
                this.$refs.carouselTrack.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
            });
        },
        previousSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        startAutoScroll() {
            this.autoScrollInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        stopAutoScroll() {
            clearInterval(this.autoScrollInterval);
        },

    },
    computed: {
        slides() {
            return store.state.products.map(product => ({
                image: product.image,
                caption: product.name,
                description: product.description,
                price: product.price,
            }));
        },

    },
};
</script>

<template>
    <div class="w-screen flex place-items-center justify-center">
        <div class="box-border flex bg-Glass shadow-xl backdrop-blur-sm rounded-2xl flex-col place-items-center overflow-hidden w-1/3"
            @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
            <div class="flex flex-nowrap overflow-hidden" ref="carouselWrapper">
                <div ref="carouselTrack" class="flex transition-transform duration-300"
                    :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                    <div v-for="(slide, index) in slides" :key="index"
                        class="flex flex-col place-items-center flex-shrink-0 w-full text-center">
                        <div>
                            <router-link to="/store">
                                <img :src="slide.image" :alt="slide.caption">
                            </router-link>
                        </div>
                        <!-- <div class="mt-4">
                        <router-link :to="{ name: 'store' }" @click="addToCart(slide)">
                            <h2 class="text-3xl font-bold mb-2">{{ slide.caption }}</h2>
                        </router-link>
                        <p class="text-lg">{{ slide.description }}</p>
                        <p class="text-lg font-semibold text-TertiaryHL">{{ slide.price }}</p>
                    </div> -->
                    </div>
                </div>
            </div>
            <div class="flex place-items-center justify-evenly my-4 z-[111111] h-8 rounded-2xl bg-Glass">
                <img src="../assets/images/ArrowLeft.svg"
                    class="click-button hover:red-stroke hover:scale-110 hover:opacity-80 h-full" @click="previousSlide">
                <img src="../assets/images/ArrowRight.svg"
                    class="click-button hover:red-stroke hover:scale-105 hover:opacity-80 h-full" @click="nextSlide">
            </div>
        </div>
    </div>
</template>

<style scoped>
.click-button {
    cursor: pointer;
    transition: stroke 0.3s;
}

.click-button:active {
    transform: scale(0.95);
    opacity: 0.7;
}
</style>