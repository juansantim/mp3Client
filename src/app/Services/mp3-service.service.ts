import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archivo } from '../model/Archivo';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Mp3ServiceService {

  constructor(private http: HttpClient) { }

  GetAllAudios(): Observable<Archivo>{
    return this.http.get<Archivo>(`${environment.baseurl}/mp3/getall`)
  }
}
