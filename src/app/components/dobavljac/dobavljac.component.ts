import { Component, OnInit, ViewChild } from '@angular/core';

import { Dobavljac } from '../../models/dobavljac';
import { DobavljacService } from '../../services/dobavljac.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DobavljacDialogComponent } from '../dialogs/dobavljac-dialog/dobavljac-dialog.component';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {
  displayedColumns = ['id', 'adresa', 'naziv', 'kontakt', 'actions'];
  dataSource: MatTableDataSource<Dobavljac>;


  constructor(public dobavljacService: DobavljacService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dobavljacService.getAllDobavljac().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  public openDialog(flag: number, id: number, adresa: string, naziv: string, kontakt: string) {
    const dialogRef = this.dialog.open(DobavljacDialogComponent, { data: { id: id, adresa: adresa, naziv: naziv, kontakt: kontakt } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }
}