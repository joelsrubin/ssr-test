import prisma from "../../../lib";

export default async function handle(req, res) {
  const data = req.body;

  data.forEach(async ({ id, priority }) => {
    await prisma.toDo.update({
      where: {
        id,
      },
      data: {
        priority,
      },
    });
  });

  res.json(`Todos updated!`);
}
