import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  admin: Admin = {fullName:"Manan Charania", copyrightInfo:"DeadMan Group", email:"deadmangroup@gmail.com"};
  constructor() { }

  ngOnInit() {
  }

}
