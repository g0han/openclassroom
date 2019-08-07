import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() titlePost: string;
  @Input() descriptionPost: string;
  @Input() datePost;
  like = 0;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.like++;
  }

  onDislike() {
    this.like--;
  }

}
