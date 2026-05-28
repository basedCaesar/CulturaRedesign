<template>
  <div class="max-w-6xl mx-auto px-6 py-12">

    <!-- Título -->
    <div class="mb-2 pb-4 border-b-2 border-teal">
      <h1 class="font-display text-3xl font-bold text-teal uppercase tracking-tight">Programas</h1>
    </div>

    <!-- Tabs de categoria -->
    <nav class="flex items-center justify-center gap-2 md:gap-10 my-10 flex-wrap">
      <button
        v-for="cat in categoriasProgramas"
        :key="cat"
        @click="selecionar(cat)"
        :class="[
          'text-sm md:text-base font-semibold uppercase tracking-widest pb-2 border-b-2 transition-colors',
          categoriaAtiva === cat
            ? 'text-teal border-teal'
            : 'text-mid border-transparent hover:text-orange'
        ]"
      >
        {{ cat }}
      </button>
    </nav>

    <!-- Grid -->
    <div v-if="filtrados.length" ref="gridRef" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProgramaCard
        v-for="p in filtrados"
        :key="p.id"
        :programa="p"
      />
    </div>

    <!-- Estado vazio -->
    <div v-else class="text-center py-20">
      <p class="text-muted text-lg">Nenhum programa nesta categoria.</p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { programas, categoriasProgramas } from '@/composables/useProgramas.js'
import ProgramaCard from '@/components/programas/ProgramaCard.vue'

const categoriaAtiva = ref('Todos')
const gridRef = ref(null)

const filtrados = computed(() => {
  if (categoriaAtiva.value === 'Todos') return programas
  return programas.filter(p => p.categoria === categoriaAtiva.value)
})

function selecionar(cat) {
  categoriaAtiva.value = cat
  // Scroll suave de volta ao grid quando troca de aba
  if (gridRef.value) {
    const top = gridRef.value.getBoundingClientRect().top + window.scrollY - 200
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>
