export type product = {
   id: number;
   name: string;
   description: string;
   category: string;
   image: string;
   price: number;
}

export const emptyProduct: product = {
   id: 1,
   name: '',
   description: '',
   category: '',
   image: '',
   price: 0
}