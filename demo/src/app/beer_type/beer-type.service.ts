import { BeerType } from './beer-type';
import { BeerTypeFilter } from './beer-type-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class BeerTypeService {
  beerTypeList: BeerType[] = [];
  api = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<BeerType> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<BeerType>(url, {params, headers});
  }

  load(filter: BeerTypeFilter): void {
    this.find(filter).subscribe(result => {
        this.beerTypeList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: BeerTypeFilter): Observable<BeerType[]> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<BeerType[]>(this.api, {params, headers});
  }

  save(entity: BeerType): Observable<BeerType> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<BeerType>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<BeerType>(url, entity, {headers, params});
    }
  }

  delete(entity: BeerType): Observable<BeerType> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<BeerType>(url, {headers, params});
    }
    return null;
  }
}

