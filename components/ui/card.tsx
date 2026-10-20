import * as React from 'react'
import { cn } from '@/lib/utils'
export function Card({className,...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-2xl border border-slate-200/90 bg-white shadow-card',className)} {...props}/>}
