import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/Services/event-service.service';
import { MemberService } from 'src/Services/member.service';
import { ArticleService } from '../article.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Nb_members!: number;
  Nb_events!: number;
  Nb_articles!: number;
  Nb_outils!: number;
  nbTeacher: number = 0;
  nbstudent: number = 0;
  tab_article: number[] = [];
  tab_event : number [] = []
  chartData: ChartDataset[] = [
    {
      label: '$ in NombreArticle',
      data: this.tab_article,
    },
  ];
  chartDatapie: ChartDataset[] = [
    {
      label: '$ repartition',
      data: [],
    },
  ];
  chartDatabar: ChartDataset[] = [
    {
      label: '$ Nombre Events',
      data: [],
    },
  ];
  chartLabels: string[] = [];
  chartLabelsbar: string[] = [];
  chartLabelspie: string[] = ['Teacher', 'Student'];
  chartOptions: ChartOptions = {};
  constructor(
    private MS: MemberService,
    private ES: EventService,
    private AS: ArticleService
  ) {}
  ngOnInit(): void {
    this.getMembers();
    this.getArticles();
    this.getEents();
  }
  getArticles() {
    this.AS.GETALL().subscribe((res) => {
      this.Nb_articles = res.length;
    });
  }
  getMembers() {
    this.MS.GETALL().subscribe((res) => {
      this.Nb_members = res.length;
      res.forEach((el) => {
        this.chartLabels.push(el.name);
        this.tab_article.push(el.tab_pub.length);
        if (el.type == 'teacher') {
          this.nbTeacher++;
        } else {
          this.nbstudent++;
          this.chartLabelsbar.push(el.name);
          this.tab_event.push(el.tab_evt.length);
        }
      });
      this.chartDatapie = [
        { label: '$ repartition', data: [this.nbTeacher, this.nbstudent] },
      ];
      this.chartData = [
        {
          label: '$ in NombreArticle',
          data: this.tab_article,
        },
      ];
      this.chartDatabar = [
        {
          label: '$ $ Nombre Events',
          data: this.tab_event,
        },
      ];
    });
  }
  getEents() {
    this.MS.GETALL().subscribe((res) => {
      this.Nb_events = res.length;
    });
  }
}
