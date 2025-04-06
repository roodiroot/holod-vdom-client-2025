// "use client";

// import { useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useFetchBrands, useFetchTypes } from "@/queries/type&brand";

// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import FilterElement from "@/components/pages/products/filter-element";
// import useAddingParams from "@/hooks/use-adding-params";
// import { useFetchOptions } from "@/queries/options";

// const MobilFiltersContent: React.FC<{ onClose: () => void }> = ({
//   onClose,
// }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const { data: typesList, isSuccess: isSuccessType } = useFetchTypes();
//   const { data: brandList, isSuccess: isSuccessBrand } = useFetchBrands();
//   const { data: squareList } = useFetchOptions("Площадь помещения: м².");
//   const { data: wifiList } = useFetchOptions("Наличие WiFi:");

//   let squareArray: any = [];
//   if (squareList) {
//     squareArray = Object.values(squareList);
//   }

//   let wifiArray: any = [];
//   if (wifiList) {
//     wifiArray = Object.values(wifiList);
//   }

//   const squareParam = searchParams.get("square");
//   const wifiParam = searchParams.get("wifi");
//   const typeIdParam = searchParams.get("typeId");
//   const brandIdParam = searchParams.get("brandId");

//   const [selectBrand, setSelectBrand] = useState(
//     brandIdParam ? JSON.parse(brandIdParam) : []
//   );
//   const [selectType, setSelectType] = useState(
//     typeIdParam ? JSON.parse(typeIdParam) : []
//   );
//   const [selectSquare, setSelectSquare] = useState(
//     squareParam ? JSON.parse(squareParam) : []
//   );
//   const [selectWiFi, setSelectWiFi] = useState(
//     wifiParam ? JSON.parse(wifiParam) : []
//   );

//   useAddingParams(searchParams, selectSquare, "square", router, pathname);
//   useAddingParams(searchParams, selectBrand, "brandId", router, pathname);
//   useAddingParams(searchParams, selectType, "typeId", router, pathname);
//   useAddingParams(searchParams, selectWiFi, "wifi", router, pathname);

//   return (
//     <div className='relative flex h-full w-full flex-col overflow-y-auto bg-white pt-4 pb-6'>
//       <div className='flex items-center justify-between px-4'>
//         <h2 className='text-lg font-medium text-gray-900'>Фильтры</h2>
//         <div onClick={onClose} className='p-2 -mr-2'>
//           <XMarkIcon className='w-6 h-6' />
//         </div>
//       </div>
//       <form className='mt-4'>
//         <Accordion type='single' collapsible>
//           {isSuccessType && (
//             <AccordionItem
//               className='border-t border-b-0 border-gray-200 py-4'
//               value='item-1'
//             >
//               <AccordionTrigger className='py-2 px-4'>
//                 Тип устройств
//               </AccordionTrigger>
//               <AccordionContent>
//                 <FilterElement
//                   value={selectType}
//                   setValue={setSelectType}
//                   list={typesList?.data.map((i) => {
//                     return { name: i.name, value: i.id };
//                   })}
//                   className='px-4 pb-2 pt-4'
//                 />
//               </AccordionContent>
//             </AccordionItem>
//           )}
//           {isSuccessBrand && (
//             <AccordionItem
//               className='border-t border-b-0 border-gray-200 py-4'
//               value='item-2'
//             >
//               <AccordionTrigger className='py-2 px-4'>Бренды</AccordionTrigger>
//               <AccordionContent>
//                 <FilterElement
//                   value={selectBrand}
//                   setValue={setSelectBrand}
//                   list={brandList?.data.map((i) => {
//                     return { name: i.name, value: i.id };
//                   })}
//                   className='px-4 pb-2 pt-4'
//                 />
//               </AccordionContent>
//             </AccordionItem>
//           )}
//           {squareArray.length && (
//             <AccordionItem
//               className='border-t border-b-0 border-gray-200 py-4'
//               value='item-3'
//             >
//               <AccordionTrigger className='py-2 px-4'>
//                 Площадь помещения
//               </AccordionTrigger>
//               <AccordionContent>
//                 <FilterElement
//                   value={selectSquare}
//                   setValue={setSelectSquare}
//                   list={squareArray
//                     ?.map((element: string) => {
//                       return { name: `${element} м²`, value: element };
//                     })
//                     .sort(
//                       (a: { value: string }, b: { value: string }) =>
//                         Number(a.value) - Number(b.value)
//                     )}
//                   className='px-4 pb-2 pt-4'
//                 />
//               </AccordionContent>
//             </AccordionItem>
//           )}
//           {wifiArray.length && (
//             <AccordionItem
//               className='border-t border-b-0 border-gray-200 py-4'
//               value='item-5'
//             >
//               <AccordionTrigger className='py-2 px-4'>
//                 Управление WiFi
//               </AccordionTrigger>
//               <AccordionContent>
//                 <FilterElement
//                   value={selectWiFi}
//                   setValue={setSelectWiFi}
//                   list={wifiArray
//                     ?.map((element: string) => {
//                       return { name: element, value: element };
//                     })
//                     .sort(
//                       (a: { value: string }, b: { value: string }) =>
//                         Number(a.value) - Number(b.value)
//                     )}
//                   className='px-4 pb-2 pt-4'
//                 />
//               </AccordionContent>
//             </AccordionItem>
//           )}
//         </Accordion>
//       </form>
//     </div>
//   );
// };

// export default MobilFiltersContent;
