import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as md5 from 'crypto-js/md5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiKey = '5a237863b3cc2061003cbbc4fe20dc06';
  private privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
  private hashKey = '';
  timeStamp = '';

  basePath = 'http://gateway.marvel.com/v1/public/';
  resource = 'characters'

  constructor(private http: HttpClient) {
    this.timeStamp = String(+new Date());
    this.hashKey = md5(
      this.timeStamp + this.privateKey + this.apiKey
    ).toString();
  }

  getCharacters(name: string): Observable<any> {
    return this.http.get<Observable<any>>(this.basePath + this.resource, {
      params: {
        apikey: this.apiKey,
        ts: this.timeStamp,
        hash: this.hashKey,
        nameStartsWith: name,
      },
    });
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get<Observable<any>>(this.basePath + this.resource + '/' + id, {
      params: {
        apikey: this.apiKey,
        ts: this.timeStamp,
        hash: this.hashKey,
      },
    });
  }
}
