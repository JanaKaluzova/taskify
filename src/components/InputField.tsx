import React, { useRef } from 'react'
import './InputField.css'

type Props = {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (event: React.FormEvent) => void
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      ></input>
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  )
}
