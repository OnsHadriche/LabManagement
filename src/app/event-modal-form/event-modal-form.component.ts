import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-modal-form',
  templateUrl: './event-modal-form.component.html',
  styleUrls: ['./event-modal-form.component.css'],
})
export class EventModalFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private dialogRef: MatDialogRef<EventModalFormComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //initialiser les input
  initForm(){
    this.form = new FormGroup({
      type: new FormControl(null, [Validators.required]),
      titre: new FormControl(null, [Validators.required]),
      start: new FormControl(null, [Validators.required]),
      end: new FormControl(null, [Validators.required]),
    });
  }
  save(): void {}
  close() {
    this.dialogRef.close();
  }
}
