import { TodoProvider } from "../context/TodoProvider"
import { TodoList } from "./TodoList"
import { TodoTitle } from "./TodoTitle"

export const Todo = () => {
  return (
    <TodoProvider>
        <TodoTitle/>
        <TodoList/>
    </TodoProvider>
  )
}
