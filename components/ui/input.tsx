import * as React from 'react'
import {cn} from '@/lib/utils'
export const Input=React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>(({className,...props},ref)=><input ref={ref} className={cn('block w-full h-11 rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/10 disabled:bg-slate-100',className)} {...props}/>);Input.displayName='Input'
