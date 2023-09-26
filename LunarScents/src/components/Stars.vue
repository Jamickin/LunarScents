<template>
    <div class="-z-50 fixed top-0 left-0 h-screen w-full overflow-hidden">
        <div v-for="star in stars" :key="star.id"
            class="absolute w-[24px] h-[24px] opacity-100 pointer-events-none transition-transform animate-star-fall"
            :style="{ top: star.style.top, left: star.style.left, transform: star.style.transform }">
            <img src="../assets/images/2.png" alt="Star" class="w-full h-full" />
        </div>
    </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'Stars',
    setup() {
        const stars = ref([]);
        let animationFrameId;
        const generateStars = () => {
            for (let i = 0; i < 9; i++) {
                const size = getRandomSize();
                const star = {
                    id: i,
                    size: `star-${size}`,
                    style: {
                        top: getRandomTop(),
                        left: getRandomLeft(),
                        transform: getRandomRotation(),
                    },
                    speed: getRandomSpeed(),
                    rotation: 0,
                };
                stars.value.push(star);
            }
        };

        const getRandomSize = () => {
            const sizes = ['sm', 'md', 'lg'];
            const randomIndex = Math.floor(Math.random() * sizes.length);
            return sizes[randomIndex];
        };

        const getRandomTop = () => {
            return `${Math.floor(Math.random() * 101)}%`;
        };

        const getRandomLeft = () => {
            return `${Math.random() * 101}%`;
        };

        const getRandomSpeed = () => {
            return Math.random() * 0.25 + 0.05;
        };

        const getRandomRotation = () => {
            return `rotate(${Math.random() * 360}deg)`;
        };

        const updateStars = () => {
            for (const star of stars.value) {
                star.style.top = parseFloat(star.style.top) + star.speed + '%';
                star.rotation += star.speed;
                if (parseFloat(star.style.top) > 100) {
                    star.style.top = '-10%';
                    star.style.left = getRandomLeft();
                    star.style.transform = getRandomRotation();
                }
            }
            animationFrameId = requestAnimationFrame(updateStars);
        };

        const restartAnimation = () => {
            stars.value = [];
            generateStars();
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(updateStars);
        };

        onMounted(() => {
            generateStars();
            animationFrameId = requestAnimationFrame(updateStars);
        });

        onUnmounted(() => {
            cancelAnimationFrame(animationFrameId);
        });

        return {
            stars,
            restartAnimation,
        };
    },
};
</script>

<style scoped>
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
