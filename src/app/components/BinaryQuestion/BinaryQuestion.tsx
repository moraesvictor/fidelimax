type BinaryQuestionProps = {
  title: string;
};

export const BinaryQuestion = ({ title }: BinaryQuestionProps) => {
  return (
    <div>
      <span className="text-[16px]/[16px] font-semibold">{title}</span>
      <div className="flex">
        <div className="flex">
          <span className="mr-2">Sim</span>
          <input type="radio" />
        </div>
        <div className="flex ml-3">
          <span className="mr-2">Não</span>
          <input type="radio" />
        </div>
      </div>
    </div>
  );
};
