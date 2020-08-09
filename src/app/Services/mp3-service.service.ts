import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archivo } from '../model/Archivo';

import { environment } from '../../environments/environment';
import { DataFilter } from '../model/DataFilter';
import { PaginationResult } from '../model/PaginationResult';

@Injectable({
  providedIn: 'root'
})
export class Mp3ServiceService {
  GetDownloadAudioUrl(audioId: number): any {
    return `${environment.baseurl}/mp3/download?id=${audioId}`;
  }
  GetAudioUrl(id: any):string {
    return `${environment.baseurl}/mp3/play?id=${id}`;
  }

  constructor(private http: HttpClient) { }

  GetAllAudios(filterData: DataFilter, paginationResult: PaginationResult): Observable<PaginationResult>{
    return this.http.post<PaginationResult>(`${environment.baseurl}/mp3/getall`, {
      filter: filterData,
      pagination: paginationResult
    })
  }
}
