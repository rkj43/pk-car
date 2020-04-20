import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
choice: any;
  car: any;
  address: string;
  constructor(
    private datapassService:DatapassService,
    private router:Router,
    private httpService: HttpClient) {
       
    }

  ngOnInit(): void {
    this.choice = this.datapassService.getData();
    this.loadjsonData();
  }

  loadjsonData() {
    this.address="./assets/"+this.choice+".json";

    this.httpService.get(this.address).subscribe(
      data => {
 
        this.car = data['cardetails'];
       
   
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
          }
        );
  
  }

}
