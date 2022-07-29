import prisma from "../../lib";

export default async function handle(req, res) {
  const slug = req.body.slug;

  const slugExists = await prisma.slug.findMany({
    where: {
      slug,
    },
  });
  if (slugExists) {
    res.status(400).json({
      error: "Slug already exists",
    });
  } else {
    const newSlug = await prisma.slug.create({
      data: {
        slug,
      },
    });
    console.log("created a new slug");
  }
}
