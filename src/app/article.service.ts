import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/Modeles/Article';
import { GLOBAL } from 'src/assets/app-config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab1:any[]=GLOBAL.DB.articles;
  tab_article:Article[]=[];
  constructor(private httpClient:HttpClient) {}
  GETALL():Observable<Article[]>{
    return this.httpClient.get<Article[]>('http://localhost:3000/articles')
  }
  ONSAVE(articleTosave :any):Observable<any>{
    //generateur de requete http en mod post
   // return this.httpClient.post('127.0.0.1:8080/api/Member',memberTosave)
   const Article1={
    ...articleTosave,
    id:Math.ceil(Math.random()*1000),
    date:new Date().toISOString()
   }
   this.tab1.push(Article1);
   return new Observable(observer=>observer.next())
  }
  updateArticle(id:string,form:any ):Observable<any>
{
  //this.httpClient.put('linktorestAPI',form);
  const index=this.tab1.findIndex(item=>item.id==id);
  this.tab1[index]={
    id:id,
    ...form,
    date:new Date().toISOString()

  }
  return new Observable(observer=>observer.next());
}
ONDELETE(id:string):Observable<any>{
  // return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
 this.tab1=this.tab1.filter(item=>item.id!=id);
 return new Observable(observer=>observer.next())
}
getArticleById(id:string):Observable<Article>{
  //return this.httpClient.get<Member>('127.0.0.1:8080/api/Member/$(id)');
  return new Observable(observer=>observer.next(
    this.tab1.filter(item=>item.id==id)[0] ?? null
  ))

}
}
