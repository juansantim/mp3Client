import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archivo } from '../model/Archivo';

import { environment } from '../../environments/environment';

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

  GetAllAudios(): Observable<Archivo>{
    return this.http.get<Archivo>(`${environment.baseurl}/mp3/getall`)
  }
}
