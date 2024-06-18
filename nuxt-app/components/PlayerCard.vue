<template>
    <div class="card text-center">
        <img :src="player.image" alt="Player thumb" class="thumb">
        <NuxtLink :to="`/sammlung/${player.id}`">
            <p class="btn my-4 font-bold m-4 truncate">View details for {{ player.id }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { player } = defineProps(['player'])
</script>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>