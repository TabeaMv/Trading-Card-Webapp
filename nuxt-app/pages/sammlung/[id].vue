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

    // fatal: true forces application to show the error page
    // avoids dead website when clicking on non-existing links
    if (!player.value) {
        throw createError({ statusCode: 404, statusMessage: "Product not found: " + id, fatal: true}) 
    }

</script>

<style scoped>

</style>