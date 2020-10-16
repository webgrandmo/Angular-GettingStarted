import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component'; 
import { ConvertToSpaces } from './convert-to-space.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpaces
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToSpaces,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
