import prisma from "../../../lib";

export default async function handle(req, res) {
  const { slug, text, completed, priority } = req.body;

  const slugExists = await prisma.slug.findFirst({
    where: { slug },
  });
  if (!slugExists) {
    await prisma.toDo.create({
      data: {
        text,
        completed,
        priority,
        Slug: {
          create: {
            slug,
          },
        },
      },
    });

    const updatedList = await prisma.toDo.findMany({
      where: {
        Slug: {
          slug,
        },
      },
    });

    return res.json(updatedList);
  } else {
    await prisma.toDo.create({
      data: {
        text,
        completed,
        priority,
        Slug: {
          connect: {
            slug,
          },
        },
      },
    });

    const updatedList = await prisma.toDo.findMany({
      where: {
        Slug: {
          slug,
        },
      },
    });

    return res.json(updatedList);
  }
}
