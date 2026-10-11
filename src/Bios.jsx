import { useEffect, useState } from 'react'

const LINHAS = [
  'Portfolio BIOS v1.0 — Igor Santos Systems',
  'Copyright (C) 2026 Flow Software, Inc.',
  '',
  'CPU: Back-End Processor 98MHz (Python/C#)',
  'Detectando FastAPI ...... OK',
  'Detectando ASP.NET ...... OK',
  'Detectando PostgreSQL ... OK',
  '',
  'Iniciando Windows 98...',
]

// Sequência de boot automática (sem "clique para iniciar").
export default function Bios() {
  const [n, setN] = useState(0)
  const [mem, setMem] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setN((x) => Math.min(LINHAS.length, x + 1)), 230)
    const m = setInterval(() => setMem((x) => Math.min(65536, x + 2048)), 40)
    return () => { clearInterval(t); clearInterval(m) }
  }, [])
  return (
    <div className="bios">
      <pre>
        {LINHAS.slice(0, Math.min(n, 3)).join('\n')}
        {n >= 3 && `\n\nMemory Test: ${mem}K${mem >= 65536 ? ' OK' : ''}\n`}
        {n > 3 && LINHAS.slice(3, n).join('\n')}
        <span className="cur">_</span>
      </pre>
    </div>
  )
}
