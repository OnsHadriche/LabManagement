import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Member } from 'src/Modeles/Member';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent {
  form!: FormGroup ;
  idcourant!: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ArticleFormComponent>,
    private  AS:ArticleService
    // @Inject(MAT_DIALOG_DATA) data
  ) {
    // this.description = data.description;
  }
  ngOnInit():void{
    this.initForm();
  }
  initForm():void{
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }
  save() {
    this.dialogRef.close(
      this.AS.ONSAVE(this.form.value).subscribe(()=>{})
      //redirection vers la pages article
    );
  }

  close() {
    this.dialogRef.close();
  }
}
