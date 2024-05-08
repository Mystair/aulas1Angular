import { Marca } from './Marca';
//import { Cor } from './Cor';

export class Carro{
    id!: number;
    nome: string;
    anoFabricacao: number;
    anoModelo: number;
    modelo: string;
    marca: Marca;
    //cores: Cor[];

    constructor(id: number, nome:string, anoFabricacao:number, anoModelo:number, modelo:string, marca:Marca){
        this.id = id;
        this.nome= nome;
        this.anoFabricacao= anoFabricacao;
        this.anoModelo= anoModelo;
        this.modelo= modelo;
        this.marca= marca;
        //this.cores= cores;
    }
}