export const categorias = [
  'Todas',
  'Entretenimento',
  'Diversas',
  'Estação Cultura',
  'Esporte',
  'Educação',
  'Jazz Sinfônica',
]

const gradients = [
  'from-blue-900 to-teal',
  'from-purple-900 to-indigo-900',
  'from-amber-900 to-orange-900',
  'from-green-900 to-emerald-800',
  'from-red-900 to-rose-800',
  'from-slate-800 to-zinc-900',
  'from-teal to-cyan-900',
]

const base = [
  {
    categoria: 'Entretenimento',
    titulo: '"Está sendo transformador, absolutamente", afirma Gabriel Leone sobre a experiência da paternidade',
    descricao: 'Artista fala sobre a mudança que ser pai trouxe para sua vida',
  },
  {
    categoria: 'Diversas',
    titulo: 'Mulheres na música ativam a atitude roqueira, seja com guitarras, violões ou sonoridades mais pesadas',
    descricao: 'Rayane Fortes, Sophia Chablau, Carne Doce e ícones como Pitty, Gal Costa e As Mercenárias são destaques desta edição',
  },
  {
    categoria: 'Entretenimento',
    titulo: 'Gabriel Chalita recebe Antônio Pitanga, Daniela Lima e Fat Family no Arena dos Saberes',
    descricao: 'Edição inédita vai ao ar na TV Cultura nesta quinta-feira (28), a partir das 20h',
  },
  {
    categoria: 'Estação Cultura',
    titulo: 'Destaque Literário: música e palavras em diálogo',
    descricao: 'Laurent Binet e as dinâmicas de poder de um mundo sob novas lentes',
  },
  {
    categoria: 'Educação',
    titulo: 'Aprender fazendo: educação ambiental ganha espaço no Boas Práticas',
    descricao: 'Projeto leva alunos para fora da sala de aula e transforma a relação com o meio ambiente',
  },
  {
    categoria: 'Jazz Sinfônica',
    titulo: 'Brasil Jazz Sinfônica leva Pixinguinha, Tom Jobim e Piazzolla ao evento',
    descricao: 'Concerto especial celebra a obra de três gigantes da música instrumental',
  },
  {
    categoria: 'Esporte',
    titulo: 'Roda Viva entrevista o pentacampeão Cafu na próxima segunda-feira',
    descricao: 'Ex-lateral da Seleção fala sobre carreira, legado e o futuro do futebol nacional',
  },
  {
    categoria: 'Diversas',
    titulo: 'Cocoricó celebra 30 anos na TV Cultura com programação especial',
    descricao: 'Personagens clássicos voltam em episódios inéditos para marcar o aniversário',
  },
  {
    categoria: 'Entretenimento',
    titulo: 'No Roda Viva, diretor da Cruz Vermelha analisa impacto da violência urbana no Brasil',
    descricao: 'Pierre Krähenbühl discute os desafios humanitários em centros urbanos',
  },
  {
    categoria: 'Estação Cultura',
    titulo: 'Programa aborda a saúde mental em tempos de Inteligência Artificial',
    descricao: 'Café Filosófico debate os efeitos da tecnologia sobre o bem-estar psicológico',
  },
  {
    categoria: 'Educação',
    titulo: 'Boas Práticas Escolares investiga qual o papel da leitura na formação humana',
    descricao: 'Especialistas discutem como o hábito de ler molda o pensamento crítico',
  },
  {
    categoria: 'Diversas',
    titulo: '"A questão da desigualdade social nunca foi resolvida no Brasil", afirma Patrícia Melo',
    descricao: 'Escritora reflete sobre temas recorrentes em sua obra durante o Provoca',
  },
]

export const todasNoticias = Array.from({ length: 44 }, (_, i) => {
  const b = base[i % base.length]
  return {
    id: 1000 + i,
    categoria: b.categoria,
    titulo: b.titulo,
    descricao: b.descricao,
    data: '26/05/2026',
    gradient: gradients[i % gradients.length],
  }
})