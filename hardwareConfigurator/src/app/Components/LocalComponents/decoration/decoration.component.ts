import { Component, OnInit } from '@angular/core';
import { Decoration } from '../../../Models/decoration';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.scss']
})
export class DecorationComponent implements OnInit {

  title = 'Choose your Decorations';
  deco: Decoration[];
  constructor() { }

  ngOnInit(): void {
    this.deco = Decoration.decorations();
  }

}
