import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit{

  list : Array<any> = [];
  constructor(private postServices:PostService) {
  }
  ngOnInit(): void {
    this.postServices.findAll().subscribe(response=>{
      this.list = response
    })
  }

}
