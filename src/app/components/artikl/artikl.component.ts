import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtiklService } from '../../services/artikl.service';
import { Artikl } from '../../models/artikl';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
  dataSource: Observable<Artikl[]>;

  constructor(public httpClient: HttpClient, public artiklService: ArtiklService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.artiklService.getAllArtikli();
  }

}
