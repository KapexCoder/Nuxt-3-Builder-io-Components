<template>
    <div :class="twMerge('shadow-md rounded-lg overflow-hidden px-4', props.rootClass)">
        <slot>
            <div v-if="props.title" :class="twMerge('py-2 border-b', props.headerClass)">
                <slot name="header">
                    {{ props.title }}
                </slot>
            </div>
            <div v-if="props.body" :class="twMerge('py-2', props.bodyClass)">
                <slot name="content">
                    {{ props.body }}
                </slot>
            </div>
            <div v-if="props.footer" :class="twMerge('py-2 border-t', props.footerClass)">
                <slot name="footer">
                    {{ props.footer }}
                </slot>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

type Props = {
    title?: string;
    body?: string;
    footer?: string;
    rootClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
}

const props = defineProps<Props>();

</script>
