<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in players" :key="p.ign">
                <PlayerCard :player="p"/> <!-- there needs to be ':' because p is dynamic and not a string --> 
            </div>
        </div>
    </div>
</template>

<script setup>
    // fetch the products
    const { data : players } = await useFetch('https://izch9irml3.execute-api.eu-central-1.amazonaws.com/cards');

</script>

<style scoped>

</style>