// import { fetchAllBrands, fetchAllTypes } from "@/delete/api";
// import { useQuery } from "@tanstack/react-query";

// interface Type {
//   id: number;
//   name: string;
//   description?: string;
//   img?: string;
// }

// interface ResponseFetchType {
//   count: number;
//   data: Type[];
// }

// export const useFetchTypes = () => {
//   return useQuery<ResponseFetchType, Error>({
//     queryKey: ["types"],
//     queryFn: () => fetchAllTypes(),
//   });
// };

// interface Brand {
//   id: number;
//   name: string;
//   description?: string;
//   img?: string;
// }

// interface ResponseFetchBrand {
//   count: number;
//   data: Brand[];
// }

// export const useFetchBrands = () => {
//   return useQuery<ResponseFetchBrand, Error>({
//     queryKey: ["brands"],
//     queryFn: () => fetchAllBrands(),
//   });
// };
