import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { ServiceService } from 'src/app/service.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-movies',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  PAGE3: FormGroup
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.PAGE3 = this.fb.group({
      MovieName: new FormControl(),
      Language: new FormControl(),
      Genre: new FormControl()
    })

  }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['path4'])
  }
  addmovies(data) {
    console.log(data)
    let id = JSON.parse(localStorage.getItem('userId'))
    let body = {
      MovieName: data.MovieName,
      Language: data.Language,
      Genre: data.Genre,
      id: id
    }
    this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies', body).subscribe(data => {
      console.log('called', data)
      this.router.navigate(['path4'])
    })
  }

}