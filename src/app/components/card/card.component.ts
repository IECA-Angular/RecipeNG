import { NgFor, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ]
})
export class CardComponent {}
