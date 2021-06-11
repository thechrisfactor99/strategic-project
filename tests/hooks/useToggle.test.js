import { renderHook, act } from '@testing-library/react-hooks'
import useToggle from '../../hooks/useToggle'

test('should initialize states', () => {
  const resultDefault = renderHook(() => useToggle())
  expect(resultDefault.result.current.toggle).toBe(false)
  expect(typeof resultDefault.result.current.handleToggle).toBe('function')

  const resultFalse = renderHook(() => useToggle(false))
  expect(resultFalse.result.current.toggle).toBe(false)
  expect(typeof resultFalse.result.current.handleToggle).toBe('function')

  const resultTrue = renderHook(() => useToggle(true))
  expect(resultTrue.result.current.toggle).toBe(true)
  expect(typeof resultTrue.result.current.handleToggle).toBe('function')

})

test('should toggle', () => {
  const { result } = renderHook(() => useToggle())
  act(() => {
    result.current.handleToggle()
  })
  expect(result.current.toggle).toBe(true)

  act(() => {
    result.current.handleToggle()
  })

  expect(result.current.toggle).toBe(false)

})