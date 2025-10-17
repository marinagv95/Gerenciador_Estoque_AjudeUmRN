
export interface IDefaultProviderProps {
    children: React.ReactNode

}
export interface IProduct {
  id: number;
  item: string;
  categoriaProduto:  "HIGIENE" | "ACESSORIO" | "ROUPA";
  generoProduto: "MASCULINO" | "FEMININO" | "UNISSEX";
  quantidade: number;
  statusProduto: "EM_ESTOQUE" | "BAIXO_ESTOQUE" | "SEM_ESTOQUE";
}


export interface IProductContext{
product: IProduct[];
setProduct: React.Dispatch<React.SetStateAction<IProduct[]>>
createNewProduct: (formData: IProduct) => Promise<void>


}