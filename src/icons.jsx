// Ícones ORIGINAIS em pixel art, no estilo do Windows 98 (os ícones reais são da Microsoft).
const S = { shapeRendering: 'crispEdges' }
const k = '#000'
const P = {
  sobre: <><rect x="6" y="3" width="20" height="26" fill="#fff" stroke={k} /><rect x="6" y="3" width="20" height="5" fill="#000080" stroke={k} />{[12, 16, 20, 24].map((y) => <rect key={y} x="9" y={y} width="14" height="1" fill="#000080" />)}{[9, 13, 17, 21].map((x) => <rect key={x} x={x} y="1" width="2" height="4" fill="#808080" stroke={k} />)}</>,
  projetos: <><rect x="3" y="7" width="12" height="5" fill="#e0b020" stroke={k} /><rect x="3" y="11" width="26" height="17" fill="#ffd84a" stroke={k} /><rect x="4" y="12" width="24" height="2" fill="#fff6a0" /></>,
  ie: <><circle cx="16" cy="16" r="12" fill="#1c5fd0" stroke={k} /><polygon points="8,12 13,8 18,10 15,16 10,17" fill="#2fa84a" /><polygon points="18,17 25,15 26,21 20,26" fill="#2fa84a" /><ellipse cx="16" cy="16" rx="15" ry="5" transform="rotate(-25 16 16)" fill="none" stroke="#ffd000" strokeWidth="2" /></>,
  orkut: <path d="M16 28 L4 15 Q1 7 9 5 Q14 4 16 9 Q18 4 23 5 Q31 7 28 15 Z" fill="#d62c8b" stroke="#4b0a3a" />,
  doom: <><polygon points="5,4 11,10 8,12" fill="#fff" stroke={k} /><polygon points="27,4 21,10 24,12" fill="#fff" stroke={k} /><rect x="6" y="9" width="20" height="19" fill="#c01010" stroke={k} /><rect x="9" y="14" width="5" height="4" fill="#ffee33" stroke={k} /><rect x="18" y="14" width="5" height="4" fill="#ffee33" stroke={k} /><rect x="10" y="22" width="12" height="4" fill={k} /><rect x="11" y="22" width="2" height="2" fill="#fff" /><rect x="15" y="22" width="2" height="2" fill="#fff" /><rect x="19" y="22" width="2" height="2" fill="#fff" /></>,
  contato: <><rect x="3" y="6" width="26" height="19" fill="#fff" stroke={k} /><rect x="3" y="6" width="26" height="4" fill="#000080" stroke={k} /><circle cx="11" cy="15" r="3" fill="#e8b890" stroke={k} /><path d="M6 24 Q11 17 16 24 Z" fill="#c03030" stroke={k} /><rect x="18" y="13" width="8" height="1" fill={k} /><rect x="18" y="17" width="8" height="1" fill={k} /><rect x="18" y="21" width="6" height="1" fill={k} /></>,
  virus: <><ellipse cx="16" cy="14" rx="11" ry="10" fill="#fff" stroke={k} /><rect x="9" y="11" width="5" height="6" fill={k} /><rect x="18" y="11" width="5" height="6" fill={k} /><polygon points="15,18 17,18 16,21" fill={k} /><rect x="10" y="22" width="12" height="6" fill="#fff" stroke={k} />{[13, 16, 19].map((x) => <rect key={x} x={x} y="23" width="1" height="5" fill={k} />)}</>,
  win: <><rect x="2" y="3" width="6" height="5" fill="#e03b2e" /><rect x="9" y="2" width="6" height="6" fill="#3aa845" /><rect x="2" y="9" width="6" height="5" fill="#1c63b0" /><rect x="9" y="9" width="6" height="6" fill="#f2c200" /></>,
}
export function Icon({ id, s = 32 }) {
  const vb = id === 'win' ? '0 0 17 17' : '0 0 32 32'
  return <svg width={s} height={s} viewBox={vb} style={S} aria-hidden="true">{P[id]}</svg>
}
