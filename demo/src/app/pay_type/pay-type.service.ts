import { PayType } from './pay-type';
import { PayTypeFilter } from './pay-type-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PayTypeService {
  payTypeList: PayType[] = [];
  api = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<PayType> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<PayType>(url, {params, headers});
  }

  load(filter: PayTypeFilter): void {
    this.find(filter).subscribe(result => {
        this.payTypeList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PayTypeFilter): Observable<PayType[]> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<PayType[]>(this.api, {params, headers});
  }

  save(entity: PayType): Observable<PayType> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<PayType>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<PayType>(url, entity, {headers, params});
    }
  }

  delete(entity: PayType): Observable<PayType> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<PayType>(url, {headers, params});
    }
    return null;
  }
}

