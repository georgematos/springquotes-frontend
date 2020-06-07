import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from 'src/models/quote';

@Injectable()
export class QuoteService {

  endpoint: string = "http://localhost:8080";

  constructor(public http: HttpClient) {}

  public getQuote(): Observable<any> {
    return this.http.get(this.endpoint + '/randomquote');
  }

}
