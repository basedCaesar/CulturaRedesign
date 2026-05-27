# TV Cultura — Redesign Frontend

Stack: **Vue 3 + Vite + Tailwind CSS + Vue Router**

## Estrutura do projeto

```
src/
├── assets/
│   └── main.css              # Tailwind + custom components
├── components/
│   ├── layout/
│   │   ├── AppTopbar.vue     # Barra UOL superior
│   │   ├── AppHeader.vue     # Header com logo + nav + ao vivo
│   │   └── AppFooter.vue     # Footer completo
│   └── home/
│       ├── HeroSection.vue   # Hero + sidebar de programação
│       ├── DestaquesSection.vue
│       ├── NoticiasSection.vue
│       └── RadioSection.vue
├── composables/
│   └── useNews.js            # Mock data (substituir por API)
├── views/
│   ├── HomeView.vue
│   └── NoticiaView.vue
├── App.vue
└── main.js
```

## Setup

```bash
npm install
npm run dev
```

## Próximos passos

- [ ] Conectar a uma API real (ou CMS headless como Strapi/Contentful)
- [ ] Adicionar página de Programas
- [ ] Adicionar página de Rádio
- [ ] Implementar busca
- [ ] Adicionar player de vídeo ao vivo
- [ ] Responsividade mobile
