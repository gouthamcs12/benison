import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { FeedBack } from '../feedback/feedback.component';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbackList: FeedBack[];
  username: string;
  isEditMode: boolean = true;
  editFeedbackId: string;
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.username = this.localStorageService.get('auth')['username'];
    this.feedbackList = this.localStorageService.get('feedbackList') || [];
  }

  toggleEditMode(editFeedbackId: string) {
    this.editFeedbackId = editFeedbackId;
    this.isEditMode = !this.isEditMode;
  }

  saveFeedback() {
    this.localStorageService.set('feedbackList', this.feedbackList);
    this.editFeedbackId = "";
  }

}
