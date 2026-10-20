import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],theme:{extend:{colors:{ink:'#152741',accent:'#445eea',sea:'#12ab9e',muted:'#63758e'},boxShadow:{card:'0 12px 40px rgba(23,42,78,.06)'}},},plugins:[require('@tailwindcss/forms')] }
export default config
