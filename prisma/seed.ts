/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";

import { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.verificationToken.deleteMany(),
    prisma.verificationCode.deleteMany(),
    prisma.product.deleteMany(),
    prisma.productImage.deleteMany(),
    prisma.category.deleteMany(),
    prisma.brand.deleteMany(),
    prisma.storeSettings.deleteMany(),
  ]);

  //   Create store settings
  await prisma.storeSettings.create({
    data: {
      storeName: "Zestora",
      storeEmail: "zestora@gmail.com",
      storePhone: "123-456-7890",
      storeAddress: "123 Main St, Anytown, USA",
      storeLogo: "https://example.com/logo.png",
      currencyCode: "USD",
      metaTitle: "Zestora - The Best Online Store for Fashion and Accessories",
      metaDescription:
        "Discover the latest fashion and accessories at Zestora. Shop now and find the perfect style for you.",
      socialMedia: {
        facebook: "https://www.facebook.com/zestora",
        twitter: "https://twitter.com/zestora",
        instagram: "https://www.instagram.com/zestora",
      },
    },
  });

  //   Create users
  const adminPassword = await bcrypt.hash("admin123", 10);
  const userPassword = await bcrypt.hash("password123", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "axeldjefafla@.gmail.com",
      password: adminPassword,
      role: UserRole.ADMIN,
    },
  });

  const customer1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@.gmail.com",
      password: userPassword,
      role: UserRole.CUSTOMER,
    },
  });

  const customer2 = await prisma.user.create({
    data: {
      name: "Jane Doe",
      email: "janedoe@.gmail.com",
      password: userPassword,
      role: UserRole.CUSTOMER,
    },
  });

  //   Create brands

  const brand1 = await prisma.brand.create({
    data: {
      name: "Dior",
      slug: "dior",
      image: "/images/brands/dior-logo.svg",
      isActive: true,
    },
  });

  const brand2 = await prisma.brand.create({
    data: {
      name: "Calvin Klein",
      slug: "calvin-klein",
      image: "/images/brands/calvin-logo.svg",
      isActive: true,
    },
  });

  const brand3 = await prisma.brand.create({
    data: {
      name: "Gucci",
      slug: "gucci",
      image: "/images/brands/gucci-logo.svg",
      isActive: true,
    },
  });

  const brand4 = await prisma.brand.create({
    data: {
      name: "Nike",
      slug: "nike",
      image: "/images/brands/nike-logo.svg",
      isActive: true,
    },
  });

  const brand5 = await prisma.brand.create({
    data: {
      name: "Prada",
      slug: "prada",
      image: "/images/brands/prada-logo.svg",
      isActive: true,
    },
  });

  const brand6 = await prisma.brand.create({
    data: {
      name: "Ralph Lauren",
      slug: "ralph-lauren",
      image: "/images/brands/ralph-logo.svg",
      isActive: true,
    },
  });

  const brand7 = await prisma.brand.create({
    data: {
      name: "Versace",
      slug: "versace",
      image: "/images/brands/vercace-logo.svg",
      isActive: true,
    },
  });

  const brand8 = await prisma.brand.create({
    data: {
      name: "Zara",
      slug: "zara",
      image: "/images/brands/zara-logo.svg",
      isActive: true,
    },
  });

  //   Create categories
  const menCategory = await prisma.category.create({
    data: {
      name: "Men",
      slug: "men",
      description: "Men\'s clothing and accessories",
    },
  });

  const womenCategory = await prisma.category.create({
    data: {
      name: "Women",
      slug: "women",
      description: "Women\'s clothing and accessories",
    },
  });

  const kidsCategory = await prisma.category.create({
    data: {
      name: "Kids",
      slug: "kids",
      description: "Children\'s clothing and accessories",
    },
  });

  //   Create Subcategories
  const menTops = await prisma.category.create({
    data: {
      name: "Men\'s Tops",
      slug: "men-tops",
      description: "T-shirts, shirts, and sweaters for men",
      parentId: menCategory.id,
    },
  });

  const menBottoms = await prisma.category.create({
    data: {
      name: "Men\'s Bottoms",
      slug: "men-bottoms",
      description: "Pants, shorts, and jeans for men",
      parentId: menCategory.id,
    },
  });

  const womenDresses = await prisma.category.create({
    data: {
      name: "Women's Dresses",
      slug: "womens-dresses",
      description: "Casual and formal dresses for women",
      parentId: womenCategory.id,
    },
  });

  const womenTops = await prisma.category.create({
    data: {
      name: "Women's Tops",
      slug: "womens-tops",
      description: "Blouses, t-shirts, and sweaters for women",
      parentId: womenCategory.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
