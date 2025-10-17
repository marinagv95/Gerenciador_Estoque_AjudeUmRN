package unifacisa.com.GerenciadorEstoque.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import unifacisa.com.GerenciadorEstoque.entities.Produto;


@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
