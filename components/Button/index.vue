<template>
  <component
    :is="tag_element"
    :type="props.type"
    :to="props.to || props.href"
    :class="$attrs.class || twMerge('text-4xl')"
  >
    <slot>
      {{ props.label }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

type Props = {
  to?: string;
  href?: string;
  label?: string;
  
  type?: "button" | "submit" | "reset";
};

const props = defineProps<Props>();

const tag_element = computed(() => {
  if (props.to || props.href) return resolveComponent("NuxtLink");

  return "button";
});

</script>
