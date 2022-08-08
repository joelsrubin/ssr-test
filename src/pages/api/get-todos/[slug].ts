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
    return res.json(todos);
  }
  res.json([]);
}
