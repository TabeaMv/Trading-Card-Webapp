<template>
    <div class="card text-center">
        <img :src="player.image" alt="Player thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ player.title }}</p>
        <NuxtLink :to="`/sammlung/${player.id}`">
            <p class="btn my-4">View details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { player } = defineProps(['player'])
</script>

<style scoped>
    
</style>