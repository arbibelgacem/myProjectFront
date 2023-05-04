import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  email : string = "arbibelgacem111@gmail.com";


  listeCompte :  ProduitComponent[] | undefined;
  getProduitList: any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    this.getList();


  }
  private getList(){

    this.getProduitList().get("http://localhost:8082/comptes")
    .subscribe((data: ProduitComponent[] | undefined)=>{
      this.listeCompte =data;
    },(err: any)=>{
      console.log(err);
    });

  }

  /*
  onGetProduit(){
    this.httpClient.get("http://localhost:8082/comptes/1")
    .subscribe(data=>{
      this.listeCategorie=data;
    },err=>{
      console.log(err);
    });
  }

  onGetCategorie(){
    this.httpClient.get("http://localhost:8082/comptes/2")
    .subscribe(data=>{
      this.listeProduit=data;
    },err=>{
      console.log(err);
    });

  }*/
}
