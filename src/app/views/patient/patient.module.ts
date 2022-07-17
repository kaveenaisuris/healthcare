import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';


import { PatientRoutingModule } from './patient-routing.module';

import { AppoimentComponent } from './appoiment/appoiment.component';
import{EmergencyAltertComponent} from './emergency-altert/emergency-altert.component';

import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PdetailsComponent } from './pdetails/pdetails.component';
import { RdetailsComponent } from './rdetails/rdetails.component'
// import {RfidDetailsComponent} from './healthcare-db/rfid-details/rfid-details.component';
// import { PatientDetailsComponent } from './healthcare-db/patient-details/patient-details.component'

@NgModule({
  declarations: [AppoimentComponent,EmergencyAltertComponent, PatientDetailsComponent, PdetailsComponent, RdetailsComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    FormsModule
  
  ]
})
export class PatientModule {
}
