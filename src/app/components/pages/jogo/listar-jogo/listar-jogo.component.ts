import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {Selecao} from "../../../../models/selecao.model";
import {Jogo} from "../../../../models/jogo.model";

@Component({
  selector: "app-listar-jogo",
  templateUrl: "./listar-jogo.component.html",
  styleUrls: ["./listar-jogo.component.css"],
})
export class ListarJogoComponent implements OnInit {

  jogos: Jogo[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Jogo[]>("https://localhost:5001/api/selecao/listar").subscribe({
      next: (Jogos) => {
        this.jogos = Jogos;
      },
    });
  }
  
  palpitar(Jogo: Jogo): void{
    
  }
  
}
