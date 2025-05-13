import { OrderStatus } from "@prisma/client";

export type LatestOrderColumnType = {
  orderId: string;
  customer: string | null;
  amount: number;
  status: OrderStatus;
  date: string;
  user: {
    name: string | null;
  };
};

export type OrderColumnType = LatestOrderColumnType;
