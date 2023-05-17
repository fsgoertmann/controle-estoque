import { Component, OnInit } from '@angular/core';
import { Medidas } from 'src/app/enums/medidas';
import { ProdutosService } from 'src/app/service/products-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nome: String = "";
  quantidade: Number = 0;
  preco: Number = 0;
  unidades: any;
  validade: any;
  fabricacao: any;
  unidadeSelecionada: any;
  perecivel: Boolean = false;

  constructor(private produtoService: ProdutosService){}

  ngOnInit() {
    const prod = this.produtoService.getProdutoSelecionado();
    this.unidades = Object.keys(Medidas).map((name) => {
      return {
        name,
        code: Medidas[name as keyof typeof Medidas],
      };
    });
  }

  public validadeDisabled() {
    console.log(this)
  }

  public salvarProduto() {
    console.log(this)
    let produto = {
      id: this.produtoService.getIdAtual(),
      nome: this.nome,
      medida: this.unidadeSelecionada.code,
      quantidade: this.quantidade,
      preco: this.preco,
      perecivel: this.perecivel,
      validade: this.validade,
      fabricacao: this.fabricacao
    }
    this.produtoService.addProdutosData(produto);
  }

  public cancelar() {
    this.nome = "";
    this.quantidade = 0;
    this.preco = 0;
    this.unidadeSelecionada = null;
    this.validade = null;
    this.fabricacao = null;
    this.perecivel = false;
  }


}
