import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent {
  form!: FormGroup;
  idcourant!: string;
  titre!: string;
  type!: string;
  date!: string;
  sourcePDF!: string;
  lien!: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ArticleFormComponent>,
    private AS: ArticleService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.idcourant = data.id
    this.titre = data.titre;
    this.type = data?.type;
    this.date = data?.date;
    this.sourcePDF = data.sourcePDF;
    this.lien = data.lien;
    // console.log(this.titre)
    console.log(this.type);
    console.log(this.date);
    // console.log(this.sourcePDF)
    // console.log(this.lien)
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.form = new FormGroup({
      type: new FormControl(this.type, [Validators.required]),
      titre: new FormControl(this.titre, [Validators.required]),
      date: new FormControl(this.date, [Validators.required]),
    });
  }
  save() {
    // this.dialogRef.close();
    // redirection vers la pages article
    //this.AS.save(this.form.value).subscribe(()=>{
    //afficher le tableau
    this.dialogRef.close(this.form);
    if (this.idcourant) {
      console.log(this.idcourant)
      this.AS.updateArticle(this.idcourant, this.form.value).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    } else {
      console.log(this.idcourant)
      this.AS.onsave(this.form).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
