// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import Stars from "@/components/ui/elements/stars";
// import { useFetchProductById } from "@/queries/product";
// import ProductPageSkeleton from "@/components/pages/products/product-page-skeleton";
// import useBasket from "@/hooks/use-basket";
// import SliderElement from "@/components/pages/products/product-page/slider-element";
// import CharacteristicsBlock from "@/delete/characteristics-block-server";
// import { format } from "@/lib/format";
// import SliderPageSkeleton from "@/components/pages/products/slider-page-skeleton";

// const ProductPageClient = () => {
//   const params = useParams<{ id: string }>();
//   const router = useRouter();
//   const { data, isLoading, error } = useFetchProductById(params.id);
//   const { basketList, addElementBasketList, removeElementBasketList } =
//     useBasket();
//   // console.log("page");
//   const togleProductBasket: () => void = () => {
//     if (basketList.includes(params.id)) {
//       removeElementBasketList(params.id);
//       toast.info("Товар удален из корзины");
//     } else {
//       addElementBasketList(params.id);
//       toast.info("Товар добавлен в корзину", {
//         description: "Осталось оформить заказ!",
//         action: {
//           label: "Оформить",
//           onClick: () => router.push("/basket"),
//         },
//       });
//     }
//   };

//   if (isLoading) {
//     return <ProductPageSkeleton />;
//   }
//   if (error) {
//     return <ProductPageSkeleton error={error} />;
//   }
//   if (!data) {
//     return (
//       <ProductPageSkeleton
//         message={`Товара с id = ${params.id} не существует`}
//       />
//     );
//   }
//   return (
//     <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
//       {data?.logo && data.img ? (
//         <SliderElement images={[data?.logo, ...data?.img]} />
//       ) : (
//         <SliderPageSkeleton />
//       )}
//       <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//           {data?.name}
//         </h1>
//         <div className="mt-3">
//           <h2 className="sr-only">Информация о товаре</h2>
//           <p className="text-3xl tracking-tight text-gray-900">
//             {format(data?.price)}
//           </p>
//         </div>
//         <div className="mt-3">
//           <h3 className="sr-only">Отзывы</h3>
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <Stars />
//             </div>
//           </div>
//         </div>
//         <div className="mt-6">
//           <h3 className="sr-only">Описание</h3>
//           <p>{data?.description}</p>
//         </div>
//         <div className="mt-10 flex">
//           <Button
//             variant={
//               basketList.includes(params.id) ? "togleDefault" : "default"
//             }
//             onClick={togleProductBasket}
//             size="lg"
//           >
//             {basketList.includes(params.id)
//               ? "Удалить из корзины"
//               : "Добавить в корзину"}
//           </Button>
//         </div>
//         <CharacteristicsBlock
//           characteristics={data.options}
//           brand={data.brand.name}
//           type={data.type.name}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductPageClient;
