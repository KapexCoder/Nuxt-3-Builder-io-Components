<template>
  <div class="flex">
    <span class="flex flex-col w-48 border-r border-t">
      <span
        v-for="(menu_items, i) in props.menus"
        :key="menu_items"
        class="py-2 cursor-pointer"
        :class="i !== props.menus.length - 1 && 'border-b'"
      >
        <div
          v-for="(menu, j) in menu_items.menuItems"
          :key="menu"
          class="px-6"
          :class="active_menu === i && active_menu_item === j && 'border-l'"
          @click="handleClick(i, j)"
        >
          <div class="flex items-center gap-2">
            <Icon :name="menu.icon" />
            <span>{{ menu.label }}</span>
          </div>
        </div>
      </span>
    </span>
    <div v-if="activeTabContent" class="flex-grow px-6 border-t">
      <Blocks
        :parent="props.builderBlock.id"
        :path="`component.options.menus.${active_menu}.menuItems.${active_menu_item}.content`"
        :blocks="activeTabContent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Blocks } from "@builder.io/sdk-vue";

const props = defineProps({
  menus: Array,
  builderBlock: Object,
  // other props...
});

const active_menu = ref(props.defaultActiveTab ? props.defaultActiveTab - 1 : 0);
const active_menu_item = ref(props.defaultActiveTab ? props.defaultActiveTab - 1 : 0);

const activeTabContent = computed(() => {
  return props.menus[active_menu.value].menuItems[active_menu_item.value].content;
});

function handleClick(i, j) {
  // handle tab click logic
  active_menu.value = i;
  active_menu_item.value = j;
}
</script>
