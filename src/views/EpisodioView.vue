<template>
  <div v-if="episodio" class="max-w-4xl mx-auto px-6 py-12">

    <!-- Voltar -->
    <div class="flex items-center gap-4 mb-8">
  <button @click="voltar" class="text-teal text-sm font-semibold hover:underline">
    ← Voltar
  </button>
  <span class="text-[10px] font-bold uppercase tracking-widest text-orange bg-orange/10 px-3 py-1 rounded">
    {{ programa.nome }}
  </span>
</div>
    <h1 class="font-display text-3xl font-bold text-dark mb-6">{{ episodio.titulo }}</h1>

    <!-- Player -->
    <div class="aspect-video rounded-xl overflow-hidden mb-8 bg-dark">
      <!-- Se tiver youtubeId, embeda o vídeo -->
      <iframe
        v-if="episodio.youtubeId"
        class="w-full h-full"
        :src="`https://www.youtube.com/embed/${episodio.youtubeId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <!-- Senão, placeholder -->
      <div
        v-else
        :class="`w-full h-full bg-gradient-to-br ${episodio.gradient} flex flex-col items-center justify-center text-center px-6`"
      >
        <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
          <span class="text-white text-2xl ml-1">▶</span>
        </div>
        <p class="text-white/80 font-semibold">Vídeo em breve</p>
        <p class="text-white/50 text-sm mt-1">{{ episodio.data }}</p>
      </div>
    </div>

    <!-- Descrição -->
    <div class="prose max-w-none">
      <p class="text-mid text-base leading-relaxed whitespace-pre-line">{{ episodio.descricao }}</p>
    </div>

  </div>

  <!-- Não encontrado -->
  <div v-else class="max-w-3xl mx-auto px-6 py-20 text-center">
    <p class="text-muted text-lg mb-4">Episódio não encontrado.</p>
    <RouterLink to="/programas" class="text-teal font-semibold hover:underline">
      Ver todos os programas
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEpisodio } from '@/composables/useProgramas.js'

const route = useRoute()
const router = useRouter()

const dados = computed(() => getEpisodio(route.params.id, route.params.epId))
const programa = computed(() => dados.value.programa)
const episodio = computed(() => dados.value.episodio)

function voltar() {
  if (window.history.state?.back) router.back()
  else router.push(`/programas/${route.params.id}`)
}
</script>
