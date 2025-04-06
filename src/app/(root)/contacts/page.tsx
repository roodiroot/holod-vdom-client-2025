import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    'Контакты интернет магазина "Холод в дом" — адреса, телефоны, почта. Свяжитесь с нами самим удобным способом.',
};

const Contacts = () => {
  return (
    <div className="bg-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              Контактная <span className="text-accent">информация</span>
            </h2>
            <p className="mt-6 text-lg leading-8 ">
              У нас нет фиксированного офиса, но наши бригады оперативно
              выезжают для работы по всему региону. Все консультации и заказы
              осуществляются онлайн или по телефону.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Служба поддержки и консультации:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>
                  <a href="tel:+79050096888">Телефон: +7 (905) 009 68 88</a>
                </p>
                <p>
                  <a href="mailto:info@holod-vdom.ru"></a>Email:
                  info@holod-vdom.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Заказ и консультация:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>
                  <a href="tel:+79050096888">Телефон: +7 (905) 009 68 88</a>
                </p>
                <p>
                  <a href="mailto:sale@holod-vdom.ru">
                    Email: sale@holod-vdom.ru
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Служба логистики и доставки:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>
                  <a href="tel:+79050096888">Телефон: +7 (905) 009 68 88</a>
                </p>
                <p>
                  <a href="mailto:logistics@holod-vdom.ru">
                    Email: logistics@holod-vdom.ru
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Сервис и техническая поддержка:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>
                  <a href="tel:+79050096888">Телефон: +7 (905) 009 68 88</a>
                </p>
                <p>
                  <a href="mailto:service@holod-vdom.ru">
                    Email: service@holod-vdom.ru
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Социальные сети:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>
                  <a href="https://t.me/holod_v_dom">Телеграм: @holod_v_dom</a>
                </p>
                <p>
                  <a href="https://wa.me/79050096888">
                    Whatsapp: +7 (905) 009 68 88
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Адрес Пенза:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>г. Пенза ул. Измайлова, 15Б</p>
                <p>Рабочие часы: Пн-Сб: 8:00 - 20:00</p>
                <p>Выходной: Воскресенье</p>
              </div>
            </div>
            <div>
              <h3 className="border-l border-accent pl-6 font-semibold text-gray-900">
                Адрес Саранск:
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2">
                <p>г. Саранск ул. Терешковой 7а</p>
                <p>Рабочие часы: Пн-Сб: 8:00 - 20:00</p>
                <p>Выходной: Воскресенье</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
