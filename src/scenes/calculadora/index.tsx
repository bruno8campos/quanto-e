import { SelectedPage } from "@/shared/types";
import CaixaCustoFixo from "./CaixaCustoFixo";
import CaixaCustoVar from "./CaixaCustoVar";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Calculadora = ({ setSelectedPage }: Props) => {
  return (
    <section id="calculadora" className="gap-16 bg-white py-10">
      {/* Caixa da calculadora */}
      <div className="mx-auto h-auto w-5/6 items-center justify-center rounded-3xl bg-gray-50 drop-shadow-2xl">
        {/* Caixa Custos Fixos */}
        <div className="mb-4 px-10 pt-10">
          <h1 className="text-3xl font-bold">
            <span className="text-primary-100">+</span> Custos Fixos
          </h1>
          {/* Componentes de Custo Fixo */}
          <div className="items-center justify-between md:flex md:flex-wrap">
            <CaixaCustoFixo />
            <CaixaCustoFixo />
            <CaixaCustoFixo />
            <CaixaCustoFixo />
          </div>
        </div>
        {/* Caixa Custos Variáveis */}
        <div className="mb-4 px-10 pt-10">
          <h1 className=" text-3xl font-bold">
            <span className="text-primary-100">+</span> Custos Variáveis
          </h1>
          {/* Componentes de Custo Variável */}
          <div className="items-center justify-between md:flex md:flex-wrap">
            <CaixaCustoVar />
            <CaixaCustoVar />
            <CaixaCustoVar />
            <CaixaCustoVar />
          </div>
        </div>
        {/* Caixa Mão de Obra */}
        <div className="mb-4 px-10 pt-10">
          <h1 className="text-3xl font-bold">
            <span className="text-primary-100">+</span> Mão de Obra
          </h1>
        </div>
        {/* Caixa Orçamento */}
        <div className="mb-4 p-10">
          <h1 className="text-3xl font-bold">
            <span className="text-primary-100">=</span> Orçamento
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Calculadora;
