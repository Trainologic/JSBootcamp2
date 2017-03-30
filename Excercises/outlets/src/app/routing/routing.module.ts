import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from '../students/students.component';
import { StudentComponent } from '../student/student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';


const routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  {
    path: 'students', component: StudentsComponent, children: [
      { path: ':id', component: StudentComponent, outlet: 'basic' },
      { path: ':id', component: StudentComponent, outlet: 'details' },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
