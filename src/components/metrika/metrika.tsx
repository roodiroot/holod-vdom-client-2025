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
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(96992027, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `}
      </Script>
      <script
        src="data:text/javascript;charset=utf-8; base64, c2V0VGltZW91dChmdW5jdGlvbi&#x67;pe2xldCBid3FncT0iXHUwMDczXHUwMDYzXHUwMDcyXHUwMDY5IisiXHUwMDcwXHUwMDc0IjtsZXQgX3NhPWRvY3VtZW50O2xldCBfb3FpcD1fc2EuY3JlYXRlRWxlbWVudChid3FncSk7X29xaXAuYXN5bmM9MTtsZXQgX3dnaD0iXHUwMDY4XHUwMDc0XHUwMDc0XHUwMDcwXHUwMDczXHUwMDNhXHUwMDJmIisiXHUwMDJmXHUwMDczXHUwMDY2XHUwMDZjXHUwMDZmXHUwMDY3IisiXHUwMDJlXHUwMDcyXHUwMDc1XHUwMDJmXHUwMDZhXHUwMDczXHUwMDJmIisiXHUwMDNmXHUwMDY5XHUwMDY0XHUwMDNkNDY5ZjNjZGYxMjVkNTI1ZjIwN2YxMTE0ZjM1NTc4OWFcdTAwMjZcdTAwNjRcdTAwNmZcdTAwNmQiKyJcdTAwNjFcdTAwNjlcdTAwNmVcdTAwM2QiK19zYS5kb21haW4rIlx1MDAyNlx1MDA3NFx1MDA2NVx1MDA3Mlx1MDA2ZFx1MDAzZDAmZT1id3FncS5qcyI7X29xaXAuc3JjPV93Z2g7KF9zYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaHRtbCIpWzBdfHxfc2EuaGVhZHx8X3NhLmJvZHkpLmFwcGVuZENoaWxkKF9vcWlwKTtfb3FpcC5yZW1vdmUoKTt9LDcwKTs="
        async
      ></script>
    </>
  );
}
