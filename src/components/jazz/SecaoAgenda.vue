<template>
  <section id="agenda" class="py-20 px-10 bg-cream">
    <div class="max-w-4xl mx-auto">

      <!-- Título -->
      <h2 class="font-display text-4xl font-bold text-dark mb-2">Agenda</h2>
      <div class="h-1 w-16 bg-orange mb-4" />
      <p class="text-muted text-base mb-12">Próximas apresentações da Orquestra Brasil Jazz Sinfônica</p>

      <!-- Lista de eventos -->
      <div class="space-y-5">
        <article
          v-for="(evento, i) in agenda"
          :key="i"
          class="bg-white border border-cultborder rounded-xl overflow-hidden flex flex-col md:flex-row hover:border-orange hover:shadow-md transition-all group"
        >
          <!-- Data -->
          <div class="bg-dark text-white flex flex-col items-center justify-center px-8 py-6 md:w-40">
            <p class="font-display text-5xl font-bold leading-none">{{ evento.dataDia }}</p>
            <p class="text-orange text-sm font-bold uppercase tracking-widest mt-2">{{ evento.dataMes }}</p>
            <p class="text-white/60 text-xs uppercase tracking-wider mt-2">{{ evento.diaSemana }}</p>
          </div>

          <!-- Conteúdo -->
          <div class="flex-1 p-6 md:p-8">
            <h3 class="font-display text-2xl font-bold text-dark mb-2 group-hover:text-teal transition-colors">
              {{ evento.titulo }}
            </h3>
            <p class="text-muted text-sm leading-relaxed mb-4">{{ evento.descricao }}</p>

            <div class="flex flex-wrap items-center gap-4 text-sm text-mid">
              <span class="flex items-center gap-2">
                <span class="text-orange">●</span>
                <strong>{{ evento.local }}</strong>
              </span>
              <span class="flex items-center gap-2">
                <span class="text-orange">●</span>
                {{ evento.horario }}
              </span>
            </div>
          </div>

          <!-- Botão -->
          <div class="flex items-center px-6 md:px-8 pb-6 md:pb-0">
            <button class="w-full md:w-auto text-xs font-semibold uppercase tracking-widest text-teal border border-cultborder rounded px-6 py-3 group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-colors">
              Ingressos
            </button>
          </div>
        </article>
      </div>

      <!-- Aviso pra mocks -->
      <p class="text-xs text-muted text-center mt-8 italic">
        * Datas e ingressos sujeitos a alteração. Confirme no canal oficial da orquestra.
      </p>

    </div>
  </section>
</template>

<script setup>
import { agenda } from '@/composables/useJazzSinfonica.js'
</script>
