import { Produtos } from '../domain/produtos';
import { Injectable } from '@angular/core'
import { Medidas } from '../enums/medidas'

@Injectable()
export class ProdutosService {
    produtos: Produtos[] = [];
    produtoSelecionado: any;
    idAtual: number = 1;
    
    getProdutosData() {
        return this.produtos
    }

    addProdutosData(produto: Produtos) {
        this.produtos.push(produto);
        this.idAtual++;
    }

    getProdutosDataPromise() {
        return Promise.resolve(this.getProdutosData());
    }

    setProdutoSelecionado(produto: any) {
        this.produtoSelecionado = produto;
    }

    getProdutoSelecionado() {
        return this.produtoSelecionado;
    }

    deletarProduto(id: Number) {
        console.log(id)
    }

    getIdAtual() {
        return this.idAtual;
    }
}
