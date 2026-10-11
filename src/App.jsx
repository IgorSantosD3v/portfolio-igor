import { useEffect, useRef, useState } from 'react'
import { APPS } from './apps.jsx'
import Virus from './Virus.jsx'
import { tocarStartup } from './sound.js'
import Bios from './Bios.jsx'
import { Icon } from './icons.jsx'

const ORDEM = ['sobre', 'projetos', 'ie', 'orkut', 'doom', 'contato', 'virus']
const coarse = typeof matchMedia !== 'undefined' && matchMedia('(pointer:coarse)').matches

function Janela({ id, w, foco, onFoco, onFechar, onMin, children }) {
  const app = APPS[id]
  const [pos, setPos] = useState(() => ({ x: 30 + (ORDEM.indexOf(id) % 4) * 28, y: 20 + (ORDEM.indexOf(id) % 4) * 28 }))
  const [max, setMax] = useState(false)
  const drag = useRef(null)
  const largura = Math.min(app.w, window.innerWidth - 8)
  const iniciar = (e) => {
    if (max || e.target.closest('button')) return
    drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const mover = (e) => drag.current && setPos({ x: e.clientX - drag.current.dx, y: Math.max(0, e.clientY - drag.current.dy) })
  const estilo = max ? { left: 0, top: 0, width: '100%', height: 'calc(100% - 30px)' } : { left: Math.max(0, Math.min(pos.x, window.innerWidth - 60)), top: pos.y, width: largura, height: Math.min(app.h, window.innerHeight - 44) }
  return (
    <div className="window win" style={{ ...estilo, zIndex: foco }} onPointerDown={onFoco}>
      <div className="title-bar" onPointerDown={iniciar} onPointerMove={mover} onPointerUp={() => (drag.current = null)} onDoubleClick={() => setMax(!max)}>
        <div className="title-bar-text"><Icon id={id} s={16} /> {app.titulo}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onMin} />
          <button aria-label={max ? 'Restore' : 'Maximize'} onClick={() => setMax(!max)} />
          <button aria-label="Close" onClick={onFechar} />
        </div>
      </div>
      <div className="window-body win-body">{children}</div>
    </div>
  )
}

export default function App() {
  const [fase, setFase] = useState('bios') // bios -> boot -> on (automático)
  const [wins, setWins] = useState([]) // {id, z, min}
  const [menu, setMenu] = useState(false)
  const [virus, setVirus] = useState(false)
  const [hora, setHora] = useState('')
  const z = useRef(10)

  useEffect(() => {
    const t = () => setHora(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }))
    t(); const i = setInterval(t, 1000); return () => clearInterval(i)
  }, [])

  const abrir = (id) => {
    setMenu(false)
    if (id === 'virus') return setWins((w) => (w.some((x) => x.id === 'virus') ? w : [...w, { id, z: ++z.current, min: false }]))
    setWins((w) => w.some((x) => x.id === id) ? w.map((x) => (x.id === id ? { ...x, min: false, z: ++z.current } : x)) : [...w, { id, z: ++z.current, min: false }])
  }
  const fechar = (id) => setWins((w) => w.filter((x) => x.id !== id))
  const foco = (id) => setWins((w) => w.map((x) => (x.id === id ? { ...x, z: ++z.current } : x)))
  const min = (id) => setWins((w) => w.map((x) => (x.id === id ? { ...x, min: true } : x)))
  const topo = Math.max(0, ...wins.filter((x) => !x.min).map((x) => x.z))

  useEffect(() => {
    const t1 = setTimeout(() => { setFase('boot'); tocarStartup() }, 2800)
    const t2 = setTimeout(() => { setFase('on'); abrir('sobre') }, 2800 + 6200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (fase === 'bios') return <Bios />
  if (fase === 'boot') return <div className="boot"><div className="spl"><h1>Windows 98</h1><div>Portfolio Edition · {`Igor Santos`}</div><div className="pbar"><i /></div></div></div>

  return (
    <div className="desk" onPointerDown={(e) => { if (!e.target.closest('.startmenu,.startbtn')) setMenu(false) }}>
      <div className="icons">
        {ORDEM.map((id) => (
          <div key={id} className="ico" {...{ [coarse ? 'onClick' : 'onDoubleClick']: () => (id === 'virus' ? abrir('virus') : abrir(id)) }}>
            <i><Icon id={id} /></i><span>{APPS[id].rotulo}</span>
          </div>
        ))}
      </div>

      {wins.map((w) => {
        const { C } = APPS[w.id]
        if (w.id === 'virus') return (
          <Janela key={w.id} id="virus" foco={w.z} onFoco={() => foco('virus')} onFechar={() => fechar('virus')} onMin={() => min('virus')}>
            <div className="pad"><p>⚠️ Este programa é um <b>vírus FALSO</b>, 100% inofensivo: só animação, depois o portfólio reinicia. Executar mesmo assim?</p><button onClick={() => { fechar('virus'); setVirus(true) }}>Executar</button></div>
          </Janela>
        )
        return (
          <div key={w.id} style={{ display: w.min ? 'none' : 'block' }}>
            <Janela id={w.id} foco={w.z} onFoco={() => foco(w.id)} onFechar={() => fechar(w.id)} onMin={() => min(w.id)}><C /></Janela>
          </div>
        )
      })}

      {menu && (
        <div className="window startmenu"><div className="smbar"><b>Portfolio</b>98</div><div className="smitems">
          {['sobre', 'projetos', 'ie', 'orkut', 'doom', 'contato', 'virus'].map((id) => <div key={id} onClick={() => abrir(id)}><Icon id={id} s={24} /><span>{APPS[id].rotulo}</span></div>)}
          <hr />
          <div onClick={() => window.location.reload()}><span className="off">⏻</span><span>Desligar...</span></div>
        </div></div>
      )}

      <div className="taskbar window">
        <button className="startbtn" onClick={() => setMenu(!menu)}><Icon id="win" s={16} /> <b>Iniciar</b></button>
        {wins.map((w) => (
          <button key={w.id} className={`tbb ${w.z === topo && !w.min ? 'on' : ''}`} onClick={() => (w.min || w.z !== topo ? abrir(w.id) : min(w.id))}><Icon id={w.id} s={16} /> {APPS[w.id].rotulo}</button>
        ))}
        <span className="clock status-bar-field">{hora}</span>
      </div>

      {virus && <Virus />}
    </div>
  )
}
