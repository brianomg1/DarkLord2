import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


  @Component({
    selector: 'app-Registrar',
    templateUrl: 'Registrar.page.html',
    styleUrls: ['Registrar.page.scss'],
  })
  export class RegistrarPage {
  
    constructor(public fb: FormBuilder) {
      
    }
  
    ngOnInit() {
    }
  
  }
  