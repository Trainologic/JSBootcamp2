import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  students: Array<{ name: String, gender: String }> = [
    { name: 'Asaf', gender: 'Male' },
    { name: 'Boaz', gender: 'Male' },
    { name: 'Ariel', gender: 'Male' },
    { name: 'Alexei', gender: 'Male' },
    { name: 'Hanita', gender: 'Female' },
    { name: 'Zhanna', gender: 'Female' },
    { name: 'Max', gender: 'Male' },
    { name: 'Roman', gender: 'Male' },
    { name: 'Oded', gender: 'Male' }
  ];

  constructor() { }

}
