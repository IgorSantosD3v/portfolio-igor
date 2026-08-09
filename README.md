# Igor Santos — Portfolio

Portfólio pessoal desenvolvido em React, apresentando minha trajetória, projetos e
habilidades como desenvolvedor back-end.

**🔗 Acesse online:** _adicione aqui o link depois do deploy (veja a seção "Deploy" abaixo)_

![preview](./src/assets/igor-santos.jpg)

## Sobre o conceito

O design parte de uma referência literal: a foto de perfil, com estúdio escuro e luz
pontual quente. A identidade visual do site reaproveita essa paleta (preto profundo +
brilho dourado de "luz de estúdio") e organiza as seções como "cenas" — um paralelo com
o próprio cenário da foto — usando uma fonte serifada (Fraunces) para as chamadas
principais e uma fonte monoespaçada (JetBrains Mono) para rótulos técnicos, em
referência direta ao universo de back-end.

## Tecnologias utilizadas

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) como bundler e servidor de desenvolvimento
- CSS Modules para estilização isolada por componente (sem bibliotecas externas de UI)
- Google Fonts: Fraunces, Inter e JetBrains Mono

## Estrutura do projeto

```
portfolio-igor/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # imagens (foto de perfil)
│   ├── components/          # um componente por seção, cada um com seu .module.css
│   │   ├── Navbar/
│   │   ├── Hero/             # seção "Sobre mim"
│   │   ├── Trajectory/       # linha do tempo de evolução técnica
│   │   ├── Projects/         # grid de projetos (+ ProjectCard.jsx reutilizável)
│   │   ├── Skills/           # habilidades agrupadas por área
│   │   ├── Contact/          # formas de contato
│   │   └── Footer/
│   ├── data/                 # conteúdo separado da UI — edite aqui
│   │   ├── projects.js       # lista de projetos exibidos
│   │   └── trajectory.js     # linha do tempo + grupos de habilidades
│   ├── styles/
│   │   └── tokens.css        # cores, tipografia e espaçamentos (design tokens)
│   ├── App.jsx
│   ├── index.css             # reset + estilos globais
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Como rodar o projeto localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# 1. instale as dependências
npm install

# 2. inicie o servidor de desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço local (normalmente `http://localhost:5173`) — abra
no navegador. As alterações nos arquivos são refletidas automaticamente.

Para gerar a versão de produção (arquivos otimizados na pasta `dist/`):

```bash
npm run build
npm run preview   # opcional: testa a build de produção localmente
```

## Como personalizar o conteúdo

Você não precisa mexer nos componentes para atualizar o conteúdo:

- **Projetos:** edite `src/data/projects.js` — adicione, remova ou altere descrição,
  tecnologias e links de cada projeto.
- **Trajetória e habilidades:** edite `src/data/trajectory.js`.
- **E-mail de contato:** troque a constante `EMAIL` em
  `src/components/Contact/Contact.jsx` (está com um valor de exemplo).
- **Foto de perfil:** substitua `src/assets/igor-santos.jpg` por outra imagem com o
  mesmo nome, ou atualize o `import` em `src/components/Hero/Hero.jsx`.
- **Cores e tipografia:** ajuste as variáveis em `src/styles/tokens.css`.

## Deploy (gratuito)

Qualquer uma das opções abaixo funciona bem com este projeto (feito com Vite).

### Vercel (recomendado, mais simples)

1. Suba este projeto para um repositório no GitHub (veja seção abaixo).
2. Crie uma conta em [vercel.com](https://vercel.com) e clique em **Add New → Project**.
3. Selecione o repositório — a Vercel detecta o Vite automaticamente
   (build command: `npm run build`, output: `dist`).
4. Clique em **Deploy**. Em poucos segundos você recebe uma URL pública.

### Netlify

1. Suba o projeto para o GitHub.
2. Em [netlify.com](https://netlify.com), **Add new site → Import an existing project**.
3. Configure: **Build command:** `npm run build` · **Publish directory:** `dist`.
4. Deploy.

### GitHub Pages

1. No arquivo `vite.config.js`, ajuste `base` para o nome do seu repositório, por
   exemplo: `base: '/portfolio-igor/'`.
2. Gere a build: `npm run build`.
3. Publique o conteúdo da pasta `dist/` na branch `gh-pages` (você pode usar o pacote
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) ou o GitHub Actions).
4. Ative o GitHub Pages em **Settings → Pages**, apontando para a branch `gh-pages`.

## Publicando este projeto no GitHub

```bash
git init
git add .
git commit -m "feat: portfolio inicial"
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

- GitHub: [github.com/IgorSantosD3v](https://github.com/IgorSantosD3v)
- LinkedIn: [linkedin.com/in/igor-santos-7b993b357](https://www.linkedin.com/in/igor-santos-7b993b357)
