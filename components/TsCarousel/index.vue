<template>
    <Carousel :items-to-show="1" :wrap-around="props.wrapAround">
        <Slide v-for="slide in 2" :key="slide">
            {{ slide }}
        </Slide>

        <template #addons="{ slidesCount }">
            <Navigation v-if="slidesCount > 1" />
            <Pagination v-if="slidesCount > 1" />
        </template>
    </Carousel>
</template>

<script setup lang="ts">

// modelValue & i18n still pending

type SnapAlign = {
    snapAlign?: "start" | "end" | "center" | "center-odd" | "center-even";
};

type Props = SnapAlign & {
    itemsToShow?: number;
    itemsToScroll?: number;
    wrapAround?: boolean;
    transition?: number;
    autoplay?: number;
    breakpoints?: object | null;
    mouseDrag?: boolean;
    touchDrag?: boolean;
    pauseAutoplayOnHover?: boolean;
    dir?: "ltr" | "rtl";
    i18n?: object | null;
}

const props = withDefaults(defineProps<Props>(), {
    itemsToShow: 1,
    itemsToScroll: 1,
    wrapAround: false,
    snapAlign: "center",
    transition: 300,
    autoplay: 0,
    breakpoints: null,
    mouseDrag: true,
    touchDrag: true,
    pauseAutoplayOnHover: false,
    dir: "ltr"
});

</script>

<style scoped lang="scss">

</style>

