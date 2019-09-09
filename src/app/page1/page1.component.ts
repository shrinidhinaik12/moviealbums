import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  page1:FormGroup
  constructor(private router:Router, private fb: FormBuilder, private http:HttpClient) { 
    this.page1 = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
      confirm: new FormControl()
    })
   }

  ngOnInit() {
  }
  click(){
    this.router.navigateByUrl("path2")
  }
  open(values){
    console.log(values)
    let body={
      'name': values.username,
      'password': values.password,
      'confirmpassword':values.confirm
    }
    if(values.password == values.confirm){
      this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users',body).subscribe(data =>{
        console.log("2",data)
        this.router.navigateByUrl("path2")
      })
    }
     else
  {
    alert("password & confirm password doesn't match")
  }
  }
}
