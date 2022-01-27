import { Component, OnInit } from '@angular/core';
import { GoogleFormDTO, FormRESTService } from '../../generated';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  googleForms: GoogleFormDTO[] = [];

  constructor(private readonly formService : FormRESTService) { }

  ngOnInit(): void {
    this.formService
    .getAllForms()
    .subscribe(
      response => {
        this.googleForms = response;
      }
    )
  }

}
