import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChurchService } from 'app/views/churches/church.service';
import { ChurchesPaginator, Church } from 'app/views/churches/church.object.mapper';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Denomination } from 'app/views/denominations/denomination.interface';
import { DenominationService } from 'app/views/denominations/denomination.service';

@Component({
  templateUrl: 'churches.component.html'
})
export class ChurchComponent implements OnInit {
  Churches = new ChurchesPaginator();
  Churchnew = new Church();
  denominations: Denomination;

  constructor(private Churchservice: ChurchService, private denoservice: DenominationService ) { }

  ngOnInit(){
    this.UpdatepagePaginator();
    this.Churchservice.getDenominations().subscribe(
      response => {this.denominations = response}
    );
  }
  onSubmit(form: NgForm ){
    this.Churchservice.addChurch(form.value).subscribe(
    response => { this.UpdatepagePaginator()} );
    form.reset();
  }
  UpdatepagePaginator(){
    this.Churchservice.getChurches().subscribe(res => this.Churches = res);
  }
  getPaginatedChurch(url: string){
    this.Churchservice.getChurchesAtUrl(url)
    .subscribe(response=>this.Churches = response);
  }
  onedit(Church) {
    this.Churchnew = Church;
  }
  onupdate() {
    this.Churchservice.updateChurch(this.Churchnew.id, this.Churchnew)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
  ondelete() {
    this.Churchservice.deleteChurch(this.Churchnew.id)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
  onVerifyChurch(Church){
    this.Churchnew = Church;
  }
  onVerify(){
    this.Churchservice.verifyChurch(this.Churchnew.id).subscribe(
      response => {this.UpdatepagePaginator()}
    );
  }
}