import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';

import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { Dobavljac } from '../../../models/dobavljac';
import { Porudzbina } from '../../../models/porudzbina';
import { PorudzbinaService } from '../../../services/porudzbina.service';
import { DobavljacService } from '../../../services/dobavljac.service';

@Component({
 selector: 'app-porudzbina-dialog',
 templateUrl: './porudzbina-dialog.component.html',
 styleUrls: ['./porudzbina-dialog.component.css']
})
export class PorudzbinaDialogComponent implements OnInit {
 dobavljaci: Dobavljac[];
 public flag: Number;
 constructor(public snackBar: MatSnackBar,
   public dialogRef: MatDialogRef<PorudzbinaDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: Porudzbina,
   public porudzbinaService: PorudzbinaService,
   public dobavljacService: DobavljacService
 ) { }

 ngOnInit() {
   this.dobavljacService.getAllDobavljac().subscribe(dobavljaci =>
     this.dobavljaci = dobavljaci
   );
 }
 compareTo(a, b) {
   return a.id == b.id;
 }
 
 public add(): void {
   this.data.id = -1;
   this.porudzbinaService.addPorudzbina(this.data);
   this.snackBar.open("Uspešno dodata porudžbina", "U redu", { duration: 2500 });
 }

 public update(): void {
   this.porudzbinaService.updatePorudzbina(this.data);
   this.snackBar.open("Uspešno modifikovana porudžbina", "U redu", { duration: 2500 });
 }

 public delete(): void {
   this.porudzbinaService.deletePorudzbina(this.data.id);
   this.snackBar.open("Uspešno obrisana porudžbina", "U redu", { duration: 2000 });
 }

 public cancel(): void {
   this.dialogRef.close();
   this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
 }
}