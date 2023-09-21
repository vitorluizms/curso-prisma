import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
  }); // TODO: Faça a implementação aqui
  console.log(students);

  const notWorking = await prisma.student.groupBy({
    by: ["class"],
    _count: { _all: true },
    where: { jobId: null },
    orderBy: { _count: { id: "desc" } },
  });

  console.log(notWorking);
})();
