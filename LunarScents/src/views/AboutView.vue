<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container text-slate-600 px-44 background bg-no-repeat w-screen">
        <div class=" text-2xl  text-center bg-white bg-opacity-90 bg-no-repeat rounded-2xl p-12 relative">
            <h1 class="text-3xl font-bold mb-4">Welcome to Lunar Scents<br>Your Gateway to Natural Wellness
            </h1>
            <img src="../assets/images/Quotation.svg" class="w-12 absolute left-0">
            <p class="letter"> Hello, I'm Andrea, the heart and soul behind Lunar Scents. I'm thrilled to introduce you
                to
                the world of
                natural
                wellness and aromatherapy. Lunar Scents is not just a small essential oil business; it's a passion project
                born
                from a profound appreciation for the therapeutic and aromatic benefits of essential oils.
                I firmly hold the
                belief
                that nature has granted us everything we need for healing and well-being, waiting to be discovered and
                harnessed. It's this belief that fuels our commitment to crafting each product as a tribute to the
                remarkable
                gifts that nature provides us.</p>
            <p> At Lunar Scents, our mission is clear: to promote wellness and relaxation through the power of nature's
                purest
                scents. I believe that in the hustle and bustle of life, everyone deserves a moment of tranquillity and
                rejuvenation. That's why I carefully source and blend essential oils to create unique and captivating
                fragrances
                that elevate the senses and enhance overall well-being.
                I enthusiastically anticipate the continued expansion of Lunar Scents' product range, as I strive to grow
                our
                presence and introduce our offerings to an ever-widening audience.</p>
            <p>
                Partner with Lunar Scents:
                We believe that our products can bring a touch of tranquillity and wellness to your customers' lives, and
                we're
                excited to explore the possibility of partnering with your store. Whether you're interested in consignment
                or
                purchasing a selection of our products, we're open to discussing what works best for you.<br>
                Join us on this aromatic journey and introduce the pure scents of Lunar Scents to your valued customers.
            </p>
            <p>Let's
                chat, share ideas, and embark on a partnership that elevates the well-being of all.</p>
            <p>For inquiries, partnership proposals, or simply to learn more about our products, please feel free to reach
                out
                to us at andreajonelle@gmail.com
                I can't wait to connect and spread the essence of natural wellness together.</p>
            <div class="px-80"> <img src="../assets/images/pfpblack.jpeg" class="rounded-2xl">
            </div>
            <p> My Warmest regards,<br>
                Andrea Jonelle Wichelt<br>
                Founder of Lunar Scents
            </p>
            <img src="../assets/images/Quotation.svg" class="w-12 absolute right-0 rotate-180">


        </div>
        <div class="text-xl font-bold text-center mt-12">
            Our Product Range:
            Explore our carefully curated selection of essential oil products, each designed to bring a touch of
            serenity
            and
            balance to your life:
            <ul class="py-6">
                <li>Enchanted Forest - 100ml</li>
                <li>Temple Tonic Roller - 10ml</li>
                <li>Moonlit Blush Blend - 10ml</li>
            </ul>
            <div class="text-center z-30 my-12">
                <RouterLink to="/store"
                    class="text-center bg-Secondary p-8 rounded-2xl hover:opacity-80 hover:shadow-2xl transition-all z-30">
                    STORE
                </RouterLink>
            </div>
            <ul class="py-6">
                Our thoughtfully crafted collection includes:
                <li>Aromatherapy Burner
                </li>
                <li>Handmade Earrings
                </li>
                <li>Handbag Hanger
                </li>
                <li>Lunar Scents Gift Box</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.container {
    max-width: 100%;
    /* Ensure content doesn't overflow on small screens */
    padding: 16px;
    /* Add some padding for spacing */
    box-sizing: border-box;
    /* Ensure padding doesn't increase container width */
}

/* Media query for smaller screens (adjust breakpoints as needed) */
@media screen and (max-width: 768px) {
    .container {
        padding: 10px;
        /* Adjust padding for smaller screens */
    }

    /* Add more specific styles for smaller screens here */
}

p {
    @apply py-6;
    font-family: 'Pacifico';
}

.background {
    background-image: url('../assets/images/Logo.png');
    background-position-x: center;
    /* background-position-y: -100px; */

}</style>
