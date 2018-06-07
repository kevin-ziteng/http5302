import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    {id: 1, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date('01/01/1950')},
    {id: 2, firstName: 'Bernie', lastName: 'Monette', dateOfBirth: new Date('01/01/1955')},
    {id: 3, firstName: 'Sean', lastName: 'Doyle', dateOfBirth: new Date('01/01/1970')}
  ];

  getPeople(peopleOfInterest?: Person): Observable<Person[]>{
    if ( peopleOfInterest !== undefined )
    {
      let peopleResults : Person[] =[];

      for ( let p of this.people){
        if ( peopleOfInterest.firstName.toLowerCase() == p.firstName.toLowerCase()){
          peopleResults.push(p);
        }
        if ( peopleOfInterest.lastName.toLowerCase() == p.lastName.toLowerCase()){
          peopleResults.push(p);
        }
      }
      return of(peopleResults);


    }else{
      return of(this.people);
    }    
  }

  constructor() { }
}
