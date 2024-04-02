import { CustoFixo } from "@/shared/types";
/* import { TrashIcon } from "@heroicons/react/16/solid"; */

type Props = {
  id: number;
  setCustosFixos: (value: CustoFixo[]) => void;
  custosFixos: CustoFixo[];
  valor: number;
};

const CaixaCustoFixo = (props: Props) => {
  /* const deleteSelf = () => {
    props.setCustosFixos(props.custosFixos.filter((cf) => cf.id !== props.id));
  }; */

  const handleChange = (event: any) => {
    const antigo = [...props.custosFixos];
    const newCF = antigo.map((cf) =>
      cf.id === props.id ? { id: cf.id, value: event.target.value } : cf,
    );
    props.setCustosFixos(newCF);
    console.log(`${event.target.value}`);
  };

  return (
    <div className="relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
      <label
        className=" mb-2 block w-[90%] cursor-text rounded-lg border p-1 text-base hover:bg-gray-200"
        contentEditable
      >
        Transporte
      </label>
      <input
        type="number"
        id="custo-fixo"
        className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
        placeholder="R$"
        onChange={handleChange}
        required
      />
      {/* <TrashIcon
        onClick={deleteSelf}
        className=" absolute right-5 top-5 h-4 w-4 cursor-pointer"
      ></TrashIcon> */}
    </div>
  );
};

export default CaixaCustoFixo;
