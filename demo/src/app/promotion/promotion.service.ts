import { Promotion } from './promotion';
import { PromotionFilter } from './promotion-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PromotionService {
  promotionList: Promotion[] = [];
  api = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Promotion> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Promotion>(url, {params, headers});
  }

  load(filter: PromotionFilter): void {
    this.find(filter).subscribe(result => {
        this.promotionList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PromotionFilter): Observable<Promotion[]> {
    const params = {
    };

    return this.http.get<Promotion[]>(this.api, {params, headers});
  }

  save(entity: Promotion): Observable<Promotion> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Promotion>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Promotion>(url, entity, {headers, params});
    }
  }

  delete(entity: Promotion): Observable<Promotion> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Promotion>(url, {headers, params});
    }
    return null;
  }
}

