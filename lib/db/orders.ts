import { prisma } from "@/lib/prisma";

export const getLatestOrders = async () => {
  const orders = await prisma.order.findMany({
    take: 10,
    select: {
      id: true,
      status: true,
      totalAmount: true,
      createdAt: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  return orders;
};

export const getOrders = async () => {
  const orders = await prisma.order.findMany({
    select: {
      id: true,
      status: true,
      totalAmount: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  return orders;
};
