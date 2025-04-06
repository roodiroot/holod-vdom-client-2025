// "use client";

// import CardProduct from "@/components/pages/products/card-product";
// import PaginationBlock from "../../../delete/pagination-block";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Options, Product } from "@/queries/product";

// interface ProductsListProps extends React.HtmlHTMLAttributes<HTMLElement> {
//   isLoading: boolean;
//   productList?: Product[];
//   count?: number;
// }

// const ProductsList: React.FC<ProductsListProps> = ({
//   isLoading,
//   productList,
//   count,
// }) => (
//   <>
//     <section className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
//       <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
//         {isLoading
//           ? new Array(9).fill("").map((_, i) => (
//               <div key={i} className="overflow-hidden rounded-lg ">
//                 <Skeleton className="flex h-[382px]" />
//               </div>
//             ))
//           : productList?.map((i: Product) => (
//               <CardProduct
//                 key={i.id}
//                 productId={i.id}
//                 title={i.name}
//                 price={i.price}
//                 logo={i.logo}
//                 img={i.img}
//                 options={i.options.filter(
//                   (i: Options) =>
//                     i.title === "Площадь помещения: м²." ||
//                     i.title === "Холодопроизводительность, kBTU" ||
//                     i.title === "Наличие WiFi:"
//                 )}
//               />
//             ))}
//       </div>
//     </section>
//     <PaginationBlock className="mt-6 col-span-4" allCount={count} />
//   </>
// );

// export default ProductsList;
