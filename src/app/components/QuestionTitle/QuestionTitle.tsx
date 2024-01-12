type QuestionTitleProps = {
  title: string;
  subtitle?: string;
};

export const QuestionTitle = ({ title, subtitle }: QuestionTitleProps) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <span className="font-poppins font-semibold text-2xl/[30px] leading-7 text-[#19202D] col-span-12">
        {title}
      </span>
      <span className="font-poppins font-medium text-sm/[21px] leading-6 text-[#333E4F] col-span-12">
        {subtitle}
      </span>
    </div>
  );
};
