// import axios from "axios";

// import { ParamsFilterType } from "@/types/params-filter";
// import { countElementsPage } from "@/utils/count-elements-in-page";

// const request = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

// const fetchProductById = async (id: string) => {
//   const { data } = await request.get(`/product/${id}`);
//   return data;
// };

// const fetchProductsSearch = async (text: string) => {
//   const { data } = await request.get("/product/search", {
//     params: { text },
//   });
//   return data;
// };

// const fetchAllProducts = async (params: ParamsFilterType) => {
//   const page = isNaN(Number(JSON.parse(params.page ?? "1")))
//     ? 1
//     : Number(JSON.parse(params.page ?? "1"));

//   const data = await request.get("/product", {
//     params: {
//       filter: JSON.stringify({
//         typeId: params.typeId ?? undefined,
//         brandId: params.brandId ?? undefined,
//         square: params.square ?? undefined,
//         compressor: params.compressor ?? undefined,
//         wifi: params.wifi ?? undefined,
//         energy: params.energy ?? undefined,
//       }),
//       range: JSON.stringify([
//         countElementsPage,
//         (page - 1) * countElementsPage,
//       ]),
//       sort: JSON.stringify(params.sort ?? undefined),
//     },
//   });
//   return { ...data };
// };

// const getAllProducts = async () => {
//   const { data } = await request.get("/product", {
//     params: {
//       range: JSON.stringify([999, 0]),
//     },
//   });
//   return { ...data };
// };

// const fetchAllTypes = async () => {
//   const { data } = await request.get("/type");
//   return data;
// };
// const fetchAllBrands = async () => {
//   const { data } = await request.get("/brand");
//   return { ...data };
// };

// const fetchAllOptions = async (title: string) => {
//   const { data } = await request.get("/option", {
//     params: { title },
//   });
//   return data;
// };

// export {
//   fetchAllProducts,
//   fetchAllTypes,
//   fetchAllBrands,
//   fetchProductById,
//   fetchProductsSearch,
//   fetchAllOptions,
//   getAllProducts,
// };

// ['square', 'Площадь помещения: м².'],
// ['compressor', 'Тип компрессора:'],
// ['wifi', 'Наличие WiFi:'],
// ['energy', 'Класс энегроэффективности:'],

// filter: '{"square":["20","23"],"compressor":"инвертор","wifi":"да","energy":["A","B"]}',
// range: '[10,0]',
// sort: '["id","ASC"]'
