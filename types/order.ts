import { OrderStatus } from "@prisma/client";

export type OrderColumnType = {
  id: string;
  customer: string | null;
  amount: number;
  status: OrderStatus;
  date: string;
};
