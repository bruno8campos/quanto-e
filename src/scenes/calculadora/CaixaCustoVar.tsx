import { CustoVar } from "@/shared/types";
/* import { TrashIcon } from "@heroicons/react/16/solid"; */
type Props = {
  id: number;
  setCustosVar: (value: CustoVar[]) => void;
  custosVar: CustoVar[];
};

const CaixaCustoVar = (props: Props) => {
  /*   const deleteSelf = () => {
    props.setCustosVar(props.custosVar.filter((cv) => cv.id !== props.id));
  }; */

  const handleChange = (event: any) => {
    const antigo = [...props.custosVar];
    const newCV = antigo.map((cv) =>
      cv.id === props.id
        ? { id: cv.id, value: event.target.value, qtd: cv.qtd }
        : cv,
    );
    props.setCustosVar(newCV);
  };

  const handleChangeQtd = (event: any) => {
    const antigo = [...props.custosVar];
    const newCV = antigo.map((cv) =>
      cv.id === props.id
        ? { id: cv.id, value: cv.value, qtd: event.target.value }
        : cv,
    );
    props.setCustosVar(newCV);
  };

  return (
    <div className=" relative mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
      <div>
        <label
          className=" mb-2 block w-full cursor-text rounded-lg border p-1 text-base hover:bg-gray-200"
          contentEditable
        >
          Agulha
        </label>
      </div>
      <div className="flex justify-between">
        <div className="relative mb-6 w-[60%]">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <h1 className="font-bold text-gray-500 opacity-80">R$</h1>
          </div>
          <input
            type="number"
            id="custo-var"
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-gray-500 "
            placeholder="0"
            onChange={handleChange}
          />
        </div>

        <div className="relative mb-6 w-[35%]">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <h1 className="font-bold text-gray-500 opacity-80">x</h1>
          </div>
          <input
            type="number"
            id="qtd"
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-7 text-sm text-gray-500 "
            placeholder="0"
            onChange={handleChangeQtd}
          />
        </div>
      </div>

      {/*       <TrashIcon
        onClick={deleteSelf}
        className=" absolute right-5 top-5 h-4 w-4 cursor-pointer"
      ></TrashIcon> */}
    </div>
  );
};

export default CaixaCustoVar;
