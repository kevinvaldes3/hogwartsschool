import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  yearOfBirth: number;
  patronus: string;
}

@Component({
  selector: 'app-nuevoEstudiante',
  templateUrl: './nuevoEstudiante.component.html',
  styleUrls: ['./nuevoEstudiante.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class NuevoEstudianteComponent implements OnInit {
  nuevoEstudiante: PeriodicElement[] = [];

  dataSources: Observable<any> | undefined;
  dataSource: any = [];
  columnsToDisplay = ['name', 'age', 'patronus'];
  expandedElement: PeriodicElement | undefined;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    patronus: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor(
    public fb: FormBuilder
  ) {    

  }

  ngOnInit(): void {

  }

  crearEstudiante() {
    //this.dataSource = [];      
    if (this.nuevoEstudiante.some((s) => s.name === this.profileForm.value.name)) {
      alert('ese nombre ya Existe')
    } else {
      this.nuevoEstudiante.push(this.profileForm.value);
      //  this.dataSources =   this.profileForm.value ;
      this.dataSource = this.nuevoEstudiante;
      //  //console.log(this.nuevoEstudiante);  
      console.log(this.profileForm.valueChanges);
    }

  }

}
