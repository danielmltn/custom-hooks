import {useState, Dispatch, SetStateAction} from 'react'

const useToggle = (
  initialSelect = false,
): Array<boolean | Dispatch<SetStateAction<boolean>> | any> => {
  const [selected, setSelected] = useState(initialSelect)
  const toggle = (): void => {
    setSelected(!selected)
  }
  return [selected, setSelected, toggle]
}

export default useToggle
