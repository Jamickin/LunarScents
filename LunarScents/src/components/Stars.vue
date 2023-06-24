<template>
    <div class="stars">
        <div v-for="star in stars" :key="star.id" :class="['star', star.size]" :style="{ top: star.top, left: star.left }">
            <img src="../assets/images/star.svg" alt="Star" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'Stars',
    data() {
        return {
            stars: [],
            animationInterval: null,
        };
    },
    mounted() {
        this.generateStars();
        this.animationInterval = setInterval(() => this.updateStars(), 30);
    },
    beforeUnmount() {
        clearInterval(this.animationInterval);
    },
    methods: {
        generateStars() {
            for (let i = 0; i < 15; i++) { // Reduce the total number of stars to 15
                const size = this.getRandomSize();
                const star = {
                    id: i,
                    size: `star-${size}`,
                    top: this.getRandomTop(),
                    left: this.getRandomLeft(),
                    speed: this.getRandomSpeed(),
                };
                this.stars.push(star);
            }
        },
        getRandomSize() {
            const sizes = ['sm', 'md', 'lg'];
            const randomIndex = Math.floor(Math.random() * sizes.length);
            return sizes[randomIndex];
        },
        getRandomTop() {
            return `${Math.floor(Math.random() * 101)}%`;
        },
        getRandomLeft() {
            return `${Math.floor(Math.random() * 101)}%`;
        },
        getRandomSpeed() {
            return Math.random() * 0.8 + 0.2; // Adjust the speed range as desired
        },
        updateStars() {
            for (const star of this.stars) {
                const currentRotation = star.style.transform.replace(/[^\d.]/g, '');
                const newRotation = parseFloat(currentRotation) + star.speed;
                star.style.transform = `rotate(${newRotation}deg)`;

                star.style.top = parseFloat(star.style.top) + star.speed + '%';
                if (parseFloat(star.style.top) > 100) {
                    star.style.top = '-10%';
                    star.style.left = this.getRandomLeft();
                }
            }
        },
    },
};
</script>

<style scoped>
.stars {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
    overflow: hidden;
}

.star {
    position: absolute;
    width: 24px;
    height: 24px;
    opacity: 0;
    pointer-events: none;
    animation: star-fall 10s linear infinite;
    /* Adjust the animation duration as desired */
}

.star-sm {
    width: 16px;
    height: 16px;
}

.star-lg {
    width: 32px;
    height: 32px;
}

@keyframes star-fall {
    0% {
        opacity: 0;
        transform: translateY(-100vh);
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateY(100vh);
    }
}
</style>
