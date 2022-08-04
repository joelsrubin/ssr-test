import prisma from "../../../../lib";

export default async function handle(req, res) {
  const { id } = req.query;
  const { priority } = req.body;

  await prisma.toDo.updateMany({
    where: {
      id,
    },
    data: {
      priority,
    },
  });

  res.json("Todo updated!");
}
