import prisma from "../../../../lib";

export default async function handle(req, res) {
  const { id } = req.query;
  const { completed } = req.body;
  console.log(completed);
  await prisma.toDo.update({
    where: {
      id,
    },
    data: {
      completed: !completed,
    },
  });

  res.json("Todo updated!");
}
