import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  constructor(private postService:PostService,private _snackBar: MatSnackBar) {
  }

  form = new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    userId:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    title:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    body:new FormControl('',[Validators.required,Validators.maxLength(5)])
  })
  createData() {
    const data = {
      id: this.form.get('id')?.value,
      userId: this.form.get('userId')?.value,
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
    };

    this.postService.create(data.id,data.userId,data.title,data.body).subscribe(response => {
      if (response) {
        this._snackBar.open('Updated', 'close', {
          horizontalPosition: "end",
          verticalPosition: "bottom",
          duration: 5000,
          direction: "ltr"
        });
      }
    });
  }
}
