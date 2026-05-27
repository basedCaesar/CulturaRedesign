<template>
  <section class="grid bg-white border-b border-cultborder" style="grid-template-columns: 1fr 400px;">

    <div class="relative min-h-[460px] overflow-hidden cursor-pointer group" @click="$router.push(`/noticias/${hero.id}`)">
      <div :class="`absolute inset-0 bg-gradient-to-br ${hero.gradient}`" />
      <div class="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/90 to-transparent" />
      <div class="absolute bottom-0 left-0 right-0 p-10">
        <span class="tag mb-4 inline-block">{{ hero.categoria }}</span>
        <h1 class="font-display text-3xl font-bold text-white leading-tight mb-3 group-hover:underline">
          {{ hero.titulo }}
        </h1>
        <p class="text-white/70 text-[15px] leading-relaxed">{{ hero.descricao }}</p>
      </div>
    </div>

    <div class="border-l border-cultborder flex flex-col">
      <div class="px-7 py-6 border-b border-cultborder">
        <p class="text-[11px] font-semibold uppercase tracking-widest text-teal mb-1">Agora na Cultura</p>
        <p class="text-sm text-muted">Quinta-feira, 21 de maio</p>
      </div>

      <div class="flex-1">
        <div
          v-for="item in schedule"
          :key="item.time"
          :class="['flex gap-4 px-7 py-3.5 border-b border-cultborder cursor-pointer transition-colors hover:bg-cream', item.now ? 'bg-orange/5' : '']"
        >
          <span :class="['text-sm font-semibold min-w-[50px] tabular-nums', item.now ? 'text-orange' : 'text-dark']">
            {{ item.time }}
          </span>
          <div>
            <span v-if="item.now" class="inline-block text-[10px] font-semibold uppercase tracking-wider text-orange bg-orange/10 px-2 py-0.5 rounded mb-1">
              Ao vivo
            </span>
            <p class="text-sm text-mid leading-snug">{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div class="px-7 py-4 border-t border-cultborder text-center">
        <RouterLink to="/grade" class="text-teal text-xs font-semibold uppercase tracking-widest hover:underline">
          Ver grade completa →
        </RouterLink>
      </div>
    </div>

  </section>
</template>

<script setup>
import { mockDestaques, mockSchedule } from '@/composables/useNews.js'

const hero = mockDestaques.find(n => n.hero)
const schedule = mockSchedule
</script>
