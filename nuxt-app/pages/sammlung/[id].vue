<template>
    <div>
        <CardDetails :player="player" />
    </div>
</template>

<script setup>
    const { ign } = useRoute().params
    const uri = 'http://localhost:3000/api/cards/' + "Jigglypufff"

    //fetch the product
    const { data: player } = await useFetch(uri)

    // fatal: true forces application to show the error page
    // avoids dead website when clicking on non-existing links
    if (!player.value) {
        throw createError({ statusCode: 404, statusMessage: "Card not found with IGN:  " + ign, fatal: true}) 
    }

</script>

<style scoped>

</style>