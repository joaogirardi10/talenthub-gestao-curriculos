import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'
export const metadata:Metadata={title:'TalentHub | Gestão de currículos',description:'Gerencie e descubra talentos de forma simples com a TalentHub.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className="flex min-h-screen flex-col antialiased"><Header/><main className="flex-1">{children}</main><Footer/><Toaster position="top-right" richColors closeButton/></body></html>}
