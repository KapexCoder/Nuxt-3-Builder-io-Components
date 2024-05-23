<template>
  <div>
    <span class="">
      <span
        v-for="(item, index) in props.tabs"
        :key="index"
        class="px-6 py-2 cursor-pointer"
        :class="activeTab === index && 'bg-blue-500'"
        @click="handleClick(index)"
      >
        {{ item.label }}
      </span>
    </span>
    <div v-if="activeTabContent">
      <Blocks
        :parent="props.builderBlock.id"
        :path="`component.options.tabs.${activeTab}.content`"
        :blocks="activeTabContent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Blocks } from "@builder.io/sdk-vue";

const props = defineProps({
  tabs: Array,
  builderBlock: Object,
  // other props...
});

const activeTab = ref(props.defaultActiveTab ? props.defaultActiveTab - 1 : 0);
const activeTabContent = computed(() => {
  return props.tabs && props.tabs.length > activeTab.value
    ? props.tabs[activeTab.value].content
    : undefined;
});

function handleClick(index) {
  // handle tab click logic
  activeTab.value = index;
}
</script>
