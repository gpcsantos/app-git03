import CardProduto from "../components/CardProduto";
import produtos from "../data/produtos";

function Produtos() {
  return (
    <main className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-10">
          Lista de Produtos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Produtos;
