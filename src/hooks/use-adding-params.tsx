import { useCallback, useEffect } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const useAddingParams = (
  searchParams: any,
  values: string[],
  name: string,
  router: AppRouterInstance,
  pathname: string
) => {
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      params.delete("page");

      return params.toString();
    },
    [searchParams]
  );

  const deletQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      params.delete("page");
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    values.length
      ? router.push(
          pathname + "?" + createQueryString(name, JSON.stringify(values)),
          { scroll: false }
        )
      : router.push(pathname + "?" + deletQueryString(name), {
          scroll: false,
        });
  }, [values]);

  return null;
};

export default useAddingParams;
