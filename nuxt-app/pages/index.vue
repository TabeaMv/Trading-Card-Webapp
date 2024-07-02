<template>
    <div><img :src="'Logo.png'" class="logo"></div>
    <div class="grid-container">
        <NuxtLink :to="'ziehen'">
        <img :src="'Ziehen.svg'" class="grid">
        </NuxtLink>
        <NuxtLink :to="'tauschen'">
        <img :src="'Tauschen.svg'" class="grid">
        </NuxtLink>
        <NuxtLink :to="'/sammlung'">
        <img :src="'Sammlung.svg'" class="grid">
        </NuxtLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .always-white {
        color: white;
    }
    .logo {
        max-width: 40%;
        margin: auto;
    }
    .grid{
        max-width: 70%;
        margin: auto;
    }
    .text {
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 4rem;
        color: white;
    }
    .grid-container { /* this class describes how the cards on the collection page are arranged */
        align-self: center;
        display: grid;
        margin-left: 10rem;
        margin-right: 10rem;
        margin-top: 6rem;
        grid-row-gap: 3rem; /* Adjust the gap between cards */
        grid-column-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        /* This will create columns that are at least 300px wide and grow to fill the available space, 
            adjusting the number of columns based on the container's width */
    }

</style>