type Option = {
  label: string;
  value: string;
};

type MultipleAnswerQuestion = {
  title: string;
  options: Option[];
};
export const MultipleAnswersQuestionCheckbox = ({
  title,
  options,
}: MultipleAnswerQuestion) => {
  return (
    <div>
      <span className="text-[16px]/[16px] font-semibold">{title}</span>
      {options.map((option, index) => (
        <div key={index} className="flex mt-8 items-center">
          <input
            value={option.value}
            type="checkbox"
            className="mr-2 w-4 h-4 border-2"
          />
          <span className="text-[14px]/[14px] font-medium text=[#333E4F]">
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};
