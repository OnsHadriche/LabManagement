import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EventService} from '../../Services/event-service.service';
import { Evenement } from 'src/Modeles/Evt';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['1', '2', '3', '4', '5','6'];
  dataSource!: MatTableDataSource<any>;
  tabEvent: Evenement[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private AS: EventService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getAllData();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  getAllData(): void {
    this.AS.GETALL().subscribe((res) => {
      this.tabEvent= res;
      this.dataSource = new MatTableDataSource<any>(this.tabEvent);
      this.dataSource.paginator = this.paginator;
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(EventsComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe(() =>{
        // this.AS.save(data).subscribe(()=>{
        //   this.router.navigate(['/events'])
        })


  }

}
