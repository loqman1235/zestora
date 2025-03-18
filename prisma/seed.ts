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

  const [
    brandNike,
    brandGucci,
    brandCalvin,
    brandDior,
    brandPrada,
    brandVersace,
    brandZara,
  ] = await prisma.$transaction([
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

    prisma.brand.create({
      data: {
        name: "Calvin Klein",
        slug: "calvin-klein",
        image: "/images/brands/calvin-logo.svg",
        isActive: true,
      },
    }),

    prisma.brand.create({
      data: {
        name: "Dior",
        slug: "dior",
        image: "/images/brands/dior-logo.svg",
        isActive: true,
      },
    }),

    prisma.brand.create({
      data: {
        name: "Prada",
        slug: "prada",
        image: "/images/brands/prada-logo.svg",
        isActive: true,
      },
    }),

    prisma.brand.create({
      data: {
        name: "Versace",
        slug: "versace",
        image: "/images/brands/vercace-logo.svg",
        isActive: true,
      },
    }),

    prisma.brand.create({
      data: {
        name: "Zara",
        slug: "zara",
        image: "/images/brands/zara-logo.svg",
        isActive: true,
      },
    }),
  ]);

  const [menCategory, womenCategory, kidsCategory] = await prisma.$transaction([
    prisma.category.create({
      data: { name: "Men", slug: "men", description: "Men's fashion" },
    }),
    prisma.category.create({
      data: { name: "Women", slug: "women", description: "Women's fashion" },
    }),

    prisma.category.create({
      data: { name: "Kids", slug: "kids", description: "Kids fashion" },
    }),
  ]);

  await prisma.$transaction([
    prisma.category.create({
      data: {
        name: "Shirts",
        slug: "men-shirts",
        description: "Men's Shirts",
        parentId: menCategory.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Jeans",
        slug: "men-jeans",
        description: "Men's Jeans",
        parentId: menCategory.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Dresses",
        slug: "women-dresses",
        description: "Women's Dresses",
        parentId: womenCategory.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Handbags",
        slug: "women-handbags",
        description: "Women's Handbags",
        parentId: womenCategory.id,
      },
    }),
  ]);

  await prisma.$transaction(
    async (tx) => {
      const nikeShoes = await tx.product.create({
        data: {
          thumbnail: "/images/products/nike-af1-white.jpg",
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
          {
            url: "/images/products/nike-af1-white.jpg",
            productId: nikeShoes.id,
          },
          {
            url: "/images/products/nike-af1-black.jpg",
            productId: nikeShoes.id,
          },
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
          thumbnail: "/images/products/gucci-handbag.jpg",
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

      const pradaSunglasses = await tx.product.create({
        data: {
          thumbnail: "/images/products/prada-sunglasses.jpg",
          name: "Prada Aviator Sunglasses",
          slug: "prada-aviator-sunglasses",
          description: "Stylish aviator sunglasses with UV protection.",
          price: 350.0,
          inventory: 50,
          categoryId: menCategory.id,
          brandId: brandPrada.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/prada-sunglasses.jpg",
            productId: pradaSunglasses.id,
          },
        ],
      });

      const diorPerfume = await tx.product.create({
        data: {
          thumbnail: "/images/products/dior-sauvage.jpg",
          name: "Dior Sauvage Perfume",
          slug: "dior-sauvage-perfume",
          description: "A fresh and woody fragrance for men.",
          price: 120.0,
          inventory: 200,
          categoryId: menCategory.id,
          brandId: brandDior.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/dior-sauvage.jpg",
            productId: diorPerfume.id,
          },
        ],
      });

      const calvinJeans = await tx.product.create({
        data: {
          thumbnail: "/images/products/calvin-jeans.jpg",
          name: "Calvin Klein Slim Fit Jeans",
          slug: "calvin-klein-jeans",
          description: "Classic slim fit jeans for men.",
          price: 80.0,
          inventory: 150,
          categoryId: menCategory.id,
          brandId: brandCalvin.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/calvin-jeans.jpg",
            productId: calvinJeans.id,
          },
        ],
      });

      const gucciSneakers = await tx.product.create({
        data: {
          thumbnail: "/images/products/gucci-ace.jpg",
          name: "Gucci Ace Sneakers",
          slug: "gucci-ace-sneakers",
          description: "Luxury sneakers with signature Gucci design.",
          price: 650.0,
          inventory: 40,
          categoryId: menCategory.id,
          brandId: brandGucci.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/gucci-ace.jpg",
            productId: gucciSneakers.id,
          },
        ],
      });

      const zaraDress = await tx.product.create({
        data: {
          thumbnail: "/images/products/zara-dress.jpg",
          name: "Zara Summer Dress",
          slug: "zara-summer-dress",
          description: "Light and stylish summer dress for women.",
          price: 45.0,
          inventory: 120,
          categoryId: womenCategory.id,
          brandId: brandZara.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          { url: "/images/products/zara-dress.jpg", productId: zaraDress.id },
        ],
      });

      const versaceWatch = await tx.product.create({
        data: {
          thumbnail: "/images/products/versace-watch.jpg",
          name: "Versace Gold Watch",
          slug: "versace-gold-watch",
          description: "Elegant gold-plated watch by Versace.",
          price: 1200.0,
          inventory: 25,
          categoryId: menCategory.id,
          brandId: brandVersace.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/versace-watch.jpg",
            productId: versaceWatch.id,
          },
        ],
      });

      const nikeRunningShoes = await tx.product.create({
        data: {
          thumbnail: "/images/products/nike-pegasus.jpg",
          name: "Nike Air Zoom Pegasus",
          slug: "nike-air-zoom-pegasus",
          description: "High-performance running shoes.",
          price: 130.0,
          inventory: 80,
          categoryId: menCategory.id,
          brandId: brandNike.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/nike-pegasus.jpg",
            productId: nikeRunningShoes.id,
          },
        ],
      });

      const pradaHandbag = await tx.product.create({
        data: {
          thumbnail: "/images/products/prada-handbag.jpg",
          name: "Prada Tote Handbag",
          slug: "prada-tote-handbag",
          description: "Elegant tote handbag by Prada.",
          price: 2100.0,
          inventory: 18,
          categoryId: womenCategory.id,
          brandId: brandPrada.id,
        },
      });

      await tx.productImage.createMany({
        data: [
          {
            url: "/images/products/prada-handbag.jpg",
            productId: pradaHandbag.id,
          },
        ],
      });
    },
    {
      maxWait: 10000, // 10 seconds
      timeout: 20000, // 20 seconds
    },
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
