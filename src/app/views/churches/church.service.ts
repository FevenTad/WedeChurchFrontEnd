import { Injectable, EventEmitter  } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';
import { HttpService } from 'app/views/http.service';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Church, ChurchesPaginator } from 'app/views/churches/church.object.mapper';
import { Denomination } from 'app/views/denominations/denomination.object.mapper';

@Injectable()
export class ChurchService {
    headers = new Headers({'Content-Type': 'application/json'});
    token = this.auths.getUserToken();

  constructor(private http: Http, private auths: AuthService) { }

  addChurch(church: Church){
    return this.http.post('http://localhost:8000/churches?token='+this.token, church, {headers: this.headers});
  }

  getChurches(){
    return this.http.get('http://localhost:8000/churches?token='+this.token).map(
      response => response.json() as ChurchesPaginator
    );
  }
  getChurchesAtUrl(url: string){
    return this.http.get(url+ '&token=' + this.token)
    .map(response => response.json() as ChurchesPaginator);
  }
  updateChurch(id: number, church: Church){
    return this.http.put('http://localhost:8000/churches/'+ id + '?token=' + this.token, church, {headers: this.headers});
  }
  deleteChurch(id: number){
    return this.http.delete('http://localhost:8000/admin/churches/'+ id + '?token=' + this.token);
  }
  getDenominations(){
    return this.http.get('http://localhost:8000/admin/denominations/all?token='+this.token).map(
      response => response.json() as Denomination
    );
  }
  verifyChurch(id: number){
    return this.http.post('http://localhost:8000/admin/verify/'+ id + '?token=' + this.token, {headers: this.headers}).map(
      response => response.json()
    );
  }
}
