import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artikl } from '../models/artikl';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtiklService{
    private readonly API_URL = 'https://rvabackend.herokuapp.com/artikl/';

    dataChange: BehaviorSubject<Artikl[]> = new BehaviorSubject<Artikl[]>([]);
    
    constructor(private httpClient: HttpClient){ }

    public getAllArtikli(): Observable<Artikl[]>{
        this.httpClient.get<Artikl[]>(this.API_URL).subscribe(data =>{
            this.dataChange.next(data);
        })
        return this.dataChange.asObservable();
    }

    public addArtikl(artikl: Artikl): void{
        this.httpClient.post(this.API_URL, artikl).subscribe();
    }

    public editArtikl(artikl: Artikl): void{
        this.httpClient.put(this.API_URL, artikl).subscribe();
    }

    public deleteArtikl(id: number): void{
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}