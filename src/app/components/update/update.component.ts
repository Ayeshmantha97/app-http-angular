import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {SnacBarService} from "../../services/snac-bar.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  searchId = '';

  constructor(private postService:PostService, private _snackBar: SnacBarService) {
  }

  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  updateData() {
    const data = {
      id: this.form.get('id')?.value,
      userId: this.form.get('userId')?.value,
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
    };

    this.postService.update(data.id,data.userId,data.title,data.body).subscribe(response => {
      if (response) {
        this._snackBar.trigger('Updated', 'close');
      }
    });
  }
  loadData() {
    this.postService.find(this.searchId).subscribe(response => {
      this.form.patchValue({
        id: response[0].id,
        userId: response[0].userId,
        title: response[0].title,
        body: response[0].body
      })
    })
  }
}
