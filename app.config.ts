export default defineAppConfig({
  nuxtBEditaAppLayer: {
    name: 'Hello from Nuxt layer for BEdita apps'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    nuxtBEditaAppLayer?: {
      /** Project name */
      name?: string
    }
  }
}
