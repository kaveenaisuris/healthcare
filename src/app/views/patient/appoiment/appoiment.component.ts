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
  model:any;
dataSource: any;
id: any;
fname: any;
lname:any;
gender:any;
phone:any;
address:any;
address1:any;
city:any;
email:any;
dname:any;
date:any;
time:any;
note:any;


@ViewChild('btnClose')
btnClose!: ElementRef;
  constructor(private store: AngularFirestore) { }
  @ViewChild('btnShow')
  btnShow!: ElementRef;
  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.store
      .collection('Appoiment')
      .snapshotChanges()
      .subscribe((response) => {
        console.log('response ', response);
        this.dataSource = response.map((item) =>
          Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        );
      });
}
add(){
  this.store
  .collection('Appoiment')
  .add({fname:this.fname,lname:this.lname,gender:this.gender,phone:this.phone,address:this.address,address1:this.address1,city:this.city,email:this.email,dname:this.dname,date:this.date,time:this.time,note:this.note})
this.closeDialog();
}
closeDialog() {
  this.btnClose.nativeElement.click();
}
openDialog() {
  this.btnShow.nativeElement.click();
}
}
