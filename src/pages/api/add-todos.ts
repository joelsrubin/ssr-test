import prisma from "../../../lib";

export default async function handle(req, res) {
  const { slug, text, completed, priority } = req.body;
  console.log("priority", priority);
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
    return res.status(200).json({ message: "Todo added to new slug: " + slug });
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

    res.status(200).json({ message: "Todo added" });
  }
}
