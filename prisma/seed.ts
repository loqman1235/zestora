/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.verificationToken.deleteMany(),
    prisma.verificationCode.deleteMany(),
    prisma.productImage.deleteMany(),
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
    prisma.brand.deleteMany(),
    prisma.storeSettings.deleteMany(),
  ]);

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

  const adminPassword = await bcrypt.hash("admin123", 10);
  const userPassword = await bcrypt.hash("password123", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Admin",
        email: "axeldjefafla@gmail.com",
        password: adminPassword,
        emailVerified: new Date(),
        role: UserRole.ADMIN,
      },
      {
        name: "John Doe",
        email: "johndoe@gmail.com",
        password: userPassword,
        emailVerified: new Date(),
        role: UserRole.CUSTOMER,
      },
      {
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        password: userPassword,
        emailVerified: new Date(),
        role: UserRole.CUSTOMER,
      },
    ],
  });

  const [brandNike, brandGucci] = await prisma.$transaction([
    prisma.brand.create({
      data: {
        name: "Nike",
        slug: "nike",
        image: "/images/brands/nike-logo.svg",
        isActive: true,
      },
    }),
    prisma.brand.create({
      data: {
        name: "Gucci",
        slug: "gucci",
        image: "/images/brands/gucci-logo.svg",
        isActive: true,
      },
    }),
  ]);

  const [menCategory, womenCategory] = await prisma.$transaction([
    prisma.category.create({
      data: { name: "Men", slug: "men", description: "Men's fashion" },
    }),
    prisma.category.create({
      data: { name: "Women", slug: "women", description: "Women's fashion" },
    }),
  ]);

  await prisma.$transaction(async (tx) => {
    const nikeShoes = await tx.product.create({
      data: {
        name: "Nike Air Force 1",
        slug: "nike-air-force-1",
        description: "Classic low-top sneakers with premium leather.",
        price: 120.0,
        inventory: 100,
        categoryId: menCategory.id,
        brandId: brandNike.id,
      },
    });

    await tx.productImage.createMany({
      data: [
        { url: "/images/products/nike-af1-white.jpg", productId: nikeShoes.id },
        { url: "/images/products/nike-af1-black.jpg", productId: nikeShoes.id },
      ],
    });

    await tx.productVariant.createMany({
      data: [
        {
          productId: nikeShoes.id,
          size: "US 9",
          color: "White",
          price: 120.0,
          inventory: 20,
        },
        {
          productId: nikeShoes.id,
          size: "US 10",
          color: "Black",
          price: 120.0,
          inventory: 30,
        },
      ],
    });

    const gucciBag = await tx.product.create({
      data: {
        name: "Gucci Leather Handbag",
        slug: "gucci-leather-handbag",
        description: "Luxury handbag made with premium leather.",
        price: 2500.0,
        inventory: 15,
        categoryId: womenCategory.id,
        brandId: brandGucci.id,
      },
    });

    await tx.productImage.createMany({
      data: [
        {
          url: "/images/products/gucci-handbag-front.jpg",
          productId: gucciBag.id,
        },
        {
          url: "/images/products/gucci-handbag-side.jpg",
          productId: gucciBag.id,
        },
      ],
    });

    await tx.productVariant.createMany({
      data: [
        {
          productId: gucciBag.id,
          size: "Standard",
          color: "Black",
          price: 2500.0,
          inventory: 10,
        },
        {
          productId: gucciBag.id,
          size: "Standard",
          color: "Brown",
          price: 2500.0,
          inventory: 5,
        },
      ],
    });
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
