<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
	<!-- check pic -->
	<div class="bg-white sm:pt-12">
		<div
			class="flex md:h-screen h-[400px] justify-center place-items-center"
		>
			<img
				class="md:h-[768px]"
				src="https://firebasestorage.googleapis.com/v0/b/lunar-scents.appspot.com/o/HomePicWhite.webp?alt=media&token=c9222729-f115-41b0-8947-34c0e0fc3531"
				alt="Home Page Picture"
			/>
		</div>
		<div
			class="flex flex-col justify-items-center place-items-center sm:h-[800px] h-screen sm:pt-24"
		>
			<div class="logo w-full h-full"></div>
			<p
				class="text-center font-bold text-slate-600 sm:px-24 md:px-12 text-2xl pt-12"
			>
				We are the one-stop for all of your
				holistic needs! Click on the shop button
				below to get started!
			</p>
			<div class="text-center my-16">
				<RouterLink
					to="/store"
					class="py-6 text-center text-white hover:bg-TertiaryHL font-bold bg-gray-500 p-8 transition-all rounded-2xl hover:opacity-95 hover:shadow-2xl"
				>
					SHOP
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.logo {
	background-image: url("https://firebasestorage.googleapis.com/v0/b/lunar-scents.appspot.com/o/Logo.webp?alt=media&token=b55c1898-426f-4aef-a2a5-df623852aa6f");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
