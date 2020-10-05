import { Bar } from './bar';
import { BarFilter } from './bar-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class BarService {
  barList: Bar[] = [];
  api = 'http://localhost:5000/bars';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Bar> {
    const url = `${this.api}/${id}/GET`;
    return this.http.get<Bar>(url, {headers});
  }

  load(filter: BarFilter): void {
    this.find(filter).subscribe(result => {
        this.barList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: BarFilter): Observable<Bar[]> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<Bar[]>(this.api, {params, headers});
  }

  save(entity: Bar): Observable<Bar> {
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}/UPDATE`;
      return this.http.put<Bar>(url, entity, {headers});
    } else {
      url = `${this.api}`;
      return this.http.post<Bar>(url, entity, {headers});
    }
  }

  delete(entity: Bar): Observable<Bar> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Bar>(url, {headers, params});
    }
    return null;
  }
}

