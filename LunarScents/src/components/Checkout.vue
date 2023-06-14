<script setup>


function toggle() {
    document.getElementById("checkoutButton").classList.toggle("left-[30rem]");
    document.getElementById("checkout").classList.toggle("hidden")
}

</script>
<template>
    <div id="checkoutButton" class="fixed left-0 top-10 hover:cursor-pointer hover:scale-110 h-10 w-10">
        <img src="../assets/images/CartIcon.svg" id="button" @click="toggle(event)" />
    </div>

    <div id="checkout"
        class="hidden fixed top-0 left-0 h-screen w-[30rem] p-12 shadow-2xl backdrop-blur-sm text-neutral-100 text-center pb-16">
        <h1 class="text-4xl text-zinc-950 ">This is checkout</h1>
        <div class="h-full bg-Page rounded-2xl"></div>
    </div>
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
</style>
