import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { JsonService } from '@app/json.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  yearOfBirth: number;
  patronus: string;
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})

export class PersonajesComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  dataSource: any;
  /**
   * se crea objeto quemado para el selector de casa
   */
  personajes = [
    {
      id: 1,
      name: "Slytherin",
      url: "https://hp-api.herokuapp.com/api/characters/house/slytherin"
    },
    {
      id: 2,
      name: "Gryffindor",
      url: "https://hp-api.herokuapp.com/api/characters/house/gryffindor"
    },
    {
      id: 3,
      name: "Ravenclaw",
      url: "https://hp-api.herokuapp.com/api/characters/house/ravenclaw"
    },
    {
      id: 4,
      name: "Hufflepuff",
      url: "https://hp-api.herokuapp.com/api/characters/house/hufflepuff"
    },

  ]
  selectedValue: string | undefined;
  panelEscuela = new FormControl();

  constructor(
    public jeson: JsonService
  ) { }

  ngOnInit(): void {


  }

  /**
  * funcción para traer url del JSon
  */
  ObtenerUrl(url: any) {
    this.jeson.getJsonPerosnajes(url).subscribe((res: any) => {

      res.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      this.dataSource = res;
    });
  }

  columnsToDisplay = ['name', 'age', 'patronus'];
  expandedElement: PeriodicElement | undefined;

}