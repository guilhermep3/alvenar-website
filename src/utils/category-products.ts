import { products } from "@/data/products";
import { product } from "@/types/product";

interface CategoryGroup {
   [key: string]: product[];
 }
export function productsByCategory() {

   const categoryGroup = products.reduce((acc, product) => {
      const { category } = product;

      if (!acc[category]) {
         acc[category] = [];
      }
      acc[category].push(product);
      return acc;
   }, {} as CategoryGroup);

   return categoryGroup;
}
export const armchairProducts = productsByCategory().Armchair;
export const sofaProducts = productsByCategory().Sofa;