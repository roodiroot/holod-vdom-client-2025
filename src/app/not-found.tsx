import Actions from "@/components/pages/not-found/actions";
import { cn } from "@/lib/utils";
import { beautifulFont } from "./fonts";

export default function NotFound() {
  return (
    <main className='grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-accent'>404</p>
        <h1
          className={cn(
            beautifulFont.className,
            "mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          )}
        >
          Страница не найдена
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          К сожалению, мы не смогли найти страницу, которую вы ищете.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Actions />
        </div>
      </div>
    </main>
  );
}
