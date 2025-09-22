import { json, type LoaderFunctionArgs } from "@remix-run/node";
import bcrypt from "bcryptjs";
// data
import { ACCOUNTANTS } from "@/data/accountants";
import { COMPANIES } from "@/data/companies";
import { CONTACTS } from "@/data/contacts";
import { TRANSACTIONS } from "@/data/transactions";
import { COUNTRIES } from "@/data/countries";
import { FAQS } from "@/data/faqs";
//
import { prisma } from "@/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const email = "demo@finlab.com";
  const fullName = "John Doe";

  // cleanup the existing database
  await prisma.notification.deleteMany({});
  await prisma.transaction.deleteMany({});
  await prisma.contact.deleteMany({});
  await prisma.card.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.password.deleteMany({});
  await prisma.accountant.deleteMany({});
  await prisma.company.deleteMany({});
  await prisma.country.deleteMany({});
  await prisma.faq.deleteMany({});
  await prisma.partnerRequest.deleteMany({});

  const hashedPassword = await bcrypt.hash("demo123", 10);

  const user = await prisma.user.create({
    data: {
      email,
      fullName,
      avatar: "/avatars/avatar9.png",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.accountant.createMany({
    data: ACCOUNTANTS.map((accountant) => ({
      ...accountant,
    })),
  });

  await prisma.company.createMany({
    data: COMPANIES.map((company) => ({
      ...company,
    })),
  });

  const companies = await prisma.company.findMany();

  function getRandomCompanyId() {
    const randomIndex = Math.floor(Math.random() * companies.length);
    const randomCompany = companies[randomIndex];
    return randomCompany.id;
  }

  await prisma.transaction.createMany({
    data: TRANSACTIONS.map((transaction) => ({
      ...transaction,
      companyId: getRandomCompanyId(),
      userId: user.id,
    })),
  });

  await prisma.contact.createMany({
    data: CONTACTS.map((contact) => ({
      ...contact,
    })),
  });

  await prisma.faq.createMany({
    data: FAQS.map((item) => ({
      ...item,
    })),
  });

  await prisma.country.createMany({
    data: COUNTRIES.map((country) => ({
      name: country.name,
      code: country.code,
      emoji: country.emoji,
      unicode: country.unicode,
      image: country.image,
    })),
  });

  return json({ message: "Database seeded successfully!" });
}
