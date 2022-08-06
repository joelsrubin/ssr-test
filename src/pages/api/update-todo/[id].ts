import prisma from "../../../../lib";

export default async function handle(req, res) {
  const { id } = req.query;
  const { completed } = req.body;

  const todo = await prisma.toDo.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });

  const updatedTodos = await prisma.toDo.findMany({
    where: {
      slugId: todo.slugId,
    },
  });

  res.json(updatedTodos);
}
