// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { countElementsPage } from "@/utils/count-elements-in-page";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";
// import RenderPaginationButtons from "../components/pages/products/render-pagination-button";
// interface PaginationProps extends React.HtmlHTMLAttributes<HTMLElement> {
//   allCount?: number;
// }

// const PaginationBlock: React.FC<PaginationProps> = ({
//   className,
//   allCount = 0,
//   ...props
// }) => {
//   const [pageSelect, setPageSelect] = useState(1);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();

//   const createQueryString = useCallback(
//     (name: string, value: string) => {
//       const params = new URLSearchParams(searchParams.toString());
//       params.set(name, value);

//       return params.toString();
//     },
//     [searchParams]
//   );
//   const deletQueryString = useCallback(
//     (name: string) => {
//       const params = new URLSearchParams(searchParams.toString());
//       params.delete(name);
//       return params.toString();
//     },
//     [searchParams]
//   );

//   useEffect(() => {
//     pageSelect > 1
//       ? router.push(
//           pathname + "?" + createQueryString("page", String(pageSelect))
//         )
//       : router.push(pathname + "?" + deletQueryString("page"));
//   }, [pageSelect]);

//   const pageArray = (): number[] => {
//     const arr = [];
//     for (let i = 1; i <= Math.ceil(allCount / countElementsPage); i++) {
//       arr.push(i);
//     }

//     return arr;
//   };

//   return (
//     <Pagination {...props} className={className}>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious
//             href="#"
//             onClick={() =>
//               setPageSelect((curentPage) => {
//                 if (curentPage > 1) {
//                   return curentPage - 1;
//                 }
//                 return curentPage;
//               })
//             }
//           />
//         </PaginationItem>
//         <RenderPaginationButtons
//           pageArray={pageArray()}
//           pageSelect={pageSelect}
//           setPageSelect={setPageSelect}
//         />
//         <PaginationItem>
//           <PaginationNext
//             href="#"
//             onClick={() =>
//               setPageSelect((curentPage) => {
//                 if (curentPage < pageArray().length) {
//                   return curentPage + 1;
//                 }
//                 return curentPage;
//               })
//             }
//           />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   );
// };

// export default PaginationBlock;
