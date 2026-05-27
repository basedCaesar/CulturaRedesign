<template>
  <div class="max-w-6xl mx-auto px-6 py-12">


    <div class="flex items-baseline justify-between mb-2 pb-4 border-b-2 border-teal">
      <h1 class="font-display text-3xl font-bold text-teal uppercase tracking-tight">
        {{ categoriaLabel }}
      </h1>
      <span class="text-sm text-muted">{{ filtradas.length }} resultados</span>
    </div>


    <div class="flex justify-end mt-6 mb-8">
      <div class="relative w-full md:w-64">
        <input
          v-model="busca"
          @input="page = 1"
          type="text"
          placeholder="Buscar..."
          class="w-full text-sm border border-cultborder rounded-lg pl-10 pr-4 py-2.5 focus:border-teal focus:outline-none transition-colors"
        />
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg">⌕</span>
      </div>
    </div>

    <div v-if="paginadas.length" class="flex flex-col gap-5">
      <NoticiaCard
        v-for="noticia in paginadas"
        :key="noticia.id"
        :noticia="noticia"
      />
    </div>

    <div v-else class="text-center py-20">
      <p class="text-muted text-lg">Nenhuma notícia encontrada nesta categoria.</p>
      <button v-if="busca" @click="busca = ''" class="mt-4 text-teal text-sm font-semibold hover:underline">
        Limpar busca
      </button>
    </div>

    <div v-if="totalPages > 1" class="mt-12">
      <PaginationNav
        :current="page"
        :total-pages="totalPages"
        @update:page="irParaPagina"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { todasNoticias } from '@/composables/useNoticias.js'
import NoticiaCard from '@/components/noticias/NoticiaCard.vue'
import PaginationNav from '@/components/ui/PaginationNav.vue'

const POR_PAGINA = 11
const route = useRoute()

const slugToCategoria = {
  esporte: 'Esporte',
  entretenimento: 'Entretenimento',
  educacao: 'Educação',
  diversas: 'Diversas',
  'estacao-cultura': 'Estação Cultura',
  'jazz-sinfonica': 'Jazz Sinfônica',
}

const categoria = computed(() => slugToCategoria[route.params.slug] || '')
const categoriaLabel = computed(() => categoria.value || 'Categoria')


const busca = ref('')
const page = ref(1)

watch(() => route.params.slug, () => {
  busca.value = ''
  page.value = 1
})

const filtradas = computed(() => {
  return todasNoticias.filter(n => {
    const matchCategoria = n.categoria === categoria.value
    const termo = busca.value.trim().toLowerCase()
    const matchBusca = !termo
      || n.titulo.toLowerCase().includes(termo)
      || n.descricao.toLowerCase().includes(termo)
    return matchCategoria && matchBusca
  })
})

const totalPages = computed(() => Math.ceil(filtradas.value.length / POR_PAGINA))

const paginadas = computed(() => {
  const inicio = (page.value - 1) * POR_PAGINA
  return filtradas.value.slice(inicio, inicio + POR_PAGINA)
})

function irParaPagina(p) {
  page.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>