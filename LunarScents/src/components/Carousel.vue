<script>
import store from "@/store";

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
    <div class="flex flex-col place-items-center overflow-hidden" @mouseenter="stopAutoScroll"
        @mouseleave="startAutoScroll">
        <div class="flex flex-nowrap overflow-hidden" ref="carouselWrapper">
            <div ref="carouselTrack" class="flex transition-transform duration-300"
                :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                <div v-for="(slide, index) in slides" :key="index"
                    class="flex flex-col place-items-center flex-shrink-0 w-full px-0 py-4 text-center">
                    <div class="w-1/3 h-72 relative">
                        <img class="w-full h-full object-fill rounded-2xl" :src="slide.image" :alt="slide.caption">
                    </div>
                    <div class="mt-4">
                        <h2 class="text-3xl font-bold mb-2">{{ slide.caption }}</h2>
                        <p class="text-lg">{{ slide.description }}</p>
                        <p class="text-lg font-semibold">{{ slide.price }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-4 z-[111111]">
            <button class="hover:scale-110 hover:opacity-80 text-[2rem] mx-[0.5rem] transition duration-200 ease-in"
                @click="previousSlide">&lt;</button>
            <button class="hover:scale-110 hover:opacity-80 text-[2rem] mx-[0.5rem] transition duration-200 ease-in"
                @click="nextSlide">&gt;</button>
        </div>
    </div>
</template>
