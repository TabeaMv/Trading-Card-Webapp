<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="player.imageURL_basic" @error="onError" :alt="player.id" class="thumb">
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

    const onError = (event) => {
        event.target.src = '/card_back.png'; // this will show the backside of the card if no URL to the player card is given in the player data DB
    }
</script>
    
<style scoped>
    img {
        max-width: 400px;
    }
</style>