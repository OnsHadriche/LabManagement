import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/event-service.service';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent {

constructor(    private fb: FormBuilder,
  private dialogRef: MatDialogRef<EventformComponent>,
  private AS: EventService,
  private router: Router,){}

}
