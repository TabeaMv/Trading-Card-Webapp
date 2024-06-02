<template>
    <div>
        <p>{{ player.title }}</p>
        <p>{{ player.price }}</p>
        <p>{{ player.id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const { data: player } = await useFetch(uri)

    definePageMeta({
        layout: 'sammlung-layout'
    })
</script>

<style scoped>

</style>