import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-modal-form',
  templateUrl: './event-modal-form.component.html',
  styleUrls: ['./event-modal-form.component.css'],
})
export class EventModalFormComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<EventModalFormComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  form!: FormGroup;
  save(): void {}
  close() {
    this.dialogRef.close();
  }
}
