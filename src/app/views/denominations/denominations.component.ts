import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DenominationService } from 'app/views/denominations/denomination.service';
import { Denomination, DenominationsPaginator } from 'app/views/denominations/denomination.object.mapper';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  templateUrl: 'denominations.component.html'
})
export class DenominationComponent implements OnInit {
  denominations = new DenominationsPaginator();
  denominationnew = new Denomination();

  constructor(private den: DenominationService ) { }

  ngOnInit(){
    this.UpdatepagePaginator();
  }
  onSubmit(form: NgForm ){
    this.den.addDenomination(form.value).subscribe(
    response => { this.UpdatepagePaginator()} );
    form.reset();
  }
  UpdatepagePaginator(){
    this.den.getDenominations().subscribe(res => this.denominations = res);
  }
  getPaginatedDenomination(url: string){
    this.den.getDenominationsAtUrl(url)
    .subscribe(response=>this.denominations = response);
  }
  onedit(denomination) {
    this.denominationnew = denomination;
  }
  onupdate() {
    this.den.updateDenomination(this.denominationnew.id, this.denominationnew)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
  ondelete() {
    this.den.deleteDenomination(this.denominationnew.id)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
}