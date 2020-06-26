import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Observable } from 'rxjs';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.people$ = this.mainService.getPeople();
  }

}
