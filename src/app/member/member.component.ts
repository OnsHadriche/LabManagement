import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';
import { GLOBAL } from 'src/assets/app-config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(private MS:MemberService,private route:Router,private dialog:MatDialog){}
dataSource:any[]=this.MS.tab;

displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];

delete(id:string):void
{
  //1 ouvrir la boite de dialogue
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '400px',
    width: '600px',
  });
  //2 attendre le resultat de l'utilisateur
  dialogRef.afterClosed().subscribe(result=>{
    if(result)
    this.MS.ONDELETE(id).subscribe(()=>{
      this.dataSource=this.MS.tab
    })
  })
  //3 if click sur confirm=>



}}
