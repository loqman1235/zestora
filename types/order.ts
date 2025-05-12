import { OrderStatus, Prisma } from "@prisma/client";

export type LatestOrderColumnType = {
  id: string;
  customer: string | null;
  amount: number;
  status: OrderStatus;
  date: string;
};

export type OrderColumnType = Prisma.OrderGetPayload<{
  include: { user: true };
}>;
