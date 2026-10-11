import { useEffect, useRef, useState } from 'react'
import { site, sobre, projetos } from './data/siteConfig.js'

const A = ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>

export function Notepad() {
  return (
    <textarea readOnly className="notepad" defaultValue={sobre} spellCheck={false} />
  )
}

export function Contato() {
  return (
    <div className="pad">
      <fieldset>
        <legend>Fale comigo</legend>
        <p>📧 <A href={`mailto:${site.email}`}>{site.email}</A></p>
        <p>💬 <A href={site.whatsapp}>{site.whatsappTxt} (WhatsApp)</A></p>
        <p>💼 <A href={site.linkedin}>LinkedIn</A></p>
        <p>🐙 <A href={site.github}>github.com/IgorSantosD3v</A></p>
        <p>📷 <A href={site.instagram}>@igorp.y</A></p>
        <p>📍 {site.local}</p>
      </fieldset>
      <p>Aberto a vagas <b>Back-end / Full Stack</b> (Jr/Pleno), remoto ou híbrido, no Brasil e no exterior.</p>
    </div>
  )
}

export function Explorer() {
  const [sel, setSel] = useState(projetos[0])
  return (
    <div className="explorer">
      <ul className="tree-view plist">
        {projetos.map((p) => (
          <li key={p.nome} onClick={() => setSel(p)} className={sel === p ? 'sel' : ''}>
            {p.url ? '📁' : '🔒'} {p.nome}
          </li>
        ))}
      </ul>
      <div className="pinfo">
        <h4>{sel.nome}</h4>
        <p>{sel.txt}</p>
        {sel.url && <p><A href={sel.url}>Abrir no GitHub →</A></p>}
      </div>
    </div>
  )
}

export function Orkut() {
  return (
    <div className="orkut">
      <div className="ok-hd">orkut <small>Início · Perfil · Amigos · Recados · Comunidades</small></div>
      <div className="ok-cols">
        <div className="ok-c1">
          <div className="ok-card"><div className="ok-av">🧑‍💻</div><h3>{site.nome}</h3><p>Anápolis, GO · Brasil<br /><i>"Sistema que não quebra quando o volume aumenta."</i></p></div>
          <div className="ok-card"><h3>Status</h3>🟢 Buscando vaga Back-end/Full Stack<br /><br /><b>Confiável</b> ★★★<br /><b>Legal</b> ★★★<br /><b>Deploy</b> ★★★</div>
        </div>
        <div className="ok-c2">
          <div className="ok-card"><h3>Sobre mim</h3>Dev back-end (Python/FastAPI, C#/ASP.NET) e fundador da Flow. Ex-Wooba, ex-indústria farmacêutica. Estudando System Design e inglês.</div>
          <div className="ok-card"><h3>Recados (4)</h3>
            <p><b>Flowzinho 🤖</b>: Igor, o cliente pediu "só um ajustezinho"... 😅</p>
            <p><b>Mercado Pago</b>: webhook confirmado, pode dormir tranquilo!</p>
            <p><b>PostgreSQL</b>: tô de olho nos seus índices parciais 👀</p>
            <p><b>Recrutador(a) ✨</b>: vi seu portfólio, bora conversar? <A href={site.whatsapp}>Enviar scrap</A></p>
          </div>
          <div className="ok-card"><h3>Comunidades (8)</h3>🐍 Python Brasil · ⚡ FastAPI BR · 🔷 C# Devs · 💊 Ex-farma que virou dev · 🤖 IA Generativa · 🧱 Clean Architecture · ☕ Só funciono depois do café · 🐛 Funciona na minha máquina</div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Navegador: páginas internas + web de verdade (Wayback Machine em modo 1999) ---------- */
const interno = (corpo) => `<body style="font:14px 'Times New Roman',serif;margin:14px"><style>h1{font:bold 22px Arial;color:#000080}a{color:#00e}</style>${corpo}</body>`
const PAGINAS = {
  'igor://home': interno(`<h1>Bem-vindo à home do Igor!</h1><p>🚧 <b>Site em construção</b> 🚧</p><p>Back-end · Python · C# · IA Generativa. Fundador da <b>Flow</b>.</p><p>Digite um endereço acima (ex.: <code>google.com</code>) para ver como era a web em 1999.</p><p><small>Melhor visualizado em 800x600 💾</small></p>`),
  'igor://projetos': interno(`<h1>Projetos</h1><ul>${projetos.map((p) => `<li><b>${p.nome}</b> — ${p.txt} ${p.url ? `<a target=_blank href="${p.url}">[código]</a>` : ''}</li>`).join('')}</ul>`),
  'igor://contato': interno(`<h1>Contato</h1><ul><li><a href="mailto:${site.email}">${site.email}</a></li><li><a target=_blank href="${site.whatsapp}">WhatsApp ${site.whatsappTxt}</a></li><li><a target=_blank href="${site.linkedin}">LinkedIn</a></li><li><a target=_blank href="${site.github}">GitHub</a></li></ul>`),
}

export function Navegador() {
  const [url, setUrl] = useState('igor://home')
  const [campo, setCampo] = useState('igor://home')
  const [ano, setAno] = useState('1999')
  const ir = (u) => {
    u = u.trim() || 'igor://home'
    if (!u.startsWith('igor://') && !/^https?:\/\//.test(u)) u = 'http://' + u
    setUrl(u); setCampo(u)
  }
  const interna = url.startsWith('igor://')
  const src = interna ? undefined : ano === 'atual' ? url : `https://web.archive.org/web/${ano}/${url}`
  return (
    <div className="ie">
      <div className="ie-bar">
        <button onClick={() => ir('igor://home')}>🏠 Início</button>
        <button onClick={() => ir('igor://projetos')}>Projetos</button>
        <button onClick={() => ir('igor://contato')}>Contato</button>
        <select value={ano} onChange={(e) => setAno(e.target.value)} title="Ano da web">
          {['1997', '1999', '2001', '2005', 'atual'].map((a) => <option key={a} value={a}>{a === 'atual' ? 'Web atual' : `Web de ${a}`}</option>)}
        </select>
      </div>
      <div className="ie-bar">
        <span>Endereço:</span>
        <input value={campo} onChange={(e) => setCampo(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && ir(campo)} />
        <button onClick={() => ir(campo)}>Ir</button>
        {!interna && <button onClick={() => window.open(src, '_blank')}>↗ Nova aba</button>}
      </div>
      <iframe className="ie-page" title="página" {...(interna ? { srcDoc: PAGINAS[url] || interno('<h1>A página não pode ser exibida</h1><p>Erro 404</p>') } : { src })} />
      <div className="status-bar"><p className="status-bar-field">{interna ? 'Concluído' : 'Alguns sites bloqueiam exibição em moldura; use "Nova aba".'}</p></div>
    </div>
  )
}

/* ---------- DOOM de verdade (js-dos). Coloque o bundle shareware em public/doom.jsdos ---------- */
export function Doom() {
  const ref = useRef(null)
  const [erro, setErro] = useState(false)
  useEffect(() => {
    let inst
    fetch('/doom.jsdos', { method: 'HEAD' })
      .then((r) => {
        if (!r.ok || !window.Dos) throw new Error('sem bundle')
        inst = window.Dos(ref.current, { url: '/doom.jsdos' })
      })
      .catch(() => setErro(true))
    return () => { try { inst && inst.stop() } catch {} }
  }, [])
  if (erro) return <div className="pad"><p><b>DOOM.EXE não encontrado.</b></p><p>Coloque o bundle shareware do Doom em <code>public/doom.jsdos</code> (veja o README).</p></div>
  return <div ref={ref} className="doomwrap" />
}

export const APPS = {
  sobre:    { titulo: 'Sobre mim.txt - Bloco de notas', icone: '📝', rotulo: 'Sobre mim', w: 560, h: 440, C: Notepad },
  projetos: { titulo: 'Meus Projetos', icone: '📁', rotulo: 'Projetos', w: 560, h: 340, C: Explorer },
  ie:       { titulo: 'Internet Explorer', icone: '🌐', rotulo: 'Internet', w: 700, h: 500, C: Navegador },
  orkut:    { titulo: 'orkut - Igor Santos', icone: '💜', rotulo: 'Orkut', w: 680, h: 480, C: Orkut },
  doom:     { titulo: 'DOOM', icone: '👹', rotulo: 'DOOM', w: 680, h: 520, C: Doom },
  contato:  { titulo: 'Contato', icone: '📇', rotulo: 'Contato', w: 380, h: 330, C: Contato },
  virus:    { titulo: 'VIRUS.EXE', icone: '☠️', rotulo: 'VIRUS.EXE', w: 340, h: 190, C: null },
}
