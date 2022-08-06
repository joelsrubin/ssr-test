import prisma from "../../../lib";

export default async function handle(req, res) {
  const { data, slug } = req.body;

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
  const updatedList = await prisma.toDo.findMany({
    where: {
      Slug: {
        slug,
      },
    },
  });

  res.json(updatedList);
}
