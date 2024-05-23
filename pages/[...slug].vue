<template>
    <div id="home">
        <div>Hello world from your Nuxt 3 project. Below is Builder Content:</div>
        <div v-if="canShowContent">
            <div>
                Page title:
                {{ (content?.data?.title) || 'Unpublished' }}
            </div>
            <Content :model="model" :content="content" :api-key="apiKey" :customComponents="getRegisteredComponents()" />
        </div>
        <div v-else>Content not Found</div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Content, isPreviewing, fetchOneEntry } from '@builder.io/sdk-vue';
import { REGISTERED_COMPONENTS } from '~/builder/init-builder';

// TODO: enter your public API key
const apiKey = "0d74bb18ce734609828470be47b07616";

const route = useRoute();
const urlPath = computed(() => {
    if (!route.params.slug) {
        return '/';
    }
    return `/${route.params.slug.join('/')}`
});
const content = ref(null);
const model = ref(null);
const canShowContent = ref(false);

model.value = 'page';
// Fetch the Builder content for the page that matches the URL path
try {
    const response = await fetchOneEntry({
        model: model.value,
        apiKey,
        userAttributes: {
            urlPath: urlPath.value,
        },
    });
    content.value = response;
    canShowContent.value = content.value || isPreviewing();
} catch (error) {
    console.error('Builder content not found:', error);
    if (process.server) {
        // Set the HTTP response status code to 404 if no content is found
        const nuxtApp = useNuxtApp();
        nuxtApp.ssrContext.event.res.statusCode = 404;
    }
}

const getRegisteredComponents = () => {
    return REGISTERED_COMPONENTS;
}

</script>