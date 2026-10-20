'use client'
import * as React from 'react'

type MaskProps = {
  mask: string
  maskPlaceholder?: string | null
  value?: string
  onChange?: (value: string) => void
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>
}

/** Máscara controlada sem findDOMNode (removido no React 19). */
function applyMask(raw: string, mask: string): string {
  const digits = raw.replace(/\D/g, '')
  let result = ''
  let index = 0
  for (const token of mask) {
    if (index >= digits.length) break
    if (token === '9') result += digits[index++]
    else result += token
  }
  return result
}

export default function InputMask({
  mask,
  value = '',
  onChange,
  onBlur,
  children,
}: MaskProps) {
  const childProps = children.props
  return React.cloneElement(children, {
    ...childProps,
    value: applyMask(value, mask),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(applyMask(event.currentTarget.value, mask))
    },
    onBlur,
    inputMode: 'numeric',
  })
}
