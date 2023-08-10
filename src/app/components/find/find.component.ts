import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  list :Array<any>=[];
  constructor(private postService:PostService) {
  }
  searchId = '';

  loadData() {
    this.postService.find(this.searchId).subscribe(response=>{
      this.list = response
    })
  }
}
