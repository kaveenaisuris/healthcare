import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-appoiment',
  templateUrl: './appoiment.component.html',
  styleUrls: ['./appoiment.component.scss']
})
export class AppoimentComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  dataSource: any;
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

  @ViewChild('btnShow')
  btnShow!: ElementRef;

  @ViewChild('btnClose')
  btnClose!: ElementRef;

  constructor(private store: AngularFirestore) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.store
      .collection('appInfo')
      .snapshotChanges()
      .subscribe((response) => {
        console.log('response ', response);
        this.dataSource = response.map((item) =>
          Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        );
      });
  }

  add() {
    this.store
      .collection('appInfo')
      .add({ fname: this.fname, 
        lname: this.lname, 
        gender:this.gender,
        phone: this.phone, 
        address: this.address, 
        address1: this.address1, 
        city: this.city, 
        email: this.email, 
        dname: this.dname, 
        date: this.date, 
        time: this.time, 
        note: this.note  
      });
    this.closeDialog();
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

  deleteItem(id : string){
    this.store.collection('appInfo').doc(id).delete();
  }
}
