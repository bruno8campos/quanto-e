import { useState } from "react";
import CaixaCustoFixo from "./CaixaCustoFixo";
import CaixaCustoVar from "./CaixaCustoVar";
import { CustoFixo } from "@/shared/types";
import { CustoVar } from "@/shared/types";
import MaoDeObra from "./MaoDeObra";
import Orcamento from "./Orcamento";

const Calculadora = () => {
  const [custosFixos, setCustosFixos] = useState<CustoFixo[]>([
    {
      id: 1,
      value: 0,
    },
  ]);

  const [custosVar, setCustosVar] = useState<CustoVar[]>([
    {
      id: 1,
      value: 0,
      qtd: 1,
    },
  ]);

  const [valorMaoDeObra, setValorMaoDeObra] = useState<number>(0);

  const [numeroDeSessoes, setNumeroDeSessoes] = useState<number>(1);

  const [valorEstudio, setValorEstudio] = useState<number>(0.2);

  const adicionarCustoFixo = () => {
    setCustosFixos([
      ...custosFixos,
      {
        id:
          custosFixos.length === 0
            ? 1
            : custosFixos[custosFixos.length - 1].id + 1,
        value: 0,
      },
    ]);
  };

  const adicionarCustoVar = () => {
    setCustosVar([
      ...custosVar,
      {
        id: custosVar.length === 0 ? 1 : custosVar[custosVar.length - 1].id + 1,
        value: 0,
        qtd: 1,
      },
    ]);
  };

  return (
    <section id="calculadora" className="bg-white pt-10">
      {/* Caixa da calculadora */}
      <div className="mx-auto mb-24 mt-10 h-auto w-5/6 items-center rounded-3xl bg-gray-50 drop-shadow-2xl">
        {/* Caixa Custos Fixos */}
        <div className="mb-4 px-10 pt-10">
          <h1 className="text-3xl font-bold">
            <span className="text-primary-100">+</span> Custos Fixos
          </h1>
          {/* Componentes de Custo Fixo */}
          <div
            id="caixaCF"
            className="items-center gap-[2%] md:flex md:flex-wrap"
          >
            {custosFixos.map((cF) => {
              return (
                <CaixaCustoFixo
                  custosFixos={custosFixos}
                  setCustosFixos={setCustosFixos}
                  id={cF.id}
                  valor={cF.value}
                />
              );
            })}

            {/* Botão adicionar Componente Custo Fixo */}
            <div
              onClick={adicionarCustoFixo}
              className=" mt-5 flex h-32 cursor-pointer items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 hover:opacity-50 active:opacity-40 md:w-[32%]"
            >
              <h1 className=" text-6xl font-bold">+</h1>
            </div>

            {/* Botão auxiliar dev Printar array de Componentes Custo Fixo */}
            {/* <div
              onClick={() => {
                console.log(custosFixos);
              }}
              className=" mt-5 flex h-32 cursor-pointer items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 hover:opacity-50 active:opacity-40 md:w-[32%]"
            >
              <h1 className=" text-6xl font-bold">Print</h1>
            </div> */}
          </div>
        </div>
        {/* Caixa Custos Variáveis */}
        <div className="mb-4 px-10 pt-10">
          <h1 className=" text-3xl font-bold">
            <span className="text-primary-100">+</span> Custos Variáveis
          </h1>
          {/* Componentes de Custo Variável */}
          <div className="items-center gap-[2%] md:flex md:flex-wrap">
            {custosVar.map((cV) => (
              <CaixaCustoVar
                custosVar={custosVar}
                setCustosVar={setCustosVar}
                id={cV.id}
              />
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
          {/* Componentes de Mão de Obra */}
          <MaoDeObra
            setValorEstudio={setValorEstudio}
            setValorMaoDeObra={setValorMaoDeObra}
            setNumeroDeSessoes={setNumeroDeSessoes}
          />
        </div>
        {/* Caixa Orçamento */}
        <div className="mb-4 p-10">
          <h1 className="text-3xl font-bold">
            <span className="text-primary-100">=</span> Orçamento
          </h1>
          <Orcamento
            numeroDeSessoes={numeroDeSessoes}
            valorMaoDeObra={valorMaoDeObra}
            valorEstudio={valorEstudio}
            custosVar={custosVar}
            custosFixos={custosFixos}
          />
        </div>
      </div>
      <div className="h-[100px] w-full bg-slate-200"></div>
    </section>
  );
};

export default Calculadora;
