"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Actions = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/")} size='lg'>
        На главную
      </Button>
      <Link href='/contacts' className='text-sm font-semibold text-gray-900'>
        Написать в поддержку <span aria-hidden='true'>&rarr;</span>
      </Link>
    </>
  );
};

export default Actions;
