<template>
    <div class="relative">
        <Card root-class="px-0">
            <NuxtImg src="https://images.pexels.com/photos/6232443/pexels-photo-6232443.jpeg" />
        </Card>
        <Card :title="props.title" :body="props.description" root-class="w-11/12 mx-auto -mt-10 bg-white relative z-10" >
            <template #header>
                <div class="flex">
                    <div class="mr-2">image</div>
                    <div>Title</div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Better Products",
    },
    description: {
        type: String,
        default:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
});
</script>
