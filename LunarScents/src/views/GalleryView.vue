<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            loadedItems: 6, // Number of items initially loaded
        };
    },
    computed: {
        ...mapState(["galleryItems"]),
    },
    methods: {
        loadMoreItems() {
            // Increase the number of loaded items by 9
            this.loadedItems += 6;
        },
    },
};
</script>

<template>
    <div class="grid grid-cols-3 justify-center place-items-center gap-4">
        <div v-for="(item, index) in galleryItems.slice(0, loadedItems)" :key="item.id"
            class="w-full h-full flex place-items-center bg-Glass rounded-2xl">
            <img :src="item.image" :alt="item.name" class=" max-w-full rounded-2xl" />
        </div>
    </div>
    <button @click="loadMoreItems" class="w-full py-6 text-xl font-bold animate-pulse">Load More</button>
</template>


<style scoped></style>
