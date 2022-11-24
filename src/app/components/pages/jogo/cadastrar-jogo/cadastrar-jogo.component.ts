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
  TimeA: any | undefined;
  TimeB: any | undefined;
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
    let selecaoA: Selecao = {
      id: this.TimeA,
    };
    let selecaoB: Selecao = {
      id: this.TimeB,
    };
    
    let jogo: Jogo = {
      selecaoA: this.TimeA,
      selecaoB: this.TimeB,
    }
    
    this.http.post<any>("https://localhost:5001/api/jogos/cadastrar", jogo).subscribe(
        {
          next: (resposta) => {
            alert(resposta)
          }
        })
    
  }
  
  
}
