import clsx from "clsx";
import { StarRating } from "../StarRating/StarRating";
import { RatingRadio } from "../RatingRadio/RatingRadio";
import { BinaryQuestion } from "../BinaryQuestion/BinaryQuestion";
import { MultipleAnswersQuestionCheckbox } from "../MutipleAnswersQuestion/MultipleAnswersQuestion";

type CardQuestionProps = {
  className?: string;
};

export const CardQuestion = ({ className }: CardQuestionProps) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg h-auto shadow-lg w-[648px] p-8",
        className
      )}
    >
      <div>
        <RatingRadio
          title="Título da pergunta deve ficar aqui"
          subtitle="Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
        />
      </div>
      <div className="mt-10">
        <RatingRadio
          title="Título da pergunta deve ficar aqui"
          subtitle="Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
        />
      </div>

      <div className="mt-10">
        <StarRating
          title="Título da pergunta deve ficar aqui"
          subtitle="Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
        />
      </div>
      <div className="mt-10">
        <BinaryQuestion title="Pergunta simples" />
      </div>
      <div className="mt-10">
        <MultipleAnswersQuestionCheckbox
          title="Pergunta simples"
          options={[
            { label: "opt1", value: "opt1" },
            { label: "opt2", value: "opt2" },
            { label: "opt3", value: "opt3" },
            { label: "opt4", value: "opt4" },
            { label: "opt5", value: "opt5" },
            { label: "opt6", value: "opt6" },
            { label: "opt7", value: "opt7" },
            { label: "opt8", value: "opt8" },
            { label: "opt9", value: "opt9" },
            { label: "opt10", value: "opt10" },
          ]}
        />
      </div>
    </div>
  );
};
