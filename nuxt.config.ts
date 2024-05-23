// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss"
  ],

  // css customization
  css: [
    // 'assets/low-priorty.pcss',
    // 'assets/high-priorty.pcss'
  ],

  // Default Options for TailwindCss
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    // cssPath: [
    //   false,   // can also use when cssPath: false
    //   {
    //     injectPosition: { 
    //         // 'low-priority' will have lower priority than Tailwind stylesheet, 
    //         // while 'high-priorty' will override it
    //         after: 'assets/low-priorty.pcss'
    //     }
    //     injectPosition: 'first'   // default, equal to nuxt.options.css.unshift(cssPath)
    //     injectPosition: 'last'    // equal to nuxt.options.css.push(cssPath)
    //     injectPosition: 1         // after 'low-priority.pcss'
    //   }
    // ]
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})