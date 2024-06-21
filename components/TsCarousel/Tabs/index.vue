<template>
  <TsCarousel :breakpoints="breakpoints" :pagination="false" ref="tabCarousel">
    <Slide v-for="tab in 10" :key="tab">
      <Button
        v-if="tab % 2 === 0"
        append-class="text-nowrap"
        :label="`Button --> ${tab}`"
      />
      <Button
        v-else
        append-class="text-nowrap"
        :label="`Button mast h --> ${tab}`"
      />
    </Slide>
  </TsCarousel>
</template>

<script setup lang="ts">
const tabCarousel = ref(null);

console.log("tabCarousel ----> ", tabCarousel);

const breakpoints = {
  // 0px and up
  0: {
    itemsToShow: 5,
    itemsToScroll: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    itemsToScroll: 5,
    snapAlign: "start",
  },
};
</script>
