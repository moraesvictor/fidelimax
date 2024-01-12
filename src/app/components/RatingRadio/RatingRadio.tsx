import { QuestionTitle } from "../QuestionTitle/QuestionTitle";

type RatingRadioProps = {
  title: string;
  subtitle?: string;
};

export const RatingRadio = ({ title, subtitle }: RatingRadioProps) => {
  return (
    <div>
      <QuestionTitle title={title} subtitle={subtitle} />
      <div className="flex w-full justify-between">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mt-4"
          >
            <input type="radio" />
            <span className="font-poppins font-medium text-xs leading-5">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
