import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '@angular/compiler';

@Injectable()
export class QuoteService {

  endpoint: string = "http://localhost:8080";

  constructor(public http: HttpClient) {}

  public getQuote(): Promise<Quote> {
    return this.http.get(this.endpoint + '/randomquote')
      .toPromise()
      .then((res: any) => res);
  }

}
