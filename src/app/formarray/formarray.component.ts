import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {
  submitted = false;
  skillsForm:  FormGroup = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    skills: new FormArray([])
  });
  constructor() { }
  ngOnInit(): void {
  }
 
  
  get getskills(): FormArray{
    return this.skillsForm.get('skills') as FormArray
  }
  addRow(){
    this.getskills.push(new FormGroup({
      competance: new FormControl('',[Validators.required]),
      mark: new FormControl('',[Validators.required])
    }))
  }
  removeLastRow(){
    this.getskills.removeAt(this.getskills.length -1)
  }
  removeallRow(){
    // First way
    for (let index = this.getskills.length; index >=0 ; index--) {
      this.getskills.removeAt(index);
      console.log(index , length);
      
    }
    // Second way
    // for (let index = 0; index <this.getskills.length ; index++) {
    //   this.getskills.removeAt(index);
    //   index=-1;
    //   console.log(index , this.getskills.length);
      
    // }

    //Thirs way
    // while (this.getskills.length !== 0){
    //   this.getskills.removeAt(0)
    // }
  }
  removeRow(i: number){
    this.getskills.removeAt(i)

  }
  saveData(){
    this.submitted = true;
    if (this.skillsForm.invalid){
      return;
    }
    console.log(this.skillsForm.value);
    
  }

}
