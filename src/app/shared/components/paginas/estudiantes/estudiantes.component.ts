import { Component, OnInit } from '@angular/core';
import { JsonService } from '@app/json.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  yearOfBirth: number;
  patronus: string;
}

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class EstudiantesComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  dataSource: any;
  columnsToDisplay = ['name', 'age', 'patronus'];
  expandedElement: PeriodicElement | undefined;

  constructor(
    public jeson: JsonService,
  ) { }

  ngOnInit(): void {
    this.ObtenerUrl();
    //sessionStorage.setItem("nuevoEstudiante",{})
  }

  /**
  * funcción para traer url del JSon
  */
  ObtenerUrl() {
    this.jeson.getJsonPerosnajes('http://hp-api.herokuapp.com/api/characters/students').subscribe((res: any) => {
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

}
