interface QuotesProps extends React.SVGAttributes<SVGSVGElement> {}
const Quotes: React.FC<QuotesProps> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      width='24'
      height='18'
      viewBox='0 0 24 18'
      aria-hidden='true'
      className={className}
    >
      <path
        d='M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z'
        fill='currentColor'
      ></path>
    </svg>
  );
};

export default Quotes;
