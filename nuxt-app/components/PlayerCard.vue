<template>
    <div class="imageWrapper">
        <NuxtLink :to="`/sammlung/${player.id}`">
        <img :src="player.imageURL_basic" @error="onError" :alt="player.id" class="img">
        <p class="text">
            Division {{ player.division }} <br>
            Team Platzhalter
        </p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { player } = defineProps(['player']);

    const onError = (event) => {
        event.target.src = '/card_back.png'; // this will show the backside of the card if no URL to the player card is given in the player data DB
    }
</script>

<style scoped>
    .img {
        max-width: 90%;
        margin: auto;
        -webkit-transition: opacity 0.5s;
        -moz-transition: opacity 0.5s;
        -o-transition: opacity 0.5s;
        transition: opacity 0.5s;
    }
    .imageWrapper {
        padding: 0.25rem;
        position: relative;
    }
    .imageWrapper .text {
        opacity: 0;
        position: absolute;
        bottom: 0.5rem;
        left: 1.7rem;
        right: 1.7rem;
        padding: 1rem;
        color: #ffffff;
        text-decoration: none;
        text-align: left;
        -webkit-transition: opacity 1s;
        -moz-transition: opacity 1s;
        -o-transition: opacity 1s;
        transition: opacity 1s;
    }
    .imageWrapper:hover .text {
        opacity: 1;
    }
    .imageWrapper:hover .img {
        opacity: 0.5;
    }
</style>