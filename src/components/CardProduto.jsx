function CardProduto({ produto }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-black">{produto.nome}</h2>

        <p className="text-gray-600 mt-2">R$ {produto.preco.toFixed(2)}</p>

        <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Ver Produto
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
