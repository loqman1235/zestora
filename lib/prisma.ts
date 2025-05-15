// import { PrismaClient } from "@prisma/client";
// import { Pool, neonConfig } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import ws from "ws";

// neonConfig.webSocketConstructor = ws;
// neonConfig.poolQueryViaFetch = true;
// const connectionString = `${process.env.DATABASE_URL}`;
// const pool = new Pool({ connectionString });
// const adapter = new PrismaNeon(pool);

// const prismaClientSingleton = () => {
//   return new PrismaClient({ adapter });
// };

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
