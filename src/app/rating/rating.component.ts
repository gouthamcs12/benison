import { Component, OnInit, Input } from '@angular/core';
import { FeedBack } from '../feedback/feedback.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input('feedback') feedback: FeedBack;
  stars: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

  countStar(star: number) {
    this.feedback.rating = star;
  }

}
