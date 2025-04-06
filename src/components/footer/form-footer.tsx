import PromptForm from "@/components/action-forms/prompt-form";

const FormFooter = () => {
  return (
    <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
      <h3 className="text-sm font-medium text-gray-900">
        Форма обратной связи
      </h3>
      <p className="mt-6 text-sm">
        Оставьте номер если есть вопрос Мы свяжемся в течении пяти минут.
      </p>
      <PromptForm />

      <div className="mt-8">
        <a className="text-xs" href="https://matryoshka-studio.ru/">
          Разработка и&nbsp;дизайн{" "}
          <span className="text-accent">Веб студия &laquo;Матрёшка&raquo;</span>
        </a>
      </div>
    </div>
  );
};

export default FormFooter;
