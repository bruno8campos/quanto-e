import { useState } from "react";
import CaixaCustoFixo from "./CaixaCustoFixo";
import CaixaCustoVar from "./CaixaCustoVar";

const Calculadora = () => {
  const [custosFixos, setCustosFixos] = useState<number[]>([]);
  const [custosVar, setCustosVar] = useState<number[]>([]);

  const adicionarCustoFixo = () => {
    let antigo = custosFixos;
    setCustosFixos([...antigo, antigo.length + 1]);
  };

  const adicionarCustoVar = () => {
    let antigo = custosVar;
    setCustosVar([...antigo, antigo.length + 1]);
  };

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
          <div
            id="caixaCF"
            className="items-center justify-between md:flex md:flex-wrap"
          >
            <CaixaCustoFixo />
            {custosFixos.map(() => (
              <CaixaCustoFixo />
            ))}

            {/* Botão adicionar Componente Custo Fixo */}
            <div
              onClick={adicionarCustoFixo}
              className=" mt-5 flex h-32 cursor-pointer items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 hover:opacity-50 active:opacity-40 md:w-[32%]"
            >
              <h1 className=" text-6xl font-bold">+</h1>
            </div>
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
            {custosVar.map(() => (
              <CaixaCustoVar />
            ))}

            {/* Botão adicionar Componente Custo Variável */}
            <div
              onClick={adicionarCustoVar}
              className=" mt-5 flex h-32 cursor-pointer items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 hover:opacity-50 active:opacity-40 md:w-[32%]"
            >
              <h1 className=" text-6xl font-bold">+</h1>
            </div>
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
