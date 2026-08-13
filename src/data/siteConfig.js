// Configuração central de contatos e links usados em vários componentes
// (Navbar, Hero, Contato, botão flutuante do WhatsApp).
// Edite aqui para atualizar em todo o site de uma vez só.

const WHATSAPP_NUMBER = '5562991474857' // +55 62 99147-4857, sem espaços ou símbolos
const WHATSAPP_MESSAGE = 'Olá, Igor! Vi o seu portfólio e gostaria de conversar.'

export const siteConfig = {
  name: 'Igor Santos',
  role: 'Desenvolvedor Back-End',
  email: 'seuemail@exemplo.com', // TODO: troque pelo seu e-mail real antes de publicar
  githubUrl: 'https://github.com/IgorSantosD3v',
  githubHandle: '@IgorSantosD3v',
  linkedinUrl: 'https://www.linkedin.com/in/igor-santos-7b993b357',
  linkedinHandle: 'igor-santos',
  whatsappNumber: '+55 62 99147-4857',
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
}
