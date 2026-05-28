<template>
  <div class="max-w-6xl mx-auto px-6 py-12">

    <!-- Título -->
    <div class="mb-10 pb-4 border-b-2 border-teal">
      <h1 class="font-display text-3xl font-bold text-teal uppercase tracking-tight">Podcasts</h1>
    </div>

    <!-- Lista -->
    <div class="flex flex-col gap-6">
      <PodcastCard
        v-for="podcast in podcasts"
        :key="podcast.id"
        :podcast="podcast"
      />
    </div>

  </div>
</template>

<script setup>
import { podcasts } from '@/composables/usePodcasts.js'
import PodcastCard from '@/components/podcasts/PodcastCard.vue'
</script>
