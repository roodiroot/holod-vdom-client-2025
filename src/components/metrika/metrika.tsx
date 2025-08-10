"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Metrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    //@ts-ignore
    ym(96992027, "hit", window.location.href);
  }, [pathName, searchParams]);
  return (
    <>
      <Script id="yandex-metrika">
        {`
        (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

        ym(96992027, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
      `}
      </Script>
    </>
  );
}
