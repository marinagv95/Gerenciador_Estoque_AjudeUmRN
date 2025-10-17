/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import type {
  IDefaultProviderProps,
  IProduct,
  IProductContext,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IDefaultProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    const productForm = async () => {
      try {
        const response = await api.get("/produtos", {});
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    productForm();
  }, []);

  const createNewProduct = async (formData: IProduct) => {
    try {
      const response = await api.post("/produtos", formData, {});
      toast.success(`Produto ${response.data.item} adicionado com sucesso`);
      setProduct([...product, response.data]);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado...");
    }
  };

  return (
    <ProductContext.Provider value={{ product, setProduct, createNewProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
