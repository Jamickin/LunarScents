<script setup>
import { ref } from "vue";

const showSideBar = ref(false)

function toggle() {
    showSideBar.value = !showSideBar.value;
}
</script>

<template>
    <div class="fixed hover:cursor-pointer hover:scale-110 h-10 w-10 transition"
        :class="showSideBar ? 'right-96' : 'right-0'">
        <img src="../assets/images/CartIcon.svg" @click="toggle()" />
    </div>

    <Transition>
        <div v-if="showSideBar" :class="showSideBar ? 'right-0' : '-right-96'"
            class="fixed h-screen w-96 p-12 shadow-2xl backdrop-blur-sm text-neutral-100 text-center sideBar">
            <h1 class="text-3xl">This is Cart</h1>
            <div class="h-full w-full rounded-lg hover:shadow-2xl hover:bg-opacity-20 transition ">
            </div>
        </div>
    </Transition>
</template> 

<style scoped>
.menu-item {
    transition: 400ms;
    padding: 4rem;
}

.menu-item:hover {
    color: black;
    border-radius: 2rem;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
