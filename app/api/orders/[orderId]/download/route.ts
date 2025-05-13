/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { prisma } from "@/lib/prisma";
import { APP_NAME } from "@/config/consts";

export async function GET(
  req: Request,
  { params }: { params: { orderId: string } },
) {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: { orderId },
    include: {
      user: { select: { name: true, email: true } },
    },
  });

  if (!order) {
    return new NextResponse("Order not found", { status: 404 });
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 750]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const drawText = (
    text: string,
    x: number,
    y: number,
    size = 12,
    bold = false,
  ) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: bold ? boldFont : font,
      color: rgb(0, 0, 0),
    });
  };

  const drawLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color = rgb(0.8, 0.8, 0.8),
    thickness = 1,
  ) => {
    page.drawLine({
      start: { x: x1, y: y1 },
      end: { x: x2, y: y2 },
      thickness,
      color,
    });
  };

  let y = 720;

  drawText(`${APP_NAME} - Order Invoice`, 180, y, 16, true);
  y -= 30;

  drawText(`Order ID: ${order.orderId}`, 50, y);
  drawText(`Date: ${order.createdAt.toDateString()}`, 400, y);
  y -= 20;

  drawText(`Customer: ${order.user.name}`, 50, y);
  y -= 20;
  drawText(`Email: ${order.user.email}`, 50, y);
  y -= 30;

  drawText("Items", 50, y, 13, true);
  y -= 20;

  const startX = 50;
  const widths = [30, 220, 50, 70, 70]; // column widths
  const headers = ["#", "Product", "Qty", "Price", "Total"];
  const rowHeight = 20;

  const tableY = y;

  // Draw header row
  let x = startX;
  headers.forEach((header, i) => {
    drawText(header, x + 2, tableY - 15, 12, true);
    x += widths[i];
  });

  // Draw table border lines
  const tableTop = tableY;
  const items = Array.isArray(order.items) ? order.items : [];
  const rowCount = items.length + 1;
  const tableBottom = tableTop - rowCount * rowHeight;

  // Horizontal lines
  for (let i = 0; i <= rowCount; i++) {
    const yLine = tableTop - i * rowHeight;
    drawLine(startX, yLine, startX + widths.reduce((a, b) => a + b), yLine);
  }

  // Vertical lines
  let xLine = startX;
  for (let i = 0; i <= widths.length; i++) {
    drawLine(xLine, tableTop, xLine, tableBottom);
    xLine += widths[i] || 0;
  }

  // Draw item rows
  items.forEach((item: any, index: number) => {
    let x = startX;
    const itemTotal = (item.price * item.quantity) / 100;
    const values = [
      `${index + 1}`,
      item.name,
      `${item.quantity}`,
      `$${(item.price / 100).toFixed(2)}`,
      `$${itemTotal.toFixed(2)}`,
    ];

    values.forEach((text, i) => {
      drawText(text, x + 2, tableY - rowHeight * (index + 1) - 15);
      x += widths[i];
    });
  });

  // Totals
  y = tableBottom - 30;

  const subtotal =
    items.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0,
    ) / 100;
  const total = order.totalAmount / 100;
  const shipping = parseFloat((total - subtotal).toFixed(2));

  drawText("Subtotal:", 400, y, 12, true);
  drawText(`$${subtotal.toFixed(2)}`, 500, y);
  y -= 18;

  drawText("Shipping:", 400, y, 12, true);
  drawText(`$${shipping.toFixed(2)}`, 500, y);
  y -= 18;

  drawText("Total:", 400, y, 12, true);
  drawText(`$${total.toFixed(2)}`, 500, y);
  y -= 30;

  drawText(`Thank you for shopping with ${APP_NAME}!`, 160, y, 12, true);

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(pdfBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=order-${order.orderId}.pdf`,
    },
  });
}
