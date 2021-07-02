import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule}from '@angular/material/menu';
import { MatListModule}from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';



const myModules: any[] =  [ 
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,  
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,    
    ReactiveFormsModule,  
    MatToolbarModule,
    MatButtonModule,     
    MatMenuModule,
    MatFormFieldModule,      
    MatNativeDateModule,
    MatTableModule,
    BrowserAnimationsModule,NoopAnimationsModule
];

@NgModule({
    imports:[...myModules],
    exports:[...myModules],
})

export class MatirialModule {}