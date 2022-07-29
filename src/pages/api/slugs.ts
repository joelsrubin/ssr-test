import prisma from "../../lib/index";

export default async function handle(_req, res) {
  const slugs = await prisma.slug.findMany();

  res.status(200).json(slugs);
}
