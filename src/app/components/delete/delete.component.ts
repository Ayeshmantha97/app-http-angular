import { Component } from '@angular/core';
import {PostService} from "../../services/post.service";
import {SnacBarService} from "../../services/snac-bar.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  list : Array<any> = [];
  constructor(private postServices:PostService,private _snackBar:SnacBarService) {
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
          this._snackBar.trigger('deleted', 'close');
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
