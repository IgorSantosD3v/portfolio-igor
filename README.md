<div align="center">

<img src="./src/assets/igor-santos.jpg" alt="Igor Santos" width="180" style="border-radius: 50%;" />

# Igor Santos
### Desenvolvedor Back-End · Python · C# · IA Generativa

[![React](https://img.shields.io/badge/React-18-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-F0A202?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-6C4AB6?style=flat-square&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![License](https://img.shields.io/badge/license-MIT-201C14?style=flat-square)](#)

**[🔗 Ver site publicado](#)** &nbsp;·&nbsp; **[💬 Falar no WhatsApp](https://wa.me/5562991474857)** &nbsp;·&nbsp; **[💼 LinkedIn](https://www.linkedin.com/in/igor-santos-7b993b357)**

</div>

---

## Sobre o projeto

Portfólio pessoal desenvolvido em **React**, apresentando minha trajetória, projetos e
habilidades como desenvolvedor back-end. O objetivo foi construir uma experiência
rápida, acessível e com uma hierarquia visual clara — sem ruído, sem excesso — na
mesma linha de produtos de tecnologia bem construídos.

### Identidade visual

A paleta nasce da própria foto de perfil: **amarelo** como cor de marca (energia,
otimismo, atenção) e um **roxo sutil** como contraste secundário, usado com moderação
em detalhes — bordas, badges, estados de foco — sem nunca competir com o amarelo ou
com a leitura do conteúdo. Botões de ação usam alto contraste e formato de pílula,
para que fiquem sempre óbvios e clicáveis.

| Token | Uso |
|---|---|
| 🟡 `--yellow` | Cor de marca — botões primários, destaques |
| 🟣 `--purple` | Contraste secundário — links, badges, foco |
| 🟢 `--whatsapp` | Reservada exclusivamente para os botões de WhatsApp |

## Tecnologias utilizadas

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) como bundler e servidor de desenvolvimento
- **CSS Modules** para estilização isolada por componente — sem bibliotecas externas de UI
- Google Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## Funcionalidades

- ✅ Seções: Sobre, Trajetória, Projetos, Habilidades e Contato
- ✅ Botão de **WhatsApp** flutuante (sempre visível) + card de contato dedicado
- ✅ Totalmente **responsivo** — mobile, tablet e desktop
- ✅ Navegação por âncoras com menu mobile animado
- ✅ Acessibilidade: foco de teclado visível, textos alternativos, `prefers-reduced-motion`
- ✅ Imagem de perfil otimizada para performance de carregamento

## Estrutura do projeto

```
portfolio-igor/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                  # foto de perfil (otimizada para web)
│   ├── components/              # um componente por seção, cada um com seu .module.css
│   │   ├── Navbar/
│   │   ├── Hero/                 # seção "Sobre mim"
│   │   ├── Trajectory/           # linha do tempo de evolução técnica
│   │   ├── Projects/              # grid de projetos (+ ProjectCard.jsx reutilizável)
│   │   ├── Skills/                # habilidades agrupadas por área
│   │   ├── Contact/                # canais de contato
│   │   ├── Footer/
│   │   └── WhatsappButton/        # botão flutuante de contato
│   ├── data/                     # conteúdo separado da UI — edite aqui
│   │   ├── siteConfig.js         # nome, e-mail, redes sociais, WhatsApp
│   │   ├── projects.js           # lista de projetos exibidos
│   │   └── trajectory.js         # linha do tempo + grupos de habilidades
│   ├── styles/
│   │   └── tokens.css            # cores, tipografia e espaçamentos (design tokens)
│   ├── App.jsx
│   ├── index.css                 # reset + estilos globais
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Como rodar o projeto localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# 1. instale as dependências
npm install

# 2. inicie o servidor de desenvolvimento
npm run dev
```

O terminal mostrará um endereço local (normalmente `http://localhost:5173`) — abra no
navegador. As alterações nos arquivos são refletidas automaticamente.

Para gerar a versão de produção (arquivos otimizados na pasta `dist/`):

```bash
npm run build
npm run preview   # opcional: testa a build de produção localmente
```

## Como personalizar o conteúdo

Não é necessário mexer nos componentes para atualizar o conteúdo:

| O que mudar | Onde editar |
|---|---|
| E-mail, WhatsApp, GitHub, LinkedIn | `src/data/siteConfig.js` |
| Projetos exibidos | `src/data/projects.js` |
| Trajetória e habilidades | `src/data/trajectory.js` |
| Foto de perfil | substitua `src/assets/igor-santos.jpg` (mesmo nome) |
| Cores e tipografia | `src/styles/tokens.css` |

> ⚠️ Antes de publicar, troque o e-mail de exemplo em `src/data/siteConfig.js`
> (constante `email`) pelo seu e-mail real.

## Deploy

O projeto é 100% estático (Vite) e pode ser publicado gratuitamente em qualquer uma
das plataformas abaixo.

### Render

1. Suba o projeto para o GitHub (veja a seção seguinte).
2. Em [render.com](https://render.com), clique em **New → Static Site** e conecte o repositório.
3. **Build Command:** `npm run build` · **Publish Directory:** `dist`
4. Clique em **Create Static Site** — o deploy acontece automaticamente a cada push na `main`.

### Vercel

1. Suba o projeto para o GitHub.
2. Em [vercel.com](https://vercel.com), **Add New → Project** e selecione o repositório.
3. A Vercel detecta o Vite automaticamente (build: `npm run build`, output: `dist`).
4. Clique em **Deploy**.

### Netlify

1. Suba o projeto para o GitHub.
2. Em [netlify.com](https://netlify.com), **Add new site → Import an existing project**.
3. **Build command:** `npm run build` · **Publish directory:** `dist`.

### GitHub Pages

1. Em `vite.config.js`, ajuste `base` para o nome do repositório, ex.: `base: '/portfolio-igor/'`.
2. Gere a build: `npm run build`.
3. Publique a pasta `dist/` na branch `gh-pages` (via [`gh-pages`](https://www.npmjs.com/package/gh-pages) ou GitHub Actions).
4. Ative em **Settings → Pages**, apontando para a branch `gh-pages`.

## Publicando este projeto no GitHub

```bash
git init
git add .
git commit -m "feat: portfolio v2 — nova identidade visual"
git branch -M main
git remote add origin https://github.com/IgorSantosD3v/SEU-REPOSITORIO.git
git push -u origin main
```

## Projetos apresentados

| Projeto | Descrição | Repositório |
|---|---|---|
| **Pokémon API** | API REST que consome e organiza dados da PokéAPI. | [ver código](https://github.com/IgorSantosD3v/pokemon-api) |
| **Micro-Frontends Restaurante** | Cardápio digital com arquitetura de micro-frontends. | [ver código](https://github.com/IgorSantosD3v/micro-frontends-restaurante) |
| **Catálogo de Produtos — Performance** | Catálogo de produtos otimizado para performance. | [ver código](https://github.com/IgorSantosD3v/catalogo-produtos-performance) |
| **To-Do React Avançado** | Gerenciador de tarefas com React Hooks avançados. | [ver código](https://github.com/IgorSantosD3v/todo-react-avancado) |

Todos os repositórios: [github.com/IgorSantosD3v](https://github.com/IgorSantosD3v?tab=repositories)

## Contato

<div align="left">

| Canal | Link |
|---|---|
| 💬 WhatsApp | [+55 62 99147-4857](https://wa.me/5562991474857) |
| 💼 LinkedIn | [linkedin.com/in/igor-santos-7b993b357](https://www.linkedin.com/in/igor-santos-7b993b357) |
| 🐙 GitHub | [github.com/IgorSantosD3v](https://github.com/IgorSantosD3v) |

</div>

---

<div align="center">
<sub>Feito com React por Igor Santos © 2026</sub>
</div>
