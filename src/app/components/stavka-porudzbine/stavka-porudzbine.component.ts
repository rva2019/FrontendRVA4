import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Dobavljac } from '../../models/dobavljac';
import { Porudzbina } from '../../models/porudzbina';
import { Artikl } from '../../models/artikl';
import { StavkaPorudzbine } from '../../models/stavka-porudzbine';
import { StavkaPorudzbineService } from '../../services/stavka-porudzbine.service';
import { StavkaPorudzbineDialogComponent } from '../dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';

@Component({
 selector: 'app-stavka-porudzbine',
 templateUrl: './stavka-porudzbine.component.html',
 styleUrls: ['./stavka-porudzbine.component.css']
})
export class StavkaPorudzbineComponent implements OnInit {
 displayedColumns = ['id', 'redniBroj', 'kolicina', 'jedinicaMere', 'cena', 'porudzbina', 'artikl', 'actions'];
 dataSource: Observable<StavkaPorudzbine[]>;

 @Input() selektovanaPorudzbina: Porudzbina;

 constructor(public stavkaPorudzbineService: StavkaPorudzbineService, public dialog: MatDialog) { }

 ngOnInit() {

 }

 ngOnChanges() {
   if (this.selektovanaPorudzbina.id) {
     this.loadData();
   }
 }

 public loadData() {
   this.dataSource = this.stavkaPorudzbineService.getStavkeZaPorudzbinu(this.selektovanaPorudzbina.id);
 }

 public openDialog(flag: number, id: number, redniBroj: number, kolicina: number, jedinicaMere: number,
   cena: number, porudzbina: Porudzbina, artikl: Artikl) {
   const dialogRef = this.dialog.open(StavkaPorudzbineDialogComponent, {
     data: {
       i: id, id: id, redniBroj: redniBroj, kolicina: kolicina, jedinicaMere: jedinicaMere,
       cena: cena, porudzbina: porudzbina, artikl: artikl
     }
   });
   dialogRef.componentInstance.flag = flag;
   if (flag == 1)
     dialogRef.componentInstance.data.porudzbinaBean = this.selektovanaPorudzbina;

   dialogRef.afterClosed().subscribe(result => {
     if (result == 1)
       this.loadData();
   });
 }
}