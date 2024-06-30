<template>
    <div class="p-1">
        <NuxtLink :to="`/sammlung/${player.id}`">
        <img :src="'https://d2c66v0b507n0b.cloudfront.net/' + encodedID + '_Basic.png'" @error="onError" :alt="player.id" class="thumb">
        </NuxtLink>
    </div>
</template>

<script setup>
    const { player } = defineProps(['player']);
    const encodedID = encodeURIComponent(player.id); // make sure that the ID is compatible with URLs (i.e. Funky Kong -> Funky%20Kong)

    const onError = (event) => {
        event.target.src = '/card_back.png'; // this will show the backside of the card if no URL to the player card is given in the player data DB
    }
</script>

<style scoped>
    .thumb {
        max-width: 60%;
        margin: auto;
    }
</style>