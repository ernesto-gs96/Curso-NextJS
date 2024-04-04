import prisma from "@/lib/prima";
import { TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listado de Todos',
 description: 'Pagina con listado de Todos',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany( { orderBy: { id: 'asc' } } );

  return (
    <div>
      <h1>Pagina rest-todos</h1>
      <TodosGrid todos={todos}/>
    </div>
  );
}