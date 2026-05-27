<template>
  <header class="bg-white border-b border-cultborder sticky top-0 z-50">
    <div class="px-10 h-20 flex items-center justify-between gap-6">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 flex-shrink-0">
        <img
          src="@/assets/cultura_logo.jpg"          alt="TV Cultura"
          class="h-12 w-auto"
          @error="onLogoError"
        />
        <div class="flex flex-col leading-none gap-0.5">
          <span class="font-body text-[11px] font-bold uppercase tracking-widest text-muted">TV</span>
          <span class="font-display text-xl font-bold text-orange leading-none">Cultura</span>
        </div>
      </RouterLink>

      <!-- Nav -->
      <nav class="flex items-center gap-1 flex-1 justify-center">
        <RouterLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="nav-link px-3 py-2"
          :class="{ active: $route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Right -->
      <div class="flex items-center gap-3 flex-shrink-0">
        <a href="https://cultura.uol.com.br/aovivo/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">

        <button class="flex items-center gap-2 bg-orange text-white text-xs font-semibold px-4 py-2.5 rounded-md uppercase tracking-widest hover:bg-orange-hover transition-colors">
          
            

          <span class="w-2 h-2 bg-white rounded-full animate-pulse" />
          Ao Vivo
        </button>
        <button class="w-10 h-10 border border-cultborder rounded-lg flex items-center justify-center text-muted hover:border-teal hover:text-teal transition-colors text-lg">
          ⌕
        </button>
        </a>
      </div>

    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()

const navItems = [
  { label: 'Notícias', to: '/noticias' },
  { label: 'Esporte', to: '/esporte' },
  { label: 'Entretenimento', to: '/entretenimento' },
  { label: 'Jazz Sinfônica', to: '/jazz' },
  { label: 'Programas', to: '/programas' },
  { label: 'Grade', to: '/grade' },
  { label: 'Rádio', to: '/radio' },
  { label: 'Podcasts', to: '/podcasts' },
]

function onLogoError(e) {
  e.target.style.display = 'none'
}
</script>
