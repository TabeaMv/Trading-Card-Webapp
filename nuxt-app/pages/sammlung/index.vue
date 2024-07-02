<template>
    <div>
        <div class="grid-container">
            <div v-for="p in players" :key="p.ign">
                <PlayerCard :player="p"/> <!-- there needs to be ':' because p is dynamic and not a string --> 
            </div>
        </div>
    </div>
</template>

<script setup>
    // fetch the products
    const { data : players } = await useFetch('https://izch9irml3.execute-api.eu-central-1.amazonaws.com/cards'); // get player data

</script>

<style scoped>
    .grid-container { /* this class describes how the cards on the collection page are arranged */
    display: grid;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
    grid-row-gap: 3rem; /* Adjust the gap between cards */
    grid-column-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* This will create columns that are at least 300px wide and grow to fill the available space, 
        adjusting the number of columns based on the container's width */
}
</style>