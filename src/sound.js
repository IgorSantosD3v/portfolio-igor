// Fanfarra ORIGINAL sintetizada (a música real do Windows 98 é protegida por direitos autorais).
export function chime() {
  try {
    const a = new (window.AudioContext || window.webkitAudioContext)()
    const n = (f, t, d, v = 0.15, ty = 'triangle') => {
      const o = a.createOscillator(), g = a.createGain()
      o.type = ty; o.frequency.value = f; o.connect(g); g.connect(a.destination)
      const s = a.currentTime + t
      g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(v, s + 0.04)
      g.gain.exponentialRampToValueAtTime(0.001, s + d); o.start(s); o.stop(s + d)
    }
    ;[[311, 0], [466, 0.35], [415, 0.7], [622, 1.05]].forEach(([f, t]) => n(f, t, 1.2))
    ;[311, 392, 466, 622, 784].forEach((f) => n(f, 1.6, 2.6, 0.09, 'sine'))
  } catch {}
}
export function beep(f = 800, d = 0.1) {
  try {
    const a = new AudioContext(), o = a.createOscillator()
    o.type = 'square'; o.frequency.value = f; o.connect(a.destination)
    o.start(); o.stop(a.currentTime + d)
  } catch {}
}

// Som de inicialização (public/startup.mp3). Navegadores bloqueiam áudio antes de qualquer
// interação; se o autoplay falhar, o som toca no primeiro clique/tecla/toque do visitante.
export function tocarStartup() {
  const a = new Audio('/startup.mp3')
  a.volume = 0.85
  a.onerror = chime
  const ev = ['pointerdown', 'keydown', 'touchstart']
  const go = () => { a.play().catch(() => {}); ev.forEach((e) => window.removeEventListener(e, go)) }
  a.play().catch(() => ev.forEach((e) => window.addEventListener(e, go)))
}
