<template>
  <div class="p-8 max-w-screen-md mx-auto space-y-8">
    <h1 class="text-3xl font-black">NUXT BEDITA APP LAYER</h1>
    <p>
      Esempio di utilizzo di una API BEdita4 per `<span class="font-mono">model/object_types</span>`.
    </p>

    <div>
    <p>Status: {{ error? 'error' : status }}</p>
    <p>Error: <span class="font-mono text-sm">{{ error? error : '-' }}</span></p>
    </div>

    <div>
      <button class="bg-sky-600 hover:bg-sky-500 text-white px-3 py-1 text-sm font-bold rounded"
        :class="{ '!bg-neutral-300 pointer-events-none': status === 'pending' }"
        :disabled="status === 'pending'"
        @click="refresh()">REFRESH</button>
    </div>

    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="(o, i) in data?.data" :key="i"
        class="text-black p-2"
        :class="!o.attributes.enabled? 'bg-gray-300 opacity-60' : 'bg-slate-300'">
        <p class="font-bold">{{ o.attributes.name }}</p>
        <p>enabled: {{ o.attributes.enabled }}</p>
      </div>
    </div>

    <div class="space-y-2">
      <header>
        <h2>OUTPUT</h2>
        <div>
          Numero di oggetti: {{ data?.data?.length || '-' }}
        </div>
      </header>
      <div class="bg-neutral-200 text-black p-3 text-xs">
        <pre class="max-w-full overflow-auto" v-text="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { data, status, error, refresh } = await useFetch<ApiResponseBodyList>('/api/bedita/model/object_types');
</script>
