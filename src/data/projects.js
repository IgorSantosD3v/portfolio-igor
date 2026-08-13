// Edite este arquivo para atualizar os projetos exibidos na seção "Projetos".
// Cada projeto aceita: number, title, description, tags, repoUrl e, opcionalmente, demoUrl.

export const projects = [
  {
    id: 'pokemon-api',
    number: '01',
    title: 'Pokémon API',
    description:
      'API REST que consome e organiza dados da PokéAPI, com foco em estrutura de rotas clara, tratamento de respostas e boas práticas de consumo de APIs externas.',
    tags: ['Python', 'REST API', 'Integração externa'],
    repoUrl: 'https://github.com/IgorSantosD3v/pokemon-api',
  },
  {
  id: 'tarefas-app',
  number: '02',
  title: 'Lista de Tarefas',
  description:
    'Aplicação em Next.js 15 (App Router + TypeScript) para listagem e adição de tarefas. A página inicial roda como Server Component e busca os dados de forma assíncrona, enquanto o formulário de criação é um Client Component com validação própria. Cobertura de testes unitários e de integração com Jest e React Testing Library.',
  tags: ['Next.js', 'TypeScript', 'Testes automatizados'],
  repoUrl: 'https://github.com/IgorSantosD3v/tarefas-app',
  },
  {
    id: 'catalogo-produtos-performance',
    number: '03',
    title: 'Catálogo de Produtos — Performance',
    description:
      'Catálogo de produtos otimizado para performance de renderização, com atenção ao carregamento de listas grandes, imagens e experiência em diferentes dispositivos.',
    tags: ['React', 'Performance', 'Otimização'],
    repoUrl: 'https://github.com/IgorSantosD3v/catalogo-produtos-performance',
  },
  {
    id: 'todo-react-avancado',
    number: '04',
    title: 'To-Do React Avançado',
    description:
      'Gerenciador de tarefas construído com React Hooks avançados, explorando gerenciamento de estado, persistência e componentização reutilizável.',
    tags: ['React', 'Hooks', 'Gerenciamento de estado'],
    repoUrl: 'https://github.com/IgorSantosD3v/todo-react-avancado',
  },
]
