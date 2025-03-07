import { Product } from "@/types";

export const newArrivals: Product[] = [
  {
    id: "",
    image: "/images/products/newArrivals/1.png",
    name: "T-shirt with tape details",
    slug: "t-shirt-with-tape-details",
    price: 120,
    discountPrice: 100,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "1",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "",
    image: "/images/products/newArrivals/2.png",
    name: "Skinny fit jeans",
    slug: "skinny-fit-jeans",
    price: 240,
    ratings: [5, 4, 1, 1, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Jeans",
          slug: "jeans",
        },
      ],
    },
  },
  {
    id: "",
    image: "/images/products/newArrivals/3.png",
    name: "Chekered shirt",
    slug: "checkerd-shirt",
    price: 180,
    ratings: [5, 5, 1, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "1",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "",
    image: "/images/products/newArrivals/4.png",
    name: "Sleeve stripped T-shirt",
    slug: "sleeve-stripped-t-shirt",
    price: 130,
    discountPrice: 120,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "1",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
];

export const topSelling: Product[] = [
  {
    id: "",
    image: "/images/products/topSelling/5.png",
    name: "Vertical stripped shirt",
    slug: "vertical-stripped-shirt",
    price: 212,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "1",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "",
    image: "/images/products/topSelling/6.png",
    name: "Courage Grapihc T-shirt",
    slug: "courage-grapihc-t-shirt",
    price: 145,
    discountPrice: 125,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "1",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "",
    image: "/images/products/topSelling/7.png",
    name: "Loose fit bermuda shorts",
    slug: "loose-fit-bermuda-shorts",
    price: 75,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Jeans",
          slug: "jeans",
        },
      ],
    },
  },
  {
    id: "",
    image: "/images/products/topSelling/8.png",
    name: "Faded skinny jeans",
    slug: "faded-skinny-jeans",
    price: 210,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Jeans",
          slug: "jeans",
        },
      ],
    },
  },
];

export const categories = [
  {
    id: "1",
    name: "Casual",
    image: "/images/products/categories/1.png",
  },
  {
    id: "2",
    name: "Formal",
    image: "/images/products/categories/2.png",
  },
  {
    id: "3",
    name: "Party",
    image: "/images/products/categories/3.png",
  },
  {
    id: "4",
    name: "Gym",
    image: "/images/products/categories/4.png",
  },
  {
    id: "5",
    name: "Gothic",
    image: "/images/products/categories/5.png",
  },
  {
    id: "6",
    name: "Vintage",
    image: "/images/products/categories/6.png",
  },
] as const;

export const similarProducts: Product[] = [
  {
    id: "1",
    image: "/images/products/similar/1.png",
    name: "Polo with contrast trims",
    slug: "polo-with-contrast-trims",
    price: 75,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "2",
    image: "/images/products/similar/2.png",
    name: "Gradient graphic t-shirt",
    slug: "gradient-graphic-t-shirt",
    price: 210,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "3",
    image: "/images/products/similar/3.png",
    name: "Polo with tipping details",
    slug: "polo-with-tipping-details",
    price: 75,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
  {
    id: "4",
    image: "/images/products/similar/4.png",
    name: "Black stripped T-shirt",
    slug: "black-stripped-t-shirt",
    price: 210,
    ratings: [5, 4, 4, 3, 5],
    category: {
      id: "1",
      name: "Men",
      slug: "men",
      subCategories: [
        {
          id: "2",
          name: "Shirts",
          slug: "shirts",
        },
      ],
    },
  },
];
