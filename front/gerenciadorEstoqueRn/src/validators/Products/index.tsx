import { z } from "zod";

export const categoriaProdutoEnum = z.enum(["ROUPA", "HIGIENE", "ACESSORIO"]);
export const generoProdutoEnum = z.enum(["MASCULINO", "FEMININO", "UNISSEX"]);
export const statusProdutoEnum = z.enum([
  "EM_ESTOQUE",
  "SEM_ESTOQUE",
  "BAIXO_ESTOQUE",
]);

export const createProductSchema = z.object({
  item: z.string().nonempty("Digite um item válido!"),
  categoriaProduto: categoriaProdutoEnum,
  generoProduto: generoProdutoEnum,
  quantidade: z.number().int().positive("A quantidade deve ser maior que zero"),
  statusProduto: statusProdutoEnum,
});
