// Edite aqui: todo o conteúdo do "computador".
export const site = {
  nome: 'Igor Santos',
  email: 'Igorsantosdevp@gmail.com',
  whatsapp: 'https://wa.me/5562991474857',
  whatsappTxt: '+55 62 99147-4857',
  linkedin: 'https://www.linkedin.com/in/igor-santos-devzao', // confira: o repo portfolio-igor usa igor-santos-7b993b357
  github: 'https://github.com/IgorSantosD3v',
  instagram: 'https://www.instagram.com/igorp.y/',
  local: 'Anápolis, GO — Brasil',
}

export const sobre = `SOBRE MIM.TXT
=============================================
Sou desenvolvedor back-end e fundador de produto. Trabalho principalmente com Python (FastAPI) e C# (ASP.NET, ASP.NET MVC), construindo APIs REST, integrações com IA generativa e sistemas que lidam com dinheiro de verdade, mensagens de verdade e clientes de verdade.

Passei pelo desenvolvimento corporativo na Wooba, mantendo fluxos de busca de voos e hotéis de uma plataforma de viagens em produção, e hoje toco a Flow, minha marca de produtos SaaS. O principal deles é o AgendaFlow, um sistema de agendamento com Painel de Controle (um CRM completo), Painel Recepção e bot de atendimento por IA no WhatsApp, rodando em produção. Os clientes dos produtos Flow pagam suas mensalidades pelo FlowPay, nosso app de pagamentos.

Antes da tecnologia, trabalhei na operação de indústrias farmacêuticas, e isso ficou: gosto de processo, de rastreabilidade e de sistema que não quebra quando o volume aumenta.

FORMAÇÃO
 - Desenvolvimento Back-end Python — EBAC (concluído)
 - Engenharia de Software — FIAP
 - Estudando: System Design, Clean Architecture, cloud e inglês

BUSCANDO
 Vaga de Desenvolvedor Back-end ou Full Stack, nível Júnior/Pleno, nacional ou internacional, remoto ou híbrido.

CONTATO
 E-mail:   Igorsantosdevp@gmail.com
 WhatsApp: +55 62 99147-4857
 LinkedIn: linkedin.com/in/igor-santos-devzao
 GitHub:   github.com/IgorSantosD3v
`

const gh = (r) => `https://github.com/IgorSantosD3v/${r}`
export const projetos = [
  { nome: 'AgendaFlow', txt: 'SaaS de agendamento com CRM, Painel Recepção e bot de IA no WhatsApp (Python, FastAPI, PostgreSQL, Claude API, PIX). Código privado — demo em entrevista.' },
  { nome: 'FlowPay', txt: 'App Android (Flutter) para clientes Flow pagarem faturas: login por código no WhatsApp, push, token no Keystore.' },
  { nome: 'API de Livros', txt: 'API REST de livros.', url: gh('livros-api') },
  { nome: 'Pokémon API', txt: 'API REST que organiza dados da PokéAPI.', url: gh('pokemon-api') },
  { nome: 'Micro-Frontends Restaurante', txt: 'Cardápio digital com micro-frontends.', url: gh('micro-frontends-restaurante') },
  { nome: 'Catálogo de Produtos', txt: 'Catálogo otimizado para performance.', url: gh('catalogo-produtos-performance') },
  { nome: 'To-Do React Avançado', txt: 'Gerenciador de tarefas com Hooks avançados.', url: gh('todo-react-avancado') },
]
