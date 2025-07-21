import { cn } from '../lib/utils'

describe('cn utility function', () => {
  test('should merge class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  test('should handle conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
  })

  test('should merge tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-3')).toBe('py-1 px-3')
  })
})
