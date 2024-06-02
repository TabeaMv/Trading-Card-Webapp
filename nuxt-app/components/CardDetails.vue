<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="player.image" alt="player img" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4x1 my-7">{{ player.title }}</h2>
                <p class="text-x1 my-7">Price - ${{ player.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Player description:</h3>
                <p class="mb-7">{{ player.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { player } = defineProps(["player"])
</script>
    
<style scoped>
    img {
        max-width: 400px;
    }
</style>