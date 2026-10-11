import { useEffect, useRef, useState } from 'react'
import { beep } from './sound.js'

const MSGS = ['ERRO FATAL 0E em 0028:C0034B23', 'Seu PC foi infectado 💀', 'C:\\WINDOWS\\SYSTEM sendo deletado...', 'Baixando 9999 MB de memes...', 'Igor virus v1.0 (inofensivo, relaxa)', 'Disquete corrompido!', 'Acesso negado. Ou não.']
const ARQ = ['KERNEL32.DLL', 'USER.EXE', 'COMMAND.COM', 'CURRICULO.DOC', 'AUTOEXEC.BAT', 'SYSTEM.INI', 'MSDOS.SYS']

// Vírus 100% falso: só animação e depois reinicia a página.
export default function Virus() {
  const [log, setLog] = useState([])
  const [pops, setPops] = useState([])
  const [bsod, setBsod] = useState(false)
  const n = useRef(0)
  useEffect(() => {
    document.body.classList.add('glitch')
    const t = setInterval(() => {
      const i = n.current++
      setLog((l) => [...l.slice(-14), `Infectando C:\\WINDOWS\\${ARQ[i % 7]} ... [${(Math.random() * 100) | 0}%]`])
      if (i % 2) {
        setPops((p) => [...p, { id: i, x: Math.random() * 70, y: Math.random() * 70, m: MSGS[(Math.random() * MSGS.length) | 0] }])
        beep(200 + Math.random() * 600, 0.08)
      }
    }, 180)
    const t2 = setTimeout(() => { clearInterval(t); document.body.classList.remove('glitch'); setBsod(true); beep(120, 0.6) }, 6500)
    const t3 = setTimeout(() => window.location.reload(), 10000)
    return () => { clearInterval(t); clearTimeout(t2); clearTimeout(t3); document.body.classList.remove('glitch') }
  }, [])
  if (bsod) return (
    <div className="vir bsod"><p>Windows<br /><br />Uma exceção fatal 0E ocorreu em 0028:C0034B23. O vírus do Igor tomou conta de tudo (mentira).<br /><br />* Reiniciando o portfólio automaticamente...<br />* Nenhum arquivo foi danificado. 💾</p></div>
  )
  return (
    <div className="vir">
      <pre className="vlog">{log.join('\n')}</pre>
      {pops.map((p) => (
        <div key={p.id} className="window pop" style={{ left: p.x + '%', top: p.y + '%' }}>
          <div className="title-bar"><div className="title-bar-text">⚠️ Erro</div></div>
          <div className="window-body"><p>{p.m}</p></div>
        </div>
      ))}
    </div>
  )
}
