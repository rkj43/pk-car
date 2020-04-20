import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { Router } from'@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Cars: any;
  submitted: boolean;
  selectedChoice: any;

  constructor(private httpService: HttpClient,private navigate: Router,private datapassService:DatapassService ) { }
  
  ngOnInit() {
  
    this.loadjsonData();
    
  }

  loadjsonData() {
    this.httpService.get('./assets/carlist.json').subscribe(
      data => {
 
       this.Cars = data['cardetails'];
  
       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
         }
       );
  
  }
  onSearch()
  {
 
      this.datapassService.setData(this.selectedChoice);
    this.navigate.navigateByUrl('home2');
  }
 

}
