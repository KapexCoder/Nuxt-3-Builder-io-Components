<template>
    <Carousel :items-to-show="1">
        <Slide v-for="slide in 10" :key="slide">
            {{ slide }}
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>

