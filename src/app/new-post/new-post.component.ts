import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  maxTitleLength = 30;
  maxContentLength = 300;
  currentDate = new Date().toISOString().slice(0, 10);  
}
