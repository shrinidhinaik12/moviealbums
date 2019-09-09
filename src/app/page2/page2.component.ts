import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  
page2:FormGroup
  
  
  constructor(public router:Router, private fb: FormBuilder, private http:ServiceService) {
   this.page2 = this.fb.group({
     username:new FormControl(),
     password:new FormControl()
   })
   }

  ngOnInit() {
  }
  // fun(){
    
  // }
  open2(data){
    console.log(data)
    this.http.registerlogin(data).subscribe(data1 => {
      this.router.navigate(['/path4'])
    })
   
  }
} 
   
  

