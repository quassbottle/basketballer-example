export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discount?: number;
  imageUrl: string;
}

const productFactory = (id: number): Product => {
  return {
    id,
    title: `Баскетбольный мяч №${id}`,
    description:
      "Яркая и нестандартная модель TT из коллекции мячей Street line для любительской игры",
    price: 1799,
    discount: 509,
    imageUrl: "https://i.ytimg.com/vi/a6VmAni2SCA/maxresdefault.jpg",
  };
};

export const products = Array.from({ length: 10 }, (_, i) =>
  productFactory(i + 1)
);
