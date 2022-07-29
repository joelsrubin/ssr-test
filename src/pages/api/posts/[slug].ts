import prisma from "../../../../lib";

export default async function handle(req, res) {
  const { slug } = req.query;

  const foundSlug = await prisma.slug.findFirst({
    where: {
      slug,
    },
  });

  if (foundSlug) {
    const todos = await prisma.toDo.findMany({
      where: {
        slugId: foundSlug.id,
      },
    });
    res.json(todos);
  } else {
    res.status(200).json({ message: "No todos found for slug: " + slug });
  }
}
