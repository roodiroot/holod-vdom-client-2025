import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

interface MenuLinkHrefProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
}

const MenuLinkHref: React.FC<MenuLinkHrefProps> = ({
  label,
  href,
  ...props
}) => {
  return (
    <div className='flow-root'>
      <Link
        href={href}
        {...props}
        className='-m-2 block p-2 font-medium text-gray-900'
      >
        {label}
      </Link>
    </div>
  );
};

export default MenuLinkHref;
