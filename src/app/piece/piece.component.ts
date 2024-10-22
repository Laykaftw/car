import { Component } from '@angular/core';
import { piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: []
})
export class PieceComponent{
  pieces : piece[] |undefined; //un tableau de piece
  constructor(private PieceService: PieceService) 
              {
  this.pieces = PieceService.listepieces();
  
}
supprimerpiece(c: piece)
{
  let conf=confirm("Are you sure ?")
  if (conf)
    this.PieceService.supprimerpiece(c);
  }

}