import { AppoimentComponent } from '../appoiment/appoiment.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-appoiment-details',
  templateUrl: './appoiment-details.component.html',
  styleUrls: ['./appoiment-details.component.scss']
})
export class AppoimentDetailsComponent implements OnInit {
  id: any;
  fname: any;
  lname: any;
  gender: any;
  phone:any;
  address: any;
  address1: any;
  city: any;
  email: any;
  dname: any;
  date: any;
  time: any;
  note: any;
  editObj: any;
  dataSource: any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;

  @ViewChild('btnClose')
  btnClose!: ElementRef;
  constructor(private store: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
 
  }
  edit(id: string) {
    this.store
      .collection('appInfo')
      .doc(id)
      .get()
      .subscribe((response) => {
        this.editObj = Object.assign({ id: response.id }, response.data());
        this.fname = this.editObj.fname;
        this.lname = this.editObj.lname;
        this.gender=this.editObj.gender;
        this.phone= this.editObj.phone;
        this.address=this.editObj.address;
        this.address1=this.editObj.address1;
        this.city=this.editObj.city;
        this.email=this.editObj.email;
        this.dname=this.editObj.dname;
        this.date=this.editObj.date;
        this.time=this.editObj.time;
        this.note=this.editObj.note;
        this.openDialog();
      });
      
  }
  openDialog() {
    this.btnShow.nativeElement.click();
  }
  closeDialog() {
    this.btnClose.nativeElement.click();
  }

  clearEdit(){
    this.editObj = null;
    this.fname = "";
    this.lname = "";
    this.gender="";
    this.phone="";
    this.address="";
    this.address1="";
    this.city="";
    this.email="";
    this.dname="";
    this.date="";
    this.time="";
    this.note="";
    
  }
  list(){
    this.router.navigate(['employees']);
  }
}
