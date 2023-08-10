import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  list : Array<any> = [];
  constructor(private postServices:PostService,private _snackBar:MatSnackBar) {
  }
  ngOnInit(): void {
    this.postServices.findAll().subscribe(response=>{
      this.list = response
    })
  }

  delete(id:any) {
    if(confirm("Are you sure" +id)){
      this.postServices.delete(id).subscribe(response=>{
        if (response) {
          this._snackBar.open('Deleted', 'close', {
            horizontalPosition: "end",
            verticalPosition: "bottom",
            duration: 5000,
            direction: "ltr"
          });
          for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].id == id){
              this.list.splice(i,1)
              return
            }
          }
        }
      })
    }

  }
}
