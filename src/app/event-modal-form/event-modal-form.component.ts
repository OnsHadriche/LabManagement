import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/event-service.service';

@Component({
  selector: 'app-event-modal-form',
  templateUrl: './event-modal-form.component.html',
  styleUrls: ['./event-modal-form.component.css'],
})
export class EventModalFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private dialogRef: MatDialogRef<EventModalFormComponent>,private ES:EventService,private router:Router) {}
  ngOnInit(): void {
    this.initForm()
  }
  //initialiser les input
  initForm(){
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      lieu: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      datefin: new FormControl(null, [Validators.required]),
    });
  }
  save(): void {
    this.dialogRef.close(this.form.value);
    this.ES.save(this.form.value).subscribe(()=>{
      this.router.navigate(['/events']);
      });

  }
  close() {
    this.dialogRef.close();
  }
}
