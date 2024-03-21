import { useTodos } from "../hooks/useTodos"

export const TodoTitle = () => {

    const {pendingTodos} = useTodos();

  return (
    <h1>Todos : {pendingTodos}</h1>
  )
}
