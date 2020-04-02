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
    this.quoteService.getQuote()
      .then((quote: any) => {
        this.quote = quote;
      })
      .catch((error) => {
        console.log(error);
    });
  }
}
