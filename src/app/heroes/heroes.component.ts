import { Component, OnInit } from '@angular/core';
import {Gui} from '../gui'
import { GUIS } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {

  gui: Gui = {
    id:1,
    name:'Patrick'
  } 
  constructor() { }
  guis = GUIS;
  ngOnInit() {
  }

}
