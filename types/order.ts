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
  shippingAddress: {
    country: string | null;
    state: string | null;
    city: string | null;
    zip: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
  } | null;
};

export type OrderColumnType = LatestOrderColumnType;
