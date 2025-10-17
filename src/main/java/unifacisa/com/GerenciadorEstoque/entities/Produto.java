package unifacisa.com.GerenciadorEstoque.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import unifacisa.com.GerenciadorEstoque.enums.CategoriaProduto;
import unifacisa.com.GerenciadorEstoque.enums.GeneroProduto;
import unifacisa.com.GerenciadorEstoque.enums.StatusProduto;

@Entity
@Table(name = "produtos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String item;
    private CategoriaProduto categoriaProduto;
    private GeneroProduto generoProduto;
    private int quantidade;
    private StatusProduto statusProduto;


}
