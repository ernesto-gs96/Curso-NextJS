export const dynamic = 'auto';
export const revalidate = 0;

import prisma from "@/lib/prima";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listado de Todos',
 description: 'Pagina con listado de Todos',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany( { orderBy: { id: 'asc' } } );

  return (
    <div>

      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo/>
      </div>

      <TodosGrid todos={todos}/>
      
    </div>
  );
}