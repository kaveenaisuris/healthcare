import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppoimentComponent } from './appoiment/appoiment.component';
import{EmergencyAltertComponent} from './emergency-altert/emergency-altert.component'
import {PatientDetailsComponent} from './patient-details/patient-details.component'
// import {RifddetailsComponent} './rifddetails/rifddetails.component'
import{PdetailsComponent} from './pdetails/pdetails.component'
import { RdetailsComponent } from './rdetails/rdetails.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Patient',
    },
    children: [
      {
        path: 'appoiment',
        component: AppoimentComponent,
        data: {
          title: 'Appoiment',
        },
      },
      {
        path: 'emergency-altert',
        component: EmergencyAltertComponent,
        data: {
          title: 'emergency-altert',
        },
      },
      {
        path: 'patient-details',
        component: PdetailsComponent,
        data: {
          title: 'patient-details',
        },
      },
      {
        path: 'rfid-details',
        component: RdetailsComponent,
        data: {
          title: 'rfid-details',
        },
      },

      // {
      //   path: 'RFIDdetails',
      //   component: RfidDetailsComponent,
      //   data: {
      //     title: 'RFIDdetails',
      //   },
      // },
      {
        path: 'Patientdetails',
        component: PatientDetailsComponent,
        data: {
          title: 'Patientdetails',
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}

