import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

export class FeedBack {
  id: string;
  employeeName: string;
  employeeId: string;
  projectName: string;
  rating: number;
  comments: string;
  createdDate: Date;

  constructor() { }
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: FeedBack = new FeedBack();
  username: string;
  stars: number[] = [1, 2, 3, 4, 5];
  projects = ['Demo1', 'Demo2', 'Demo3', 'Demo4'];
  feedbackList: FeedBack[];
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.localStorageService.get('auth')['username'];
    this.feedbackList = this.localStorageService.get('feedbackList') || [];
  }

  saveFeedBack() {
    this.feedback.id = Math.floor(1000 + Math.random() * 9000).toString()
    this.feedback.createdDate = new Date();
    this.feedbackList.push(this.feedback);
    this.localStorageService.set('feedbackList', this.feedbackList);
    this.router.navigateByUrl('/feedback-list');
  }

  countStar(star) {
    this.feedback.rating = star;
    console.log('Value of star', star);
  }
}
