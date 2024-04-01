import { CustoVar } from "@/shared/types";
import { TrashIcon } from "@heroicons/react/16/solid";
type Props = {
  id: number;
  setCustosVar: (value: CustoVar[]) => void;
  custosVar: CustoVar[];
};

const CaixaCustoVar = (props: Props) => {
  const deleteSelf = () => {
    props.setCustosVar(props.custosVar.filter((cv) => cv.id !== props.id));
    console.log(props.custosVar);
  };

  const handleChange = (event: any) => {
    const antigo = [...props.custosVar];
    const newCV = antigo.map((cv) =>
      cv.id === props.id
        ? { id: cv.id, value: event.target.value, qtd: cv.qtd }
        : cv,
    );
    props.setCustosVar(newCV);
    console.log(`${event.target.value}`);
  };

  const handleChangeQtd = () => {};

  return (
    <div className=" relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
      <div>
        <label
          className=" mb-2 block w-[90%] cursor-text rounded-lg border p-1 text-base hover:bg-gray-200"
          contentEditable
        >
          Agulha
        </label>
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          id="custo-var"
          className="block w-[60%] rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500"
          placeholder="R$"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="qtdvar"
          className="block w-[35%] rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500"
          placeholder="x Qtd"
          onChange={handleChangeQtd}
          required
        />
      </div>
      <TrashIcon
        onClick={deleteSelf}
        className=" absolute right-5 top-5 h-4 w-4 cursor-pointer"
      ></TrashIcon>
    </div>
  );
};

export default CaixaCustoVar;
