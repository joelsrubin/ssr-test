import prisma from "../../../../lib";

export default async function handle(req, res) {
  const { id } = req.query;
  const todo = await prisma.toDo.delete({
    where: {
      id,
    },
  });
  res.json("Todo deleted");
}
