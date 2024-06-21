<template>
  <component
    :is="tag_element"
    :type="props.type"
    :to="props.to || props.href"
    :class="$attrs.class || twMerge(props.baseClass , props.appendClass)"
  >
    <slot>
      {{ props.label }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
}

type NuxtLinkProps = {
  to?: string;
  href?: string;
}

type Props = ButtonProps & NuxtLinkProps & {
  label?: string;
  baseClass?: string;
  appendClass?: string;
};

const props = withDefaults(defineProps<Props>(), {
  baseClass: "bg-white border shadow-md rounded-full px-4 py-1"
});

const tag_element = computed(() => {
  if (props.to || props.href) return resolveComponent("NuxtLink");

  return "button";
});

</script>
