import { cn } from "@/lib/utils";

interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn("text-accent hidden sm:block", className)}>
      {children}
    </button>
  );
};

export default ButtonText;
