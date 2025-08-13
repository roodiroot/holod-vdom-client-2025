import Link from "next/link";
import Logo from "../ui/logo";
import FormFooter from "./form-footer";
import ListLinkFooter from "./list-link-footer";
import ListLinkFooterCatalog from "./list-link-footer-catalog";
import InstallmentBuner from "./installment";

const menuList = [
  { link: "/catalog", title: "Каталог" },
  { link: "/about", title: "О нас" },
  { link: "/contacts", title: "Контакты" },
  { link: "/basket", title: "Корзина" },
  { link: "/delivery", title: "Доставка" },
  { link: "/price", title: "Цены на услуги" },
  { link: "/sales", title: "Акции" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <h2 className="sr-only">
        Холод в дом, установка кондиционеров в Саранске
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
            <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1 flex">
              <Logo className="w-auto h-8" />
            </div>
            <div className="col-span-6 mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
              <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <ListLinkFooterCatalog />
                <ListLinkFooter title="Меню" list={menuList} />
              </div>
              <ListLinkFooter title="Контакты" />
            </div>
            <FormFooter />
          </div>
        </div>
        <InstallmentBuner />
        <div className="border-t border-gray-200 py-6 flex flex-col gap-y-2 gap-x-4 sm:flex-row">
          <p className="text-xs">© 2025 Холод в дом. </p>
          <Link href={"/docs/oferta"} className="text-xs">
            Оферта
          </Link>
          <Link href={"/docs/policy"} className="text-xs">
            Политика конфиденциальности
          </Link>
          <Link href={"/docs/terms"} className="text-xs">
            Согласие на обработку персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
