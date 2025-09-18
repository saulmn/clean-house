import { prisma } from "~/db.server";

export async function getContacts() {
  return prisma.contact.findMany();
}
