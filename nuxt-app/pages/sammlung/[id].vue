<template>
    <div>
        <CardDetails :player="player" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const { data: player } = await useFetch(uri)

</script>

<style scoped>

</style>