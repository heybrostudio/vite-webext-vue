<script setup lang="ts">
import logo from '$/assets/logo.svg'

const props = defineProps<{ msg: string }>()
const logoImageUrl = new URL(logo, import.meta.url).href
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 bg-zinc-800 border border-zinc-600 border-solid border-2 rounded-4 box-border p-8 font-mono">
    <img :src="logoImageUrl" width="500">
    <div class="text-zinc-100 text-5">
      {{ props.msg }}
    </div>
    <div class="flex items-center justify-center gap-8">
      <a href="https://github.com/heybrostudio" target="_blank" class="text-zinc-500 hover:text-green-400 transition-all">@HeyBroStudio</a>
      <a href="https://github.com/keyding" target="_blank" class="text-zinc-500 hover:text-green-400 transition-all">@Caven</a>
    </div>
  </div>
</template>
