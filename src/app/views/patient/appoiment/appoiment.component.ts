import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-appoiment',
  templateUrl: './appoiment.component.html',
  styleUrls: ['./appoiment.component.scss']
})
export class AppoimentComponent implements OnInit {
  fileName= 'AppoimentSheet.xlsx';
  searchText = "";
  listOfContacts: any;
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

  constructor(private store: AngularFirestore, private router: Router) {}

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
      });
}
editdetail() {
  this.store
    .collection('appInfo')
    .doc()
    .update({ fname: this.fname, 
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
  // detailsOpen(id : string){
  //   this.router.navigate(['details', id]);
  // }
  detailsOpen(id: string) {
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
     
      });
  }


  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('atable');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
  }

  public convertToPDF()
{
html2canvas(document.getElementById("atable")!).then(canvas => {
// Few necessary setting options
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var width = pdf.internal.pageSize.getWidth();
var height = canvas.height * width / canvas.width;
pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
pdf.save('AppoimentSheet.pdf'); // Generated PDF
});
}

Search(){
  // alert(this.searchText)
   if(this.searchText!== ""){
     let searchValue = this.searchText.toLocaleLowerCase();
    
     this.listOfContacts = this.listOfContacts.filter((contact:any) =>{
       return contact.name.toLocaleLowerCase().match(searchValue )
       ;
     // you can keep on adding object properties here   
     
           });
           
           console.log(this.listOfContacts);
         }
         else { 
        
           // if(this.searchText== ""){ you don't need this if
           
         } 
     }

}
