import { Component } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';
import { Quote } from 'src/models/quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    QuoteService
  ]
})
export class AppComponent {

  title = 'consuming-rest-front-end';
  public quote: Quote;

  constructor(public quoteService: QuoteService) {}

  ngOnInit(): void {
    this.newQuote();
  }

  newQuote(): void {
   this.quoteService.getQuote().subscribe(
     (resp: Quote) => this.quote = resp,
     (err: Error) => alert(err)
    );
  }
}
