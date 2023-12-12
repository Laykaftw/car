import { Component } from '@angular/core';
import { piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Maker } from '../model/maker.model';

@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
})
export class AddpieceComponent {
  newpiece = new piece();

  constructor(private PieceService: PieceService, private router: Router) {}

  ngOnInit(): void {
  }

  addpiece() {

    this.PieceService.ajouterpiece(this.newpiece), 
    this.router.navigate(['piece']);
  }
}
