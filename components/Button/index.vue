<template>
    <button class="text-4xl">{{ props.text }}</button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Button'
    },
})
</script>