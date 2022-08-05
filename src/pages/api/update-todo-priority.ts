import prisma from "../../../lib";

export default async function handle(req, res) {
  const data = req.body;

  const funcs = data.map(({ id, priority }) => {
    return prisma.toDo.update({
      where: {
        id,
      },
      data: {
        priority,
      },
    });
  });

  await prisma.$transaction(funcs);
  res.json(`Todos updated!`);
}
