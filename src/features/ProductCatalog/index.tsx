import { useId, useState } from "react";
import { type Product, products as productsList } from "../../lib/products";
import Card from "../../components/core/Card";
import { twMerge } from "tailwind-merge";
import Typography from "../../components/ui/Typography";

export interface ProductCatalogProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  className,
  ...props
}) => {
  const [products] = useState<Product[]>(productsList);
  const productId = useId();

  return (
    <div {...props} className={twMerge(className, "flex flex-col gap-[50px]")}>
      <Typography variant="25px-bold" type="h2">
        Каталог товаров
      </Typography>

      <div className="flex flex-wrap gap-[30px]">
        {products.map((product) => (
          <Card {...product} id={productId} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
