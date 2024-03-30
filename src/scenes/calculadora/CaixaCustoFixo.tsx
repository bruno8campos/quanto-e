const CaixaCustoFixo = () => {
  return (
    <div className="mt-5 h-32 rounded-2xl bg-gray-100 p-5 md:w-[32%]">
      <label
        className=" mb-2 block cursor-text rounded-lg border p-1 text-base hover:bg-gray-200"
        contentEditable
      >
        Transporte
      </label>
      <input
        type="number"
        id="custo-fixo"
        className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
        placeholder="R$"
        required
      />
    </div>
  );
};

export default CaixaCustoFixo;
