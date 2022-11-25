import { Component, OnInit } from "@angular/core";
import {Selecao} from "../../../../models/selecao.model";
import { HttpClient } from "@angular/common/http";
import {Jogo} from "../../../../models/jogo.model";

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {
  TimeA?: number;
  TimeB?: number;
  times: Selecao[] = [];
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get<Selecao[]>("https://localhost:5001/api/selecao/listar").subscribe({
      next: (Times) => {
        this.times = Times;
      },
    });
    
  }
  
  cadastrarJogo(): void{
    let dataConvertida = new Date(Date.now());
    let selecaoA: Selecao = {
      id: this.TimeA,
      nome: ""
    };
    let selecaoB: Selecao = {
      id: this.TimeB,
      nome: ""
    };
    
    let jogo: Jogo = {
      selecaoA: { id: this.TimeA, nome: "" },
      selecaoB: { id: this.TimeB, nome: "" },
      golA: 0,
      golB: 0,
      criadoEm: dataConvertida.toDateString()
    }
    
    this.http.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo).subscribe(
        {
          next: (resposta) => {
            alert(resposta)
          }
        })
    
  }
  
  
}
