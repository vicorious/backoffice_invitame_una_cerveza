import { Pairing } from './pairing';
import { PairingFilter } from './pairing-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PairingService {
  pairingList: Pairing[] = [];
  api = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Pairing> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Pairing>(url, {params, headers});
  }

  load(filter: PairingFilter): void {
    this.find(filter).subscribe(result => {
        this.pairingList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PairingFilter): Observable<Pairing[]> {
    const params = {
      'id': filter.id,
    };

    return this.http.get<Pairing[]>(this.api, {params, headers});
  }

  save(entity: Pairing): Observable<Pairing> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Pairing>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Pairing>(url, entity, {headers, params});
    }
  }

  delete(entity: Pairing): Observable<Pairing> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Pairing>(url, {headers, params});
    }
    return null;
  }
}

