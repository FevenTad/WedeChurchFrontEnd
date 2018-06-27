import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';
import { HttpService } from 'app/views/http.service';
import { Denomination, DenominationsPaginator } from 'app/views/denominations/denomination.object.mapper';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DenominationService {
    headers = new Headers({'Content-Type': 'application/json'});
    token = this.auths.getUserToken();

  constructor(private http: Http, private auths: AuthService) { }

  addDenomination(denomination: Denomination){
    return this.http.post('http://localhost:8000/admin/denominations?token='+this.token, denomination, {headers: this.headers});
  }

  getDenominations(){
    return this.http.get('http://localhost:8000/denominations?token='+this.token).map(
      response => response.json() as DenominationsPaginator
    );
  }
  getDenominationsAtUrl(url: string){
    return this.http.get(url + '&token=' + this.token)
    .map(response => response.json() as DenominationsPaginator);
  }
  updateDenomination(id: number, denomination: Denomination){
    return this.http.put('http://localhost:8000/admin/denominations/'+ id + '?token=' + this.token, denomination, {headers: this.headers});
  }
  deleteDenomination(id: number){
    return this.http.delete('http://localhost:8000/admin/denominations/'+ id+ '?token=' + this.token);
  }
}
