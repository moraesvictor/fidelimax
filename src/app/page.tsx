import { CardQuestion } from "./components/CardQuestion/CardQuestion";

export default function Home() {
  return (
    <div className="h-full pb-8">
      <header className="bg-[#19202D] h-[316px] top-0 flex justify-center">
        <div className="mt-[126px]">
          <span className="font-poppins font-semibold text-[40px]/[40px] text-white">
            Pesquisa de satisfação
          </span>
          <CardQuestion className="mt-6" />
        </div>
      </header>
    </div>
  );
}
