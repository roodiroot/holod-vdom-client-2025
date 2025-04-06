// import { fetchAllProducts, fetchProductById, fetchProductsSearch } from "@/api";
// import { useQueries, useQuery } from "@tanstack/react-query";

// interface Brand {
//   id: number;
//   name: string;
//   description?: string;
//   img?: string;
// }

// interface Type {
//   id: number;
//   name: string;
//   description?: string;
//   img?: string;
// }

// export interface Options {
//   id: number;
//   title: string;
//   description: string;
// }

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   img: string[];
//   logo: string;
//   brandId: number;
//   brand: Brand;
//   typeId: number;
//   type: Type;
//   options: Options[];
//   range: string;
// }

// export interface ProductSearchInterface {
//   id: string;
//   name: string;
//   type: symbol;
//   brand: string;
// }
// // interface ResponceProductSearch {
// //   count: number;
// //   data: ProductSearchInterface[] | [];
// // }

// interface ResponseFetch {
//   count: number;
//   data?: Product[];
// }
// export const useSearchProducts = (text: string) => {
//   return useQuery<ProductSearchInterface[], Error>({
//     queryKey: ["search", text],
//     queryFn: () => fetchProductsSearch(text),
//     select: (data: any) => {
//       if (data.data)
//         return data?.data.map((i: Product) => {
//           return {
//             id: i.id,
//             name: i.name,
//             type: i.type.name,
//             brand: i.brand.name,
//           };
//         });
//     },
//   });
// };

// export const useFetchProductById = (id: string) => {
//   return useQuery<Product, Error>({
//     queryKey: ["prod", id],
//     queryFn: () => fetchProductById(id),
//   });
// };

// export const useFetchOptionsByIdProducts = (id: string) => {
//   return useQuery<
//     {
//       name: string;
//       options: any[];
//       type: any;
//       brand: any;
//       price: number;
//       description: string;
//     },
//     Error
//   >({
//     queryKey: ["prod", id],
//     queryFn: () => fetchProductById(id),
//     select: (data) => {
//       return {
//         name: data.name,
//         options: data.options,
//         type: data.type.name,
//         brand: data.brand.name,
//         price: data.price,
//         description: data.description,
//       };
//     },
//   });
// };

// export const useFetchAllProductsByIds = (value: string[]) => {
//   return useQueries({
//     queries: value.map((i) => {
//       return {
//         queryKey: ["product", i],
//         queryFn: () => fetchProductById(i),
//         staleTime: Infinity,
//       };
//     }),
//     combine: (results) => {
//       return {
//         data: results.map((result) => result.data),
//         pending: results.some((result) => result.isPending),
//         isError: results.some((results) => results.isError),
//         summ: results.reduce(
//           (accumulator, result) => result?.data?.price + accumulator,
//           0
//         ),
//       };
//     },
//   });
// };

// export const useFetchProducts = ({
//   square,
//   compressor,
//   wifi,
//   energy,
//   typeId,
//   brandId,
//   page,
//   sort,
// }: {
//   square: string | null;
//   compressor: string | null;
//   wifi: string | null;
//   energy: string | null;
//   typeId: string | null;
//   brandId: string | null;
//   page: string | number;
//   sort: string | null;
// }) => {
//   return useQuery<ResponseFetch, Error>({
//     queryKey: [
//       "products",
//       { square, compressor, wifi, energy, typeId, brandId, page, sort },
//     ],
//     queryFn: () =>
//       fetchAllProducts({
//         square: square ? JSON.parse(square) : undefined,
//         wifi: wifi ? JSON.parse(wifi) : undefined,
//         energy: energy ? JSON.parse(energy) : undefined,
//         compressor: compressor ? JSON.parse(compressor) : undefined,
//         typeId: typeId ? JSON.parse(typeId) : undefined,
//         brandId: brandId ? JSON.parse(brandId) : undefined,
//         page: JSON.stringify(page),
//         sort: sort ? JSON.parse(sort) : undefined,
//       }).then((res) => res.data),
//   });
// };
