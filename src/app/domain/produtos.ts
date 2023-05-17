import { Medidas } from "../enums/medidas";

export interface Produtos {
    id: Number;
    nome: String;
    medida: Medidas;
    quantidade?: Number;
    preco: Number;
    perecivel: Boolean;
    validade?: Date;
    fabricacao: Date;
}
