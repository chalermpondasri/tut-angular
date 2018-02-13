import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymodule',
  templateUrl: './mymodule.component.html',
  styleUrls: ['./mymodule.component.css']
})
export class MymoduleComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
