<template>
  <!-- <div class="flex flex-col-2 place-items-center justify-start">
      <div class="box-border h-[400px] w-full flex bg-Glass shadow-xl backdrop-blur-sm rounded-2xl flex-col place-items-center overflow-hidden"
          @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
          <div class="flex flex-nowrap overflow-hidden" ref="carouselWrapper">
              <div ref="carouselTrack" class="flex transition-transform duration-300"
                  :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                  <div v-for="(slide, index) in slides" :key="index"
                      class="flex place-items-center flex-shrink-0 w-full text-center">
                      <div>
                          <img :src="slide.image" :alt="slide.caption" />
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div> -->
  <div class="flex flex-col-2 place-items-center justify-start">
    <div
        class="box-border h-auto w-full flex bg-Glass shadow-xl backdrop-blur-sm rounded-t-2xl flex-col place-items-center overflow-hidden"
        @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
      <div class="flex flex-nowrap overflow-hidden" ref="carouselWrapper">
        <div ref="carouselTrack" class="flex transition-transform duration-300"
             :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
          <div class="flex place-items-center flex-shrink-0 w-full text-center">
            <div>
              <img src="/images/SprayStore.webp"/>
            </div>
          </div>
          <div class="flex place-items-center flex-shrink-0 w-full text-center">
            <div>
              <img src="/images/RollerStore.webp"/>
            </div>
          </div>
          <div class="flex place-items-center flex-shrink-0 w-full text-center">
            <div>
              <img src="/images/TonicStore.webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
      this.currentIndex = (this.currentIndex - 1 + 3) % 3;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % 3;
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    },
  },
  computed: {
    slides() {
      return store.state.galleryItems.map(product => ({
        image: product.image,
        caption: product.name,
      }));
    },

  },
};
</script>

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