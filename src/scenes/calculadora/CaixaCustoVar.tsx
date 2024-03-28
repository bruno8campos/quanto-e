const CaixaCustoVar = () => {
  return (
    <div className="mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
      <div>
        <label
          className="mb-2 block cursor-text rounded-lg border p-1 text-lg hover:bg-gray-200"
          contentEditable
        >
          Agulha
        </label>
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          id="custo-var"
          className="block w-[65%] rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
          placeholder="R$"
          required
        />
        <input
          type="number"
          id="qtdvar"
          className="block w-[30%] rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
          placeholder="x Qtd"
          required
        />
      </div>
    </div>
  );
};

export default CaixaCustoVar;
