<template>
  <div v-if="programa" class="max-w-6xl mx-auto px-6 py-12">

    <!-- Voltar -->
    <button @click="voltar" class="text-teal text-sm font-semibold hover:underline mb-8 inline-block">
      ← Voltar
    </button>

    <!-- Header do programa -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <!-- Info -->
      <div class="flex flex-col justify-center">
        <h1 class="font-display text-4xl font-bold text-teal uppercase mb-4">{{ programa.nome }}</h1>
        <span class="inline-block self-start text-[10px] font-bold uppercase tracking-widest text-orange bg-orange/10 px-3 py-1 rounded mb-6">
          {{ programa.categoria }}
        </span>
        <p class="text-mid text-base leading-relaxed">{{ programa.descricaoLonga }}</p>
      </div>

      <!-- Banner placeholder -->
      <div :class="`aspect-video rounded-xl bg-gradient-to-br ${programa.gradient} flex items-center justify-center`">
        <span class="font-display text-white/40 text-2xl font-bold tracking-widest text-center px-6">
          {{ programa.nome.toUpperCase() }}
        </span>
      </div>
    </div>

    <!-- Histórico de episódios -->
    <div class="flex items-baseline justify-between mb-8 pb-4 border-b-2 border-dark">
      <h2 class="font-display text-2xl font-bold text-dark uppercase">Histórico de programas</h2>
      <span class="text-sm text-muted">{{ programa.episodios.length }} episódios</span>
    </div>

    <div v-if="programa.episodios.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <EpisodioCard
        v-for="ep in episodiosPaginados"
        :key="ep.id"
        :episodio="ep"
        :programa-id="programa.id"
      />
    </div>

<div v-else class="text-center py-16">
  <p class="text-muted text-base">Nenhum episódio disponível no momento.</p>
</div>
    
    <!-- Paginação -->
    <div v-if="totalPages > 1" class="mt-12">
      <PaginationNav
        :current="page"
        :total-pages="totalPages"
        @update:page="irParaPagina"
      />
    </div>

  </div>

  <!-- Programa não encontrado -->
  <div v-else class="max-w-3xl mx-auto px-6 py-20 text-center">
    <p class="text-muted text-lg mb-4">Programa não encontrado.</p>
    <RouterLink to="/programas" class="text-teal font-semibold hover:underline">
      Ver todos os programas
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProgramaPorId } from '@/composables/useProgramas.js'
import EpisodioCard from '@/components/programas/EpisodioCard.vue'
import PaginationNav from '@/components/ui/PaginationNav.vue'

const POR_PAGINA = 8
const route = useRoute()
const router = useRouter()

const programa = computed(() => getProgramaPorId(route.params.id))
const page = ref(1)

watch(() => route.params.id, () => { page.value = 1 })

const totalPages = computed(() =>
  programa.value ? Math.ceil(programa.value.episodios.length / POR_PAGINA) : 0
)

const episodiosPaginados = computed(() => {
  if (!programa.value) return []
  const inicio = (page.value - 1) * POR_PAGINA
  return programa.value.episodios.slice(inicio, inicio + POR_PAGINA)
})

function irParaPagina(p) {
  page.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function voltar() {
  if (window.history.state?.back) router.back()
  else router.push('/programas')
}
</script>
