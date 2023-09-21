import prisma from "../src/database";

async function checkOrCreateDefaultUser() {
  return await prisma.customer.upsert({
    create: {
      firstName: "Geraldo Luiz",
      lastName: "Datena",
      document: "133.245.497-00",
    },
    update: {},
    where: {
      document: "133.245.497-00",
    },
  });
}

async function main() {
  return checkOrCreateDefaultUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
