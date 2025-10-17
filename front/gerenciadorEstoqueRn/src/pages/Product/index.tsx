import { useContext, useState } from "react";
import { ProductContext } from "../../providers/productProviders/productContext";
import type { IProduct } from "../../providers/productProviders/@types";

const ProductPage = () => {
  const { product, createNewProduct } = useContext(ProductContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Omit<IProduct, "id">>({
    item: "",
    categoriaProduto: "ROUPA",
    generoProduto: "UNISSEX",
    quantidade: 1,
    statusProduto: "EM_ESTOQUE",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "quantidade" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNewProduct(formData as IProduct);
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      item: "",
      categoriaProduto: "ROUPA",
      generoProduto: "UNISSEX",
      quantidade: 1,
      statusProduto: "EM_ESTOQUE",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-500 to-purple-700 text-white flex flex-col p-6 space-y-6">
        <h2 className="text-xl font-bold mb-6">Abrace um RN</h2>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 p-2 rounded bg-white/20 hover:bg-white/30">Dashboard</button>
     
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow"
            onClick={() => setIsModalOpen(true)}
          >
            + Novo Produto
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded shadow p-4 flex flex-col">
            <span className="text-sm text-gray-500">Total de Produtos</span>
            <span className="text-xl font-bold">{product.length}</span>
          </div>
         
        </div>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.length === 0 ? (
            <p className="text-gray-500">Nenhum produto cadastrado ainda.</p>
          ) : (
            product.map((p) => (
              <div key={p.id} className="bg-white rounded shadow p-4 flex flex-col gap-2">
                <span className="font-semibold text-lg">{p.item}</span>
                <span className="text-sm text-gray-500">{p.categoriaProduto}</span>
                <span className="text-sm">{p.generoProduto}</span>
                <span
                  className={`text-sm font-semibold ${
                    p.statusProduto === "EM_ESTOQUE"
                      ? "text-green-500"
                      : p.statusProduto === "BAIXO_ESTOQUE"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {p.statusProduto}
                </span>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mt-20">
            <h2 className="text-xl font-bold mb-4">Cadastrar Produto</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="item"
                placeholder="Nome do produto"
                value={formData.item}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <select
                name="categoriaProduto"
                value={formData.categoriaProduto}
                onChange={handleInputChange}
                className="border p-2 rounded"
              >
                <option value="HIGIENE">HIGIENE</option>
                <option value="ACESSORIO">ACESSORIO</option>
                <option value="ROUPA">ROUPA</option>
              </select>
              <select
                name="generoProduto"
                value={formData.generoProduto}
                onChange={handleInputChange}
                className="border p-2 rounded"
              >
                <option value="UNISSEX">UNISSEX</option>
                <option value="FEMININO">FEMININO</option>
                <option value="MASCULINO">MASCULINO</option>
              </select>
              <input
                type="number"
                name="quantidade"
                value={formData.quantidade}
                onChange={handleInputChange}
                className="border p-2 rounded"
                min={1}
                required
              />
              <select
                name="statusProduto"
                value={formData.statusProduto}
                onChange={handleInputChange}
                className="border p-2 rounded"
              >
                <option value="EM_ESTOQUE">EM_ESTOQUE</option>
                <option value="BAIXO_ESTOQUE">BAIXO_ESTOQUE</option>
                <option value="SEM_ESTOQUE">SEM_ESTOQUE</option>
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
