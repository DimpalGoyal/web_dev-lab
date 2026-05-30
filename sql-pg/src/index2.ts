import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "./generated/prisma/client";
import "dotenv/config";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function insertTodos(
  title: string,
  desc: string,
  done: boolean,
  userId: number,
) {
  const res = await prisma.todos.create({
    data: {
      title,
      desc,
      done,
      userId,
    },
  });
  console.log(res);
}

prisma.todos
  .findMany({
    where: { userId: 1 },
    select: { user: true, title: true, desc: true, todoId: true },
  })
  .then((res) => console.log(res));
