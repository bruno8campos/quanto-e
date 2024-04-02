import { useState } from "react";
import { CustoFixo } from "@/shared/types";
import { CustoVar } from "@/shared/types";
type Props = {
  custosFixos: CustoFixo[];
  custosVar: CustoVar[];
  valorMaoDeObra: number;
  numeroDeSessoes: number;
  valorEstudio: number;
};

const Orcamento = (props: Props) => {
  const [mostrarOrcamento, setMostrarOrcamento] = useState<boolean>(false);

  const getCustosFixos = (custosF: CustoFixo[]) => {
    let result = 0;
    for (let i = 0; i < custosF.length; i++) {
      result += +custosF[i].value;
    }
    return result;
  };

  const getCustosVar = (custosV: CustoVar[]) => {
    let result = 0;
    for (let i = 0; i < custosV.length; i++) {
      result += +custosV[i].value * +custosV[i].qtd;
    }
    return result;
  };

  return (
    <div className=" flex-shrink-0">
      {/* Botão Calcular Orçamento */}
      <div className=" mt-5 flex items-center justify-center p-5 md:w-[32%]">
        <button
          onClick={() => setMostrarOrcamento(true)}
          className="rounded-xl bg-primary-100 px-4 py-2 text-gray-50 transition duration-100 hover:cursor-pointer hover:bg-lime-200 hover:text-primary-300 active:bg-gray-300"
        >
          Calcular Orçamento
        </button>
      </div>
      {mostrarOrcamento && (
        <div className="items-center gap-[2%] md:flex md:flex-wrap">
          {/* Orçamento Final */}
          <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 md:w-[32%]">
            <h1 className=" text-xl font-bold">
              Orçamento Final:{"\n"}
              <h2 className=" text-2xl font-bold">
                R${" "}
                {+props.valorMaoDeObra +
                  getCustosFixos(props.custosFixos) * +props.numeroDeSessoes +
                  getCustosVar(props.custosVar)}
              </h2>
            </h1>
          </div>
          {/* Porcentagem do Estúdio */}
          <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 md:w-[32%]">
            <h1 className=" text-xl font-bold">
              Porcentagem do Estúdio:{"\n"}
              <h2 className=" text-2xl font-bold">
                R${" "}
                {+props.valorEstudio *
                  +(
                    +props.valorMaoDeObra +
                    getCustosFixos(props.custosFixos) * +props.numeroDeSessoes +
                    getCustosVar(props.custosVar)
                  )}
              </h2>
            </h1>
          </div>
          {/* Lucro real */}
          <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 md:w-[32%]">
            <h1 className=" text-xl font-bold">
              Lucro Real:{"\n"}
              <h2 className=" text-2xl font-bold">
                R${" "}
                {+props.valorMaoDeObra -
                  +props.valorEstudio *
                    +(
                      +props.valorMaoDeObra +
                      getCustosFixos(props.custosFixos) *
                        +props.numeroDeSessoes +
                      getCustosVar(props.custosVar)
                    )}
              </h2>
            </h1>
          </div>
          {/* Custos Fixos */}
          <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 md:w-[32%]">
            <h1 className=" text-xl font-bold">
              Custos Fixos:{"\n"}
              <h2 className=" text-2xl font-bold">
                R$ {getCustosFixos(props.custosFixos) * props.numeroDeSessoes}
              </h2>
            </h1>
          </div>
          {/* Custos Variáveis */}
          <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border-4 border-gray-500 bg-gray-100 p-5 opacity-30 md:w-[32%]">
            <h1 className=" text-xl font-bold">
              Custos Variáveis:{"\n"}
              <h2 className=" text-2xl font-bold">
                R$ {getCustosVar(props.custosVar)}
              </h2>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orcamento;
