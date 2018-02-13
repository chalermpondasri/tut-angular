import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-mymodule',
  templateUrl: './mymodule.component.html',
  styleUrls: ['./mymodule.component.css']
})
export class MymoduleComponent implements OnInit {
  date=new Date();
  emp:Employee={
    id:21,
    name:'Chalermpon Dasri',
    dept:'Service'
  };
  constructor() { }

  ngOnInit() {
  }

}
