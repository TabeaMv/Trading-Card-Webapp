<template>
    <div class="p-1">
        <NuxtLink :to="`/sammlung/${player.id}`">
        <img :src="player.imageURL_basic" @error="onError" :alt="player.id" class="thumb">
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
    .thumb {
        max-width: 90%;
        margin: auto;
    }
</style>