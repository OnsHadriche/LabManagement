import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/Services/event-service.service';
import { MemberService } from 'src/Services/member.service';
import { ArticleService } from '../article.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Nb_members !: number;
  Nb_events !: number;
  Nb_articles !: number;
  Nb_outils !: number;
  nbTeacher ! : number;
  tab_article : number[] =[]
  chartData: ChartDataset[] = [
    {
      label: '$ in NombreArticle',
      data: this.tab_article
    }
  ];
  chartDatapie : ChartDataset[] = [
    {

      label: '$ repartition',
      data: []
    }
  ]
  chartLabels: string[] = [];
  chartLabelspie : string []=["Teacher","Student"]
  chartOptions: ChartOptions = {};
  constructor(private MS:MemberService,private ES:EventService,private AS:ArticleService){

  }
  ngOnInit(): void {
    this.getMembers();
    this.getArticles();
    this.getEents();
  }
  getArticles(){

    this.AS.GETALL().subscribe((res)=>{
      this.Nb_articles = res.length


    })
  }
  getMembers(){
    this.MS.GETALL().subscribe((res)=>{
      this.Nb_members = res.length
     res.forEach(el => {
      this.chartLabels.push(el.name)
      this.tab_article.push(el.tab_pub.length)

     });
     this.chartData =[
      {
        label: '$ in NombreArticle',
        data: this.tab_article
      }
    ];

    })

  }
  getEents(){
    this.MS.GETALL().subscribe((res)=>{
      this.Nb_events = res.length
    })
  }

}
