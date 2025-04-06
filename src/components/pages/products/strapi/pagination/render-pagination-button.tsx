"use client";

import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const RenderPaginationButtons = ({
  pageArray,
  pageSelect,
  setPageSelect,
}: {
  pageArray: number[];
  pageSelect: number;
  setPageSelect: React.Dispatch<React.SetStateAction<number>>;
}) => {
  let visiblePages: number[] = [];
  if (pageArray.length <= 3) {
    visiblePages = pageArray;
  } else {
    if (pageSelect === 1 || pageSelect === 2) {
      visiblePages = pageArray.slice(0, 3);
    } else if (
      pageSelect === pageArray.length ||
      pageSelect === pageArray.length - 1
    ) {
      visiblePages = pageArray.slice(-3);
    } else {
      visiblePages = pageArray.slice(pageSelect - 2, pageSelect + 1);
    }
  }

  return (
    <>
      {visiblePages[0] !== 1 && (
        <PaginationItem>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault();
              setPageSelect(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      )}

      {visiblePages[0] > 2 && (
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
      )}

      {visiblePages?.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            isActive={pageSelect === page}
            onClick={(e) => {
              e.preventDefault();
              setPageSelect(page);
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}

      {visiblePages[visiblePages.length - 1] < pageArray.length - 1 && (
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
      )}

      {pageArray.length &&
      visiblePages[visiblePages.length - 1] !== pageArray.length ? (
        <PaginationItem>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault();
              setPageSelect(pageArray.length);
            }}
          >
            {pageArray.length}
          </PaginationLink>
        </PaginationItem>
      ) : null}
    </>
  );
};

export default RenderPaginationButtons;
