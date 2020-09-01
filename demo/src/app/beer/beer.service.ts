import { Beer } from './beer';
import { BeerFilter } from './beer-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class BeerService {
  beerList: Beer[] = [];
  api = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Beer> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Beer>(url, {params, headers});
  }

  load(filter: BeerFilter): void {
    this.find(filter).subscribe(result => {
        this.beerList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: BeerFilter): Observable<Beer[]> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<Beer[]>(this.api, {params, headers});
  }

  save(entity: Beer): Observable<Beer> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Beer>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Beer>(url, entity, {headers, params});
    }
  }

  delete(entity: Beer): Observable<Beer> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Beer>(url, {headers, params});
    }
    return null;
  }
}

