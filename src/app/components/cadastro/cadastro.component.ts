import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarroService } from '../../services/carro.service';
import { Carro } from '../../model/Carro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  listaCarros: Carro[] = [];
  isFetching = false;

  constructor (private route: ActivatedRoute,
    private router: Router, 
    private carroService: CarroService,
    private http: HttpClient){
   }

  ngOnInit(){
    this.isFetching = true;
    this.carroService.listarCarros().subscribe(carros =>{
      this.isFetching = false;
      this.listaCarros = carros;
    });
  }

  listarCarros(){
    this.isFetching = true;
    this.carroService.listarCarros().subscribe(carros =>{
      this.isFetching = false;
      this.listaCarros = carros;
    });
  }

}