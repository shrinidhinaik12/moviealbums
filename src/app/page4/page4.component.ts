import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
 name: string;
 position: number;
 weight: number;
 symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
 selector: 'app-page4',
 templateUrl: './page4.component.html',
 styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
 page4:FormGroup
 displayedColumns: string[] = ['movie', 'lng', 'genre'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);
 @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 @ViewChild(MatSort, { static: true }) sort: MatSort;
 id: string;
 getdataValues: any[];
 ELEMENT_DATA = []
 prograssbarHide = false
 constructor(private router:Router,private http:HttpClient) { }
 ngOnInit() {
   this.id = JSON.parse(localStorage.getItem('userId'))
   this.getData()
 }
 applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }
 addMovies(){
   this.router.navigate(["path3"])
 }
 getData(){
  this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+this.id).subscribe(data=>{
    this.getdataValues = Object.values(data)
    for(var i = 0;i <this.getdataValues[0].movies.length;i++){
      this.ELEMENT_DATA.push({
        'movie':this.getdataValues[0].movies[i].MovieName,'language':this.getdataValues[0].movies[i].Language,'genre':this.getdataValues[0].movies[i].Genre
      })
    }
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    this.prograssbarHide = true
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 50);
  }, error => {
    console.log('Error: ', error);
  })
}
}