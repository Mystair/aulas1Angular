import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../model/Carro';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarroService {

  carros: Carro[] = [];

  private baseUrl!: "http://localhost:8080/carros";

  constructor(private http: HttpClient) { }

   /*novoCarro(carro:Carro){
    this.http.post<Carro>(this.baseUrl, carro).subscribe(responseData =>{
      console.log(responseData);
    });
    }*/

   listarCarros(){
    return this.http.get<{ [key: number]: Carro }>(this.baseUrl)
    .pipe(
      map(responseData =>{
        //const carroArray = typeof this.carros?.[0] === 'number' ? this.carros[0].toLowerCase() : '';
        const carroArray: Carro[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            carroArray.push({ ...responseData[key] })
          }
        }
        return carroArray;
      })
    );
  }
}