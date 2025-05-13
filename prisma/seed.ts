/* eslint-disable @typescript-eslint/no-unused-vars */
import { generateOrderId } from "../lib/utils";
import { PrismaClient } from "@prisma/client";
import { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    // prisma.user.deleteMany(),
    // prisma.verificationToken.deleteMany(),
    // prisma.verificationCode.deleteMany(),
    // prisma.productImage.deleteMany(),
    // prisma.productVariant.deleteMany(),
    // prisma.product.deleteMany(),
    // prisma.category.deleteMany(),
    // prisma.brand.deleteMany(),
    // prisma.storeSettings.deleteMany(),
    prisma.order.deleteMany(),
  ]);

  // await prisma.storeSettings.create({
  //   data: {
  //     storeName: "Zestora",
  //     storeEmail: "zestora@gmail.com",
  //     storePhone: "123-456-7890",
  //     storeAddress: "123 Main St, Anytown, USA",
  //     storeLogo: "https://example.com/logo.png",
  //     currencyCode: "USD",
  //     metaTitle: "Zestora - The Best Online Store for Fashion and Accessories",
  //     metaDescription:
  //       "Discover the latest fashion and accessories at Zestora. Shop now and find the perfect style for you.",
  //     socialMedia: {
  //       facebook: "https://www.facebook.com/zestora",
  //       twitter: "https://twitter.com/zestora",
  //       instagram: "https://www.instagram.com/zestora",
  //     },
  //   },
  // });

  // const adminPassword = await bcrypt.hash("admin123", 10);
  // const userPassword = await bcrypt.hash("password123", 10);

  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Admin",
  //       email: "axeldjefafla@gmail.com",
  //       password: adminPassword,
  //       emailVerified: new Date(),
  //       role: UserRole.ADMIN,
  //     },
  //     {
  //       name: "John Doe",
  //       email: "johndoe@gmail.com",
  //       password: userPassword,
  //       emailVerified: new Date(),
  //       role: UserRole.CUSTOMER,
  //     },
  //     {
  //       name: "Jane Doe",
  //       email: "janedoe@gmail.com",
  //       password: userPassword,
  //       emailVerified: new Date(),
  //       role: UserRole.CUSTOMER,
  //     },
  //   ],
  // });

  // const [
  //   brandNike,
  //   brandGucci,
  //   brandCalvin,
  //   brandDior,
  //   brandPrada,
  //   brandVersace,
  //   brandZara,
  // ] = await prisma.$transaction([
  //   prisma.brand.create({
  //     data: {
  //       name: "Nike",
  //       slug: "nike",
  //       image: "/images/brands/nike-logo.svg",
  //       isActive: true,
  //     },
  //   }),
  //   prisma.brand.create({
  //     data: {
  //       name: "Gucci",
  //       slug: "gucci",
  //       image: "/images/brands/gucci-logo.svg",
  //       isActive: true,
  //     },
  //   }),

  //   prisma.brand.create({
  //     data: {
  //       name: "Calvin Klein",
  //       slug: "calvin-klein",
  //       image: "/images/brands/calvin-logo.svg",
  //       isActive: true,
  //     },
  //   }),

  //   prisma.brand.create({
  //     data: {
  //       name: "Dior",
  //       slug: "dior",
  //       image: "/images/brands/dior-logo.svg",
  //       isActive: true,
  //     },
  //   }),

  //   prisma.brand.create({
  //     data: {
  //       name: "Prada",
  //       slug: "prada",
  //       image: "/images/brands/prada-logo.svg",
  //       isActive: true,
  //     },
  //   }),

  //   prisma.brand.create({
  //     data: {
  //       name: "Versace",
  //       slug: "versace",
  //       image: "/images/brands/vercace-logo.svg",
  //       isActive: true,
  //     },
  //   }),

  //   prisma.brand.create({
  //     data: {
  //       name: "Zara",
  //       slug: "zara",
  //       image: "/images/brands/zara-logo.svg",
  //       isActive: true,
  //     },
  //   }),
  // ]);

  // const [menCategory, womenCategory, kidsCategory] = await prisma.$transaction([
  //   prisma.category.create({
  //     data: { name: "Men", slug: "men", description: "Men's fashion" },
  //   }),
  //   prisma.category.create({
  //     data: { name: "Women", slug: "women", description: "Women's fashion" },
  //   }),

  //   prisma.category.create({
  //     data: { name: "Kids", slug: "kids", description: "Kids fashion" },
  //   }),
  // ]);

  // await prisma.$transaction([
  //   prisma.category.create({
  //     data: {
  //       name: "Shirts",
  //       slug: "men-shirts",
  //       description: "Men's Shirts",
  //       parentId: menCategory.id,
  //     },
  //   }),
  //   prisma.category.create({
  //     data: {
  //       name: "Jeans",
  //       slug: "men-jeans",
  //       description: "Men's Jeans",
  //       parentId: menCategory.id,
  //     },
  //   }),
  //   prisma.category.create({
  //     data: {
  //       name: "Dresses",
  //       slug: "women-dresses",
  //       description: "Women's Dresses",
  //       parentId: womenCategory.id,
  //     },
  //   }),
  //   prisma.category.create({
  //     data: {
  //       name: "Handbags",
  //       slug: "women-handbags",
  //       description: "Women's Handbags",
  //       parentId: womenCategory.id,
  //     },
  //   }),
  // ]);

  // await prisma.$transaction(
  //   async (tx) => {
  //     const floralShirt = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/men/shirt/floral-shirt/default.jpg",
  //         name: "Floral Print Drop-Sleeve Shirt",
  //         slug: slugify("Floral Print Drop-Sleeve Shirt", { lower: true }),
  //         description:
  //           "A woven shirt featuring an allover floral print, Cuban collar, button-front closures, and dropped short sleeves.",
  //         price: 17.49,
  //         inventory: 100,
  //         categoryId: menCategory.id,
  //         brandId: brandVersace.id,
  //       },
  //     });

  //     const leopardShirt = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/men/shirt/leopard-shirt/default.jpg",
  //         name: "Leopard Print Cuban-Collar Shirt",
  //         slug: slugify("Leopard Print Cuban-Collar Shirt", { lower: true }),
  //         description:
  //           "A woven shirt featuring an allover leopard print, Cuban collar, button-front closures, and short sleeves.",
  //         price: 17.49,
  //         inventory: 15,
  //         categoryId: menCategory.id,
  //         brandId: brandGucci.id,
  //       },
  //     });

  //     // await tx.productImage.createMany({
  //     //   data: [
  //     //     {
  //     //       url: "/images/products/gucci-handbag-front.jpg",
  //     //       productId: leopardShirt.id,
  //     //     },
  //     //     {
  //     //       url: "/images/products/gucci-handbag-side.jpg",
  //     //       productId: leopardShirt.id,
  //     //     },
  //     //   ],
  //     // });

  //     // await tx.productVariant.createMany({
  //     //   data: [
  //     //     {
  //     //       productId: gucciBag.id,
  //     //       size: "Standard",
  //     //       color: "Black",
  //     //       price: 2500.0,
  //     //       inventory: 10,
  //     //     },
  //     //     {
  //     //       productId: gucciBag.id,
  //     //       size: "Standard",
  //     //       color: "Brown",
  //     //       price: 2500.0,
  //     //       inventory: 5,
  //     //     },
  //     //   ],
  //     // });

  //     const marketMotifShirt = await tx.product.create({
  //       data: {
  //         thumbnail:
  //           "/images/products/men/shirts/market-motif-shirt/default.jpg",
  //         name: "Market Motif Graphic Shirt",
  //         slug: slugify("Market Motif Graphic Shirt", { lower: true }),
  //         description:
  //           'A woven shirt featuring a Cuban collar, assorted front and sleeve market motif graphics, including fruit, butterfly, and emblem graphics, front "Los Angeles" and various text, and dropped short sleeves.',
  //         price: 20.99,
  //         inventory: 50,
  //         categoryId: menCategory.id,
  //         brandId: brandPrada.id,
  //       },
  //     });

  //     const pinstripedShirt = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/men/shirts/pinstriped-shirt/default.jpg",
  //         name: "Pinstriped Cuban-Collar Shirt",
  //         slug: slugify("Pinstriped Cuban-Collar Shirt", { lower: true }),
  //         description:
  //           "A woven shirt featuring an allover pinstriped pattern, Cuban collar, button-front closures, and dropped short sleeves.",
  //         price: 20.99,
  //         inventory: 200,
  //         categoryId: menCategory.id,
  //         brandId: brandDior.id,
  //       },
  //     });

  //     const fleeceHoodie = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/women/shirts/fleece-hoodie/default.jpg",
  //         name: "Fleece Drawstring Hoodie",
  //         slug: slugify("Fleece Drawstring Hoodie", { lower: true }),
  //         description:
  //           "A fleece hoodie featuring a drawstring hood, dropped long sleeves, ribbed trim, and front kangaroo pocket.",
  //         price: 17.49,
  //         inventory: 150,
  //         categoryId: womenCategory.id,
  //         brandId: brandCalvin.id,
  //       },
  //     });

  //     //  variants
  //     const pinkVariant = await tx.productVariant.create({
  //       data: {
  //         productId: fleeceHoodie.id,
  //         size: "Standard",
  //         color: "Pink",
  //         price: 17.49,
  //         inventory: 50,
  //         hex: "#F9DAE2",
  //       },
  //     });

  //     const beigeVariant = await tx.productVariant.create({
  //       data: {
  //         productId: fleeceHoodie.id,
  //         size: "Standard",
  //         color: "Beige",
  //         price: 17.49,
  //         inventory: 50,
  //         hex: "#D8EBE6",
  //       },
  //     });

  //     const brownVariant = await tx.productVariant.create({
  //       data: {
  //         productId: fleeceHoodie.id,
  //         size: "Standard",
  //         color: "Brown",
  //         price: 17.49,
  //         inventory: 50,
  //         hex: "#3C2822",
  //       },
  //     });

  //     await tx.productImage.createMany({
  //       data: [
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/pink/pink-1.jpg",
  //           variantId: pinkVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/pink/pink-2.jpg",
  //           variantId: pinkVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/pink/pink-3.jpg",
  //           variantId: pinkVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/beige/beige-1.jpg",
  //           variantId: beigeVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/beige/beige-2.jpg",
  //           variantId: beigeVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/beige/beige-3.jpg",
  //           variantId: beigeVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/brown/brown-1.jpg",
  //           variantId: brownVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/brown/brown-2.jpg",
  //           variantId: brownVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/fleece-hoodie/brown/brown-3.jpg",
  //           variantId: brownVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //       ],
  //     });

  //     const helloKittyShirt = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/women/shirts/hello-kitty/default.jpg",
  //         name: "Hello Kitty Ringer Baby Tee",
  //         slug: slugify("Hello Kitty Ringer Baby Tee", { lower: true }),
  //         description:
  //           "A jersey knit baby tee featuring contrasting ringer trim, a round neckline, chest Hello Kitty graphics, cap sleeves, and cropped hem.",
  //         price: 13.99,
  //         inventory: 40,
  //         categoryId: kidsCategory.id,
  //         brandId: brandGucci.id,
  //       },
  //     });

  //     const zaraDress = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/women/shirts/melody-grap/default.jpg",
  //         name: "My Melody Graphic Fleece Pullover",
  //         slug: slugify("My Melody Graphic Fleece Pullover", { lower: true }),
  //         description:
  //           'A French terry pullover featuring front "My Melody" text, character graphics, long sleeves, a crew neck, and varsity-striped trim.',
  //         price: 20.99,
  //         inventory: 120,
  //         categoryId: womenCategory.id,
  //         brandId: brandZara.id,
  //       },
  //     });

  //     const ruchedTop = await tx.product.create({
  //       data: {
  //         thumbnail: "/images/products/women/shirts/tank-top/default.jpg",
  //         name: "Ruched Cropped Tank Top",
  //         slug: slugify("Ruched Cropped Tank Top", { lower: true }),
  //         description:
  //           "A knit tank top featuring a square-cut neckline, shoulder straps, ruched sides, and a cropped hem.",
  //         price: 10.49,
  //         inventory: 25,
  //         categoryId: womenCategory.id,
  //         brandId: brandVersace.id,
  //       },
  //     });

  //     const blackVariant = await tx.productVariant.create({
  //       data: {
  //         productId: ruchedTop.id,
  //         size: "Standard",
  //         color: "Black",
  //         price: 17.49,
  //         inventory: 50,
  //         hex: "#19161B",
  //       },
  //     });

  //     const greenVariant = await tx.productVariant.create({
  //       data: {
  //         productId: ruchedTop.id,
  //         size: "Standard",
  //         color: "Green",
  //         price: 17.49,
  //         inventory: 50,
  //         hex: "#849FA8",
  //       },
  //     });

  //     const lilacVariant = await tx.productVariant.create({
  //       data: {
  //         productId: fleeceHoodie.id,
  //         size: "Standard",
  //         color: "Lilac",
  //         price: 17.49,
  //         inventory: 50,
  //         hex: "#DBC5C4",
  //       },
  //     });

  //     await tx.productImage.createMany({
  //       data: [
  //         {
  //           url: "/images/products/women/shirts/tank-top/black/black-1.jpg",
  //           variantId: blackVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/black/black-2.jpg",
  //           variantId: blackVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/black/black-3.jpg",
  //           variantId: blackVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/green/green-1.jpg",
  //           variantId: greenVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/green/green-2.jpg",
  //           variantId: greenVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/green/green-3.jpg",
  //           variantId: greenVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/lilac/lilac-1.jpg",
  //           variantId: lilacVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/lilac/lilac-2.jpg",
  //           variantId: lilacVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //         {
  //           url: "/images/products/women/shirts/tank-top/lilac/lilac-3.jpg",
  //           variantId: lilacVariant.id,
  //           productId: fleeceHoodie.id,
  //         },
  //       ],
  //     });
  //   },
  //   {
  //     maxWait: 10000, // 10 seconds
  //     timeout: 20000, // 20 seconds
  //   },
  // );

  await prisma.order.updateMany({
    where: {
      orderId: null,
    },
    data: {
      orderId: generateOrderId(),
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
