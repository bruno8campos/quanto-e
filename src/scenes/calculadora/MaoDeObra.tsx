import { useState } from "react";

type Props = {};

const MaoDeObra = (props: Props) => {
  const [valorHora, setValorHora] = useState<number>(0);
  const [tempo, setTempo] = useState<number>(0);
  const [sessoes, setSessoes] = useState<number>(0);

  console.log(valorHora);
  console.log(tempo);
  console.log(sessoes);

  console.log(props);

  const handleChangeValorHora = (event: any) => {
    setValorHora(event.target.value);
  };
  const handleChangeTempo = (event: any) => {
    setTempo(event.target.value);
  };

  const handleChangeSessoes = (event: any) => {
    setSessoes(event.target.value);
  };

  return (
    <div className="items-center gap-[2%] md:flex md:flex-wrap">
      {/* Componente Valor Hora */}
      <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
        <label className=" mb-2 block w-full rounded-lg border p-1 text-xs">
          Valor base da hora trabalhada
        </label>
        <input
          type="number"
          id="hora-trabalho"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
          placeholder="R$"
          onChange={handleChangeValorHora}
          required
        />
      </div>
      {/* Componente Tempo Estimado */}
      <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
        <label className=" mb-2 block w-full rounded-lg border p-1 text-xs">
          Tempo em horas estimado
        </label>
        <input
          type="number"
          id="hora-trabalho"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
          placeholder="h"
          onChange={handleChangeTempo}
          required
        />
      </div>
      {/* Componente Sessões Estimadas */}
      <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
        <label className=" mb-2 block w-full rounded-lg border p-1 text-xs">
          Número de sessões
        </label>
        <input
          type="number"
          id="hora-trabalho"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
          placeholder="x Qtd"
          onChange={handleChangeSessoes}
          required
        />
      </div>
      {/* Componente Complexidade Desenho */}
      <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
        <label className=" mb-2 block w-full rounded-lg border p-1 text-xs">
          Complexidade do desenho
        </label>
        <div className="mx-auto mb-2 flex w-[95%] justify-between text-xs">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <input
          className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-primary-100"
          min={1}
          max={1.4}
          step={0.1}
          type="range"
          name="complexidade-desenho"
          id="complexidade-desenho"
        />
      </div>
      {/* Componente Local do Corpo */}
      <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
        <label className=" mb-2 block w-full rounded-lg border p-1 text-xs">
          Complexidade do local do corpo
        </label>
        <div className="mx-auto mb-2 flex w-[95%] justify-between text-xs">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <input
          className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-primary-100"
          min={1}
          max={1.4}
          step={0.1}
          type="range"
          name="complexidade-local-corpo"
          id="complexidade-local-corpo"
        />
      </div>
      {/* Componente Porcentagem Estúdio */}
      <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
        <label className=" mb-2 block w-full rounded-lg border p-1 text-xs">
          Porcentagem do Estúdio
        </label>
        <div className="mb-2 flex w-full justify-between text-xs">
          <p>0%</p>
          <p>10%</p>
          <p>20%</p>
          <p>30%</p>
          <p>40%</p>
        </div>
        <input
          className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-primary-100"
          min={0.1}
          max={0.5}
          step={0.1}
          type="range"
          name="porcentagem-estudio"
          id="porcentagem-estudio"
        />
      </div>
    </div>
  );
};

export default MaoDeObra;
