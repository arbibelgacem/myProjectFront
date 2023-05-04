import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitservService {

  private baseURL = "http://localhost:8082/comptes";
  constructor(private httpClient: HttpClient) {}

    getProduitList(): Observable<Produit[]>{
      return this.httpClient.get<Produit[]>(`${this.baseURL}`);
   }
}





