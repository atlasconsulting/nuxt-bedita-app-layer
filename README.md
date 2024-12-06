# Nuxt layer for BEdita apps

This is a Nuxt layer for building Nuxt apps needed BEdita API.

Once installed you can use every module, components, pages, composables, etc... present in the layer in your app without have to install 

It includes:

* `@atlasconsulting/nuxt-bedita`
* `@nuxtjs/tailwindcss`

## Use in Nuxt app

### Install layer package

Install the package

```bash
npm install --save `@atlasconsulting/nuxt-bedita-app-layer`
```

and add layer to `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  extends: ['@atlasconsulting/nuxt-bedita-app-layer'],
});
```

## Dev Setup

Make sure to install the dependencies:

```bash
npm install
```

## Working on layer

This layer is at the root of this repository, it is exactly like a regular Nuxt project.

The `.playground` directory should help you on trying your layer during development.

Running `npm run dev` will prepare and boot `.playground` directory, which imports your layer itself.
