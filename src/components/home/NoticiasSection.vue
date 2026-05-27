<template>
  <section class="bg-white border-y border-cultborder px-10 py-12">
    <div class="flex items-baseline justify-between mb-7 pb-4 border-b-2 border-dark">
      <h2 class="section-title">Últimas Notícias</h2>
      <RouterLink to="/noticias" class="section-link">Ver todas →</RouterLink>
    </div>

    <div class="grid grid-cols-4 gap-7">
      <article
        v-for="item in noticias"
        :key="item.id"
        class="group cursor-pointer"
        @click="$router.push(`/noticias/${item.id}`)"
      >
        <div :class="`aspect-[3/2] rounded-md mb-3.5 bg-gradient-to-br ${item.gradient}`" />
        <p class="text-[11px] font-semibold uppercase tracking-widest text-orange mb-1.5">{{ item.categoria }}</p>
        <h3 class="text-[15px] font-medium text-dark leading-snug group-hover:text-teal transition-colors">{{ item.titulo }}</h3>
      </article>
    </div>
  </section>
</template>

<script setup>
import { mockNoticias } from '@/composables/useNews.js'
const noticias = mockNoticias
</script>
