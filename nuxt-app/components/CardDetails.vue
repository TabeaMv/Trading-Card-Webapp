<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <NuxtImg :src="'https://d2c66v0b507n0b.cloudfront.net/' + player.id + '.png'" alt="Player thumb" class="mx-auto my-7"></NuxtImg>
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ player.id }}</h2>
                <p class="text-xl my-7">{{ player.team }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Player description:</h3>
                <p>Macro: {{ player.macro }}</p>
                <p>Mechanics: {{ player.mechanics }}</p>
                <p>Gold Income: {{ player.gold }}</p>
                <p>Player rating: {{ player.rating }}</p>
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