<template>
    <div>
        <p>Sammlung von {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'sammlung'
    })
</script>

<style scoped>

</style>