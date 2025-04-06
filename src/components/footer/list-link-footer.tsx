import Link from "next/link";

interface ListLinkFooterProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  list?: { title: string; link: string }[];
}
const ListLinkFooter: React.FC<ListLinkFooterProps> = ({
  title,
  list,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <ul className="mt-6 text-sm space-y-6">
        {list ? (
          list.map((i) => (
            <li className="hover:text-accent" key={i.link}>
              <Link href={i.link}>{i.title}</Link>
            </li>
          ))
        ) : (
          <>
            <div>
              <h3 className="font-semibold text-gray-900">Консультация:</h3>
              <div className="mt-2">
                <p>
                  <a href="tel:+79050096888">
                    Телефон:{" "}
                    <span className="whitespace-nowrap">
                      +7 (905) 009 68 88
                    </span>
                  </a>
                </p>
                <p>
                  <a href="mailto:info@holodvdom.ru">
                    Email:{" "}
                    <span className="whitespace-nowrap  line-clamp-1">
                      info@holod-vdom.ru
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Логистика:</h3>
              <div className="mt-2">
                <p>
                  <a href="tel:+79050096888">
                    Телефон:{" "}
                    <span className="whitespace-nowrap">
                      +7 (905) 009 68 88
                    </span>
                  </a>
                </p>
                <p>
                  <a href="mailto:logistics@holodvdom.ru">
                    Email:{" "}
                    <span className="whitespace-nowrap line-clamp-1">
                      logistics@holod-vdom.ru
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Соцсети:</h3>
              <div className="mt-2">
                <p>
                  <a href="https://t.me/holod_v_dom">
                    Телеграм:{" "}
                    <span className="whitespace-nowrap">@holod_v_dom</span>
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/79050096888">
                    Whatsapp:{" "}
                    <span className="whitespace-nowrap">
                      +7 (905) 009 68 88
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default ListLinkFooter;
