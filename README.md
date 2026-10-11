# Portfolio Igor Santos — Windows 98

React + Vite. Visual da biblioteca **98.css** (MIT). Todo o conteúdo editável em `src/data/siteConfig.js`.

## Rodar
```
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/ (Vercel, Netlify, Render, GitHub Pages)
```

## Doom de verdade
O motor é o js-dos v8 (carregado no `index.html`). Falta só o jogo:
1. Gere/baixe um bundle `.jsdos` do **DOOM shareware** (v1.9, distribuição livre).
2. Salve como `public/doom.jsdos`.
Sem o arquivo, a janela mostra um aviso.

## Navegador
Páginas internas (`igor://home`, `igor://projetos`, `igor://contato`) + web de verdade via Wayback Machine
(1997/1999/2001/2005) ou web atual. Muitos sites atuais bloqueiam exibição em moldura; use o botão "Nova aba".

## Som de inicialização
O boot é automático (BIOS → splash). O som é `public/startup.mp3`; se o navegador bloquear o autoplay, toca no primeiro clique/tecla/toque.

## Sons e ícones
A fanfarra de boot é original (sintetizada): a música e os ícones do Windows 98 são da Microsoft.
