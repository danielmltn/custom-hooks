import React from 'react'
import {render} from '@testing-library/react'
import user from '@testing-library/user-event'
import useToggle from './toggle'

const TestComponentToggle = (): JSX.Element => {
  const [selected, , toggle] = useToggle()
  return (
    <button aria-label="toggle selection" onClick={toggle}>
      {selected ? 'Selected' : 'Not Selected'}
    </button>
  )
}
const TestComponentSelected = (): JSX.Element => {
  const [selected, setSelected] = useToggle()

  const handleClick = (): void => {
    setSelected((select: boolean) => setSelected(!select))
  }
  return (
    <button aria-label="toggle selection" onClick={handleClick}>
      {selected ? 'Selected' : 'Not Selected'}
    </button>
  )
}

describe('useToggle', () => {
  test('to default to a false selection', () => {
    const {getByLabelText} = render(<TestComponentToggle />)
    const container = getByLabelText('toggle selection')
    expect(container.innerHTML).toBe('Not Selected')
    user.click(container)
  })

  test('to be able to toggle the selection on use of toggle', () => {
    const {getByLabelText} = render(<TestComponentToggle />)
    const container = getByLabelText('toggle selection')
    expect(container.innerHTML).toBe('Not Selected')
    user.click(container)
    expect(container.innerHTML).toBe('Selected')
    user.click(container)
    expect(container.innerHTML).toBe('Not Selected')
  })

  test('to be able to toggle the selection using explicit setSelected', () => {
    const {getByLabelText} = render(<TestComponentSelected />)
    const container = getByLabelText('toggle selection')
    expect(container.innerHTML).toBe('Not Selected')
    user.click(container)
    expect(container.innerHTML).toBe('Selected')
    user.click(container)
    expect(container.innerHTML).toBe('Not Selected')
    user.click(container)
    expect(container.innerHTML).toBe('Selected')
  })
})
