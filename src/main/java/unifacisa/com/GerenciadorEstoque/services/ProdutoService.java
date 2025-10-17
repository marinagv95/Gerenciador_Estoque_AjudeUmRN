package unifacisa.com.GerenciadorEstoque.services;

import org.springframework.stereotype.Service;
import unifacisa.com.GerenciadorEstoque.entities.Produto;
import unifacisa.com.GerenciadorEstoque.repositories.ProdutoRepository;

import java.util.List;

@Service
public class ProdutoService {
    private final ProdutoRepository repository;

    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    public Produto salvar(Produto produto) {
        return repository.save(produto);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }


}
