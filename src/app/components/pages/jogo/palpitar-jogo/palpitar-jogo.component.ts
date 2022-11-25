import { Component, OnInit } from "@angular/core";
import {Jogo} from "../../../../models/jogo.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Palpite} from "../../../../models/palpite.model";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  GolA!: number;
  GolB!: number;
  Jogo!: Jogo;
  constructor(
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Jogo>(`https://localhost:5001/api/jogo/buscar/${id}`).subscribe({
            next: (jogo) => {
              this.Jogo = jogo;
            },
          });
        }
      },
    });
  }
  
  cadastrarPalpite(): void{
    let palpite: Palpite = {
      golA: this.GolA,
      golB: this.GolB,
      jogo: this.Jogo
    }
    this.http.post<Palpite>(`https://localhost:5001/api/jogo/palpite`, palpite).subscribe({
      next: (p) => {
        alert("OK")
      },
    });
  }
  
}
