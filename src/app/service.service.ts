import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx"
import "rxjs/add/operator/map"
​
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  base = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
  base1=  'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
  base2= 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies'
  base3 ='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/:name'
 
  constructor(private http: HttpClient) { }
  register(data) {
    let body = {
      name: data.username,
      password: data.password,
      confirmpassword: data.confirm
    }
    
    if(data.password==data.confirm){
      return this.http.post(this.base,body).map(data => {
        console.log("1", data)
      })
    }
    else{
        alert("Check Requirements");
    }
  }
  registerlogin(data){
    let body1 = {
      name: data.username,
      pass: data.password
    }
    return this.http.post(this.base1, body1).map(data =>{
      console.log("3",data)
    let id = data['success']._id
    console.log("1",id)
    if(!localStorage.getItem('userId')){
      localStorage.setItem('userId',JSON.stringify(id))
    }
    
    })
  }
​
  registermovies(data){
    let body2 = {
      MovieName: data.moviesname,
      Language: data.language,
      Genre: data.genre
    }
    return this.http.post(this.base2,body2).map(data =>{
      console.log("6",data)
    })
  }
​
 
}
