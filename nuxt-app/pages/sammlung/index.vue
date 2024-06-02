<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in players" :key="p.id">
                <PlayerCard :player="p"/> <!-- there needs to be ':' because p is dynamic and not a string --> 
            </div>
        </div>
    </div>
</template>

<script setup>
    // fetch the products
    const { data: players } = await useFetch('https://fakestoreapi.com/products');

    definePageMeta({
        layout: "sammlung-layout",
    })
</script>

<style scoped>

</style>