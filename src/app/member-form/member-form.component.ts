import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  //injection de dependance
  constructor(private MS:MemberService,private route:Router,private activatedroute:ActivatedRoute){}
form !:FormGroup;
idcourant!:string;
ngOnInit():void//se charge par defaut qu'on  lance le composant
{
  //chercher id dans la route
  const idcourant=this.activatedroute.snapshot.params['id'];
  //if id existe est a une valeur =>
  if(!!idcourant)
  {
    this.MS.getMemberById(idcourant).subscribe(el=>

      this.initForm2(el))
      // console.log(el))

  }
  //{je suis dans edit  getMemberbyid(id)=>Member=>this.initform2(Member)}
  //else je suis dans create=>this.initForm()


 else{

   this.initForm();
 }
}
initForm2(el:Member):void{
  this.form = new FormGroup({
    cin: new FormControl(el.cin, [Validators.required]),
    name: new FormControl(el.name, [Validators.required]),
    cv: new FormControl(el.cv, [Validators.required]),
    type: new FormControl(el.type, [Validators.required]),
  });
}
initForm():void{
  this.form=new FormGroup({
    cin:new FormControl(null,[Validators.required]),
    name:new FormControl(null,[Validators.required]),
    cv:new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required])
})
}
onSub():void
{
  if(!!this.idcourant)
  {
    //je suis dans edit
    this.MS.updateMember(this.idcourant,this.form.value).subscribe(()=>{
    this.route.navigate(['/members']);
  })
  }
  else{
    console.log(this.form.value);
    this.MS.ONSAVE(this.form.value).subscribe(()=>{
      this.route.navigate(['/members'])
  });
}

}}
