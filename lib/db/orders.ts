import { prisma } from "@/lib/prisma";

export const getLatestOrders = async () => {
  const orders = await prisma.order.findMany({
    take: 10,
    select: {
      id: true,
      orderId: true,
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
      createdAt: true,
      status: true,
      totalAmount: true,
      orderId: true,
      user: {
        select: {
          name: true,
        },
      },
      // shippingAddress: {
      //   select: {
      //     country: true,
      //     state: true,
      //     city: true,
      //     zip: true,
      //     addressLine1: true,
      //     addressLine2: true,
      //   },
      // },
    },
  });
  return orders;
};
