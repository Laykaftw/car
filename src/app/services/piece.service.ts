import { Injectable } from '@angular/core';
import { piece } from '../model/piece.model';

@Injectable({
  providedIn: 'root',
})
export class PieceService {
  pieces: piece[];

  constructor() {
    this.pieces=[
      {
        id :1,
        nomPiece:"Piece 1",
        prixpiece:25
      },
      {
        id :2,
        nomPiece:"Piece 2",
        prixpiece:35
      }
    ]
  }
  listepieces(): piece[] {
    return this.pieces;
  }

  ajouterpiece(c: piece) {
    this.pieces.push(c);
  }

  supprimerpiece(c: piece) {
    const index = this.pieces.indexOf(c);
    if (index > -1) {
      this.pieces.splice(index, 1);
    }
  }
}
