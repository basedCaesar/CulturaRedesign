<template>
  <section class="bg-white px-10 py-12">
    <div class="flex items-baseline justify-between mb-7 pb-4 border-b-2 border-dark">
      <h2 class="section-title">Destaques</h2>
      <RouterLink to="/noticias" class="section-link">Ver todos →</RouterLink>
    </div>

    <div class="grid grid-cols-3 gap-7">
      <article
        v-for="item in destaques"
        :key="item.id"
        class="group cursor-pointer"
        @click="$router.push(`/noticias/${item.id}`)"
      >
        <div :class="`aspect-video rounded-lg overflow-hidden mb-4 relative bg-gradient-to-br ${item.gradient}`" />
        <p class="card-category">{{ item.categoria }}</p>
        <h3 class="card-title mb-2 group-hover:text-teal transition-colors">{{ item.titulo }}</h3>
        <span class="text-xs text-muted">{{ item.tempo }}</span>
      </article>
    </div>
  </section>
</template>

<script setup>
import { mockDestaques } from '@/composables/useNews.js'

const destaques = mockDestaques.filter(n => !n.hero)
</script>