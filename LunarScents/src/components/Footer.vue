<template>
	<div
		class="flex bg-neutral-50 flex-col text-xl font-extrabold text-slate-500 py-2 text-center place-items-center justify-center"
		:class="{ hidden: isCheckoutPage }"
	>
		<div>
			Lunar Scents | Fragrance Inspired by the
			Cosmos
			<br />
			© 2023 All rights reserved.
			<div class="flex justify-evenly">
				<a
					href="https://www.facebook.com/profile.php?id=61552810387872"
					target="_blank"
					><img
						src="https://firebasestorage.googleapis.com/v0/b/lunar-scents.appspot.com/o/FacebookLogo.svg?alt=media&token=2ef13348-8426-46a0-9f45-50bddecbb20d"
				/></a>
				<a
					href="https://instagram.com/lunarscents.gifts?igshid=MzMyNGUyNmU2YQ=="
					target="_blank"
					><img
						src="https://firebasestorage.googleapis.com/v0/b/lunar-scents.appspot.com/o/InstaLogo.svg?alt=media&token=5dfb1e82-5ae9-48ea-b8f3-c37f490b38fe"
				/></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCheckoutPage: false,
		};
	},
	mounted() {
		this.detectCheckoutPage();
	},

	methods: {
		detectCheckoutPage() {
			this.isCheckoutPage =
				window.location.pathname === "/checkout";
		},
	},

	watch: {
		$route() {
			this.detectCheckoutPage();
		},
	},
};
</script>

<style scoped>
img {
	@apply h-10 w-10 hover:scale-105 transition-transform duration-300;
}
.sticky {
	position: sticky;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 999;
	transition: transform 0.3s ease; /* Use transform for the transition */
}
</style>
