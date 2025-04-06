// "use client";

// import FiltersBlock from "@/components/pages/products/filters-block";
// import ProductsList from "@/components/pages/products/products-list";
// import SortBlock from "@/components/pages/products/sort-block";
// import useAddingParams from "@/hooks/use-adding-params";
// import { useFetchOptions } from "@/queries/options";
// import { useFetchProducts } from "@/queries/product";
// import { useFetchBrands, useFetchTypes } from "@/queries/type&brand";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
// import AllFiltersSceletone from "./all-filters-sceletone";

// const ProductsActions = () => {
// const router = useRouter();
// const pathname = usePathname();
// const searchParams = useSearchParams();

// const square = searchParams.get("square");
// const compressor = searchParams.get("compressor");
// const wifi = searchParams.get("wifi");
// const energy = searchParams.get("energy");
// const typeId = searchParams.get("typeId");
// const brandId = searchParams.get("brandId");
// const page = searchParams.get("page") ?? 1;
// const sort = searchParams.get("sort");

// const { data: typesList, isSuccess: isSuccessType } = useFetchTypes();
// const { data: brandList, isSuccess: isSuccessBrand } = useFetchBrands();
// const { data: squareList, isLoading: isLoadingSquare } = useFetchOptions(
//   "Площадь помещения: м²."
// );
// const { data: wifiList, isLoading: isLoadingWifi } =
//   useFetchOptions("Наличие WiFi:");
// const { data: res, isLoading } = useFetchProducts({
//   square,
//   compressor,
//   wifi,
//   energy,
//   typeId,
//   brandId,
//   page,
//   sort,
// });

// const [selectBrand, setSelectBrand] = useState(
//   brandId ? JSON.parse(brandId) : []
// );
// const [selectType, setSelectType] = useState(
//   typeId ? JSON.parse(typeId) : []
// );
// const [selectSquare, setSelectSquare] = useState(
//   square ? JSON.parse(square) : []
// );
// const [selectWiFi, setSelectWiFi] = useState(wifi ? JSON.parse(wifi) : []);

// let squareArray: any = [];
// if (squareList) {
//   squareArray = Object.values(squareList);
// }

// let wifiArray: any = [];
// if (wifiList) {
//   wifiArray = Object.values(wifiList);
// }

// useAddingParams(searchParams, selectSquare, "square", router, pathname);
// useAddingParams(searchParams, selectBrand, "brandId", router, pathname);
// useAddingParams(searchParams, selectType, "typeId", router, pathname);
// useAddingParams(searchParams, selectWiFi, "wifi", router, pathname);

// return (
//   <>
//     <div className="py-4">
//       <SortBlock />
//     </div>
//     <div className="pt-0 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
{
  /* {isLoadingWifi || isLoadingSquare ? (
          <AllFiltersSceletone />
        ) : (
          <FiltersBlock
            isSuccessType={isSuccessType}
            selectType={selectType}
            setSelectType={setSelectType}
            typesList={typesList}
            isSuccessBrand={isSuccessBrand}
            selectBrand={selectBrand}
            setSelectBrand={setSelectBrand}
            brandList={brandList}
            squareArray={squareArray}
            selectSquare={selectSquare}
            setSelectSquare={setSelectSquare}
            wifiArray={wifiArray}
            selectWiFi={selectWiFi}
            setSelectWiFi={setSelectWiFi}
          />
        )}
        <ProductsList
          isLoading={isLoading}
          productList={res?.data}
          count={res?.count}
        /> */
}
//       </div>
//     </>
//   );
// };

// export default ProductsActions;
