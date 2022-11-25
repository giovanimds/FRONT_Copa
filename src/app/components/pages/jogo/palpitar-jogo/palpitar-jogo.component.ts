import { Component, OnInit } from "@angular/core";
import {Jogo} from "../../../../models/jogo.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  GolA?: number;
  GolB?: number;
  constructor(
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Jogo>(`https://localhost:5001/api/jogo/buscar/${id}`).subscribe({
            next: (jogo) => {
              
            },
          });
        }
      },
    });
  }
  
  cadastrarPalpite(): void{
    
  }
  
}
