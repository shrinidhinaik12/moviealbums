import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  search = "";
  MUMBAI="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
  BANGALORE="https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE"
  DELHI="https://vast-shore-74260.herokuapp.com/banks?city=DELHI"
  KOLKATA="https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA "
  CUTTACK="https://vast-shore-74260.herokuapp.com/banks?city=CUTTACK"
  
  public dataMUMBAI;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get(this.BANGALORE).subscribe(data=>{
      this.dataMUMBAI=data
      console.log(data)
    }) 
  }
  add(){
  
    this.http.get(this.MUMBAI).subscribe(data=>{
      this.dataMUMBAI=data
      console.log(data)
    })
  }
  add1(){
    this.http.get(this.DELHI).subscribe(data=>{
      this.dataMUMBAI=data
      console.log(data)
    })
  }
  add2(){
    this.http.get(this.KOLKATA).subscribe(data=>{
      this.dataMUMBAI=data
      console.log(data)
    })
  }
  add3(){
    this.http.get(this.BANGALORE).subscribe(data=>{
      this.dataMUMBAI=data
      console.log(data)
    })
  }
  add4(){
    this.http.get(this.CUTTACK).subscribe(data=>{
      this.dataMUMBAI=data
      console.log(data)
    })
    }
  
    check(){
      this.router.navigateByUrl("#")
        }
  }
