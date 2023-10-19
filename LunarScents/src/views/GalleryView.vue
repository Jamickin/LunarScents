<script>

  export default {
    data() {
      return {
        loadedItems: 6,
      };
    },
    methods: {
      loadMoreItems() {
        this.loadedItems += 6;
      },
    },
  };
</script>

<template>
  <div
    class="grid grid-cols-3 justify-center place-items-center gap-4">
    <div class="box"></div>
</div>
  <button
    @click="loadMoreItems"
    class="w-full py-6 text-xl font-bold animate-pulse">
    Load More
  </button>
</template>

<style scoped></style>
