import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../../service/products-service';
import { Produtos } from 'src/app/domain/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html'
})
export class ChartPanelComponent implements OnInit {
  produtos: Produtos[] = []

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit() {
    this.produtosService.setProdutoSelecionado({});
    this.produtosService.getProdutosDataPromise().then(data => {
      this.produtos = data
    });
  }

  editarProduto(produto: Produtos) {
    this.router.navigate(['/cadastro'])
    this.produtosService.setProdutoSelecionado(produto);
  }

  deletarProduto(id: Number) {
    this.produtosService.deletarProduto(id);
  }
}
