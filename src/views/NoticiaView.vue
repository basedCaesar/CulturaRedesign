<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <div class="flex items-center gap-4 mb-6">
      <button @click="voltar" class="text-teal text-sm font-semibold hover:underline">
        ← Voltar
      </button>
      <span class="tag">{{ noticia.categoria }}</span>
    </div>
    <h1 class="font-display text-4xl font-bold text-dark leading-tight mb-4">{{ noticia.titulo }}</h1>
    <p class="text-muted text-sm mb-8">{{ noticia.tempo }}</p>
    <div :class="`w-full aspect-video rounded-xl mb-8 bg-gradient-to-br ${noticia.gradient}`" />
    <p class="text-mid text-lg leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockDestaques, mockNoticias } from '@/composables/useNews.js'
import { todasNoticias } from '@/composables/useNoticias.js'

const route = useRoute()
const router = useRouter()

const all = [...mockDestaques, ...mockNoticias, ...todasNoticias]
const noticia = computed(() => all.find(n => n.id === Number(route.params.id)) || all[0])

function voltar() {
  if (window.history.state?.back) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>