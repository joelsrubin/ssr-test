import prisma from "../../../../lib";

export default async function handle(req, res) {
  const { id } = req.query;
  const deletedTodo = await prisma.toDo.delete({
    where: {
      id,
    },
  });

  const updatedTodos = await prisma.toDo.findMany({
    where: {
      slugId: deletedTodo.slugId,
    },
  });

  res.json(updatedTodos);
}
