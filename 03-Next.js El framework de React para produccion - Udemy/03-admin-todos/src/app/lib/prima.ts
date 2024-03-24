import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any)) {
    (global as any) = new PrismaClient();
  }
  prisma = (global as any);
}

export default prisma;