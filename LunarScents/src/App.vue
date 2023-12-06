<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<div>
		<NavBar />
		<main
			style="min-height: 90dvh"
			class="bg-gradient-to-b from-white to-Secondary sm:mt-12"
		>
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<script>
export default {
	beforeRouteUpdate(to, from, next) {
		this.scrollToTop();
		next();
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.scrollToTop();
		});
	},
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		},
	},
};
</script>
