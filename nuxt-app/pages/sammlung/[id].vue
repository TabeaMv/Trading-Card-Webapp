<template>
    <div>
        <CardDetails :player="player" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://izch9irml3.execute-api.eu-central-1.amazonaws.com/cards/' + id

    //fetch the product
    const { data: player } = await useFetch(uri)

    // fatal: true forces application to show the error page
    // avoids dead website when clicking on non-existing links
    if (!player.value) {
        throw createError({ statusCode: 404, statusMessage: "Card not found with IGN:  " + id, fatal: true}) 
    }

</script>

<style scoped>

</style>