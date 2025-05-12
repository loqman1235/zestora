import { OrderStatus } from "@prisma/client";

export type LatestOrderColumnType = {
  id: string;
  customer: string | null;
  amount: number;
  status: OrderStatus;
  date: string;
};
