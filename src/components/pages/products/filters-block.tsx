"use client";

import FilterElement from "@/components/pages/products/filter-element";
import { Skeleton } from "@/components/ui/skeleton";
import useWindowSize from "@/hooks/use-resize";

interface FiltersBlockProps {
  isSuccessType: boolean;
  isSuccessBrand: boolean;
  typesList: any;
  brandList: any;
  squareArray: any;
  wifiArray: any;
  selectType: any;
  setSelectType: (value: any) => void;
  selectBrand: any;
  setSelectBrand: (value: any) => void;
  selectSquare: any;
  setSelectSquare: (value: any) => void;
  selectWiFi: any;
  setSelectWiFi: (value: any) => void;
}

const FiltersBlock: React.FC<FiltersBlockProps> = ({
  isSuccessType,
  typesList,
  selectType,
  setSelectType,
  isSuccessBrand,
  brandList,
  squareArray,
  wifiArray,
  selectBrand,
  setSelectBrand,
  selectSquare,
  setSelectSquare,
  selectWiFi,
  setSelectWiFi,
}) => {
  const { width } = useWindowSize();
  if (width && width < 1024) {
    return null;
  }
  if (!width) {
    return null;
  }

  return (
    <aside>
      <h2 className='sr-only'>Фильтры</h2>
      <div className='hidden lg:block'>
        <form className='space-y-10 divide-y divide-gray-200'>
          {isSuccessType ? (
            <div>
              <FilterElement
                title='Тип устройств'
                value={selectType}
                setValue={setSelectType}
                list={typesList?.data.map((i: any) => ({
                  name: i.name,
                  value: i.id,
                }))}
              />
            </div>
          ) : (
            <div className='overflow-hidden rounded-lg '>
              <Skeleton className='flex h-[200px]' />
            </div>
          )}

          {isSuccessBrand ? (
            <div className='pt-10'>
              <FilterElement
                title='Бренды'
                value={selectBrand}
                setValue={setSelectBrand}
                list={brandList?.data.map((i: any) => ({
                  name: i.name,
                  value: i.id,
                }))}
              />
            </div>
          ) : (
            <div className='pt-10 overflow-hidden rounded-lg '>
              <Skeleton className='flex h-[200px]' />
            </div>
          )}

          {squareArray.length ? (
            <div className='pt-10'>
              <FilterElement
                title='Площадь помещения'
                value={selectSquare}
                setValue={setSelectSquare}
                list={squareArray
                  ?.map((element: string) => ({
                    name: `${element} м²`,
                    value: element,
                  }))
                  .sort(
                    (a: { value: string }, b: { value: string }) =>
                      Number(a.value) - Number(b.value)
                  )}
              />
            </div>
          ) : (
            <div className='pt-10 overflow-hidden rounded-lg '>
              <Skeleton className='flex h-[200px]' />
            </div>
          )}

          {wifiArray.length ? (
            <div className='pt-10'>
              <FilterElement
                title='Управление WiFi'
                value={selectWiFi}
                setValue={setSelectWiFi}
                list={wifiArray?.map((element: string) => ({
                  name: element,
                  value: element,
                }))}
              />
            </div>
          ) : (
            <div className='pt-10 overflow-hidden rounded-lg '>
              <Skeleton className='flex h-[200px]' />
            </div>
          )}
        </form>
      </div>
    </aside>
  );
};

export default FiltersBlock;
