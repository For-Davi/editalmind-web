import { describe, expect, it } from 'vitest'

import { cn } from '@/shared/lib/utils'

describe('cn', () => {
  it('joins class names and drops falsy values', () => {
    expect(cn('px-2', undefined, null, false, 'font-bold')).toBe('px-2 font-bold')
  })

  it('applies conditional classes from an object', () => {
    expect(cn('px-2', { hidden: false, 'text-sm': true })).toBe('px-2 text-sm')
  })

  it('lets the last conflicting Tailwind class win', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
  })
})
