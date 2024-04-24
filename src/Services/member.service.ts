import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';
import { GLOBAL } from 'src/assets/app-config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab:any[]=GLOBAL.DB.members;
constructor(private httpClient:HttpClient){}
  ONSAVE(memberTosave :any):Observable<any>{
    //generateur de requete http en mod post
   // return this.httpClient.post('127.0.0.1:8080/api/Member',memberTosave)
   const Member1={
    ...memberTosave,
    id:Math.ceil(Math.random()*1000),
    createdDate:new Date().toISOString()
   }
   this.tab.push(Member1);
   return new Observable(observer=>observer.next())
  }
  updateMember(id:string,form:any ):Observable<any>
{
  //this.httpClient.put('linktorestAPI',form);
  const index=this.tab.findIndex(item=>item.id==id);
  this.tab[index]={
    id:id,
    ...form,
    createdDate:new Date().toISOString()

  }
  return new Observable(observer=>observer.next());
}
  ONDELETE(id:string):Observable<any>{
   // return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
  this.tab=this.tab.filter(item=>item.id!=id);
  return new Observable(observer=>observer.next())
}
getMemberById(id:string):Observable<Member>{
  //return this.httpClient.get<Member>('127.0.0.1:8080/api/Member/$(id)');
  return new Observable(observer=>observer.next(
    this.tab.filter(item=>item.id==id)[0] ?? null
  ))

}
GETALL(): Observable<Member[]> {
  return this.httpClient.get<Member[]>('http://localhost:3000/members');
}

}
