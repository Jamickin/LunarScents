<script>
export default {
    name: 'Carousel',
    data() {
        return {
            slides: [
                {
                    image: 'images/MoonbeamMist.webp',
                    caption: 'Slide 1',
                    description: 'Description for Slide 1',
                },
                {
                    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    caption: 'Slide 2',
                    description: 'Description for Slide 2',
                },
                {
                    image: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
                    caption: 'Slide 3',
                    description: 'Description for Slide 3',
                },
            ],
            currentIndex: 0,
            slideWidth: 0,
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.slideWidth = this.$refs.carouselWrapper.clientWidth;
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
    },
};
</script>


<template>
    <div class="carousel-container">
        <div class="carousel-wrapper" ref="carouselWrapper">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
                    <div class="carousel-image shadow-xl">
                        <img :src="slide.image" :alt="slide.caption">
                    </div>
                    <div class="carousel-caption">
                        <h2 class="text-3xl font-bold mb-2">{{ slide.caption }}</h2>
                        <p class="text-lg">{{ slide.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-controls">
            <button class="carousel-control-btn" @click="previousSlide">&lt;</button>
            <button class="carousel-control-btn" @click="nextSlide">&gt;</button>
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

.carousel-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    transition: transform 0.3s;
}

.carousel-slide {
    flex-shrink: 0;
    width: 100%;
    padding: 0 1rem;
    text-align: center;
}

.carousel-image {
    max-height: 300px;
    width: 100%;
    overflow: hidden;
    border-radius: 2rem;
}

.carousel-image img {
    width: 100%;
    height: auto;
    object-fit: fill;
}

.carousel-caption {
    margin-top: 1rem;
}

.carousel-controls {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    z-index: 111111;
}

.carousel-control-btn {
    font-size: 2rem;
    margin: 0 0.5rem;
    transition: 200ms ease-in;
}

.carousel-control-btn:hover {
    scale: 1.1;
    opacity: 80%;
}
</style>
