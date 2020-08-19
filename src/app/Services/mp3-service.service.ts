import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Archivo } from '../model/Archivo';

import { environment } from '../../environments/environment';
import { DataFilter } from '../model/DataFilter';
import { PaginationResult } from '../model/PaginationResult';
import { LoginModel } from '../model/loginModel';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class Mp3ServiceService {
  CerrarSesion() {
    localStorage.clear()
  }
  
  getUsuarioLogueado(): User {
    let usuario:User = JSON.parse(localStorage.getItem(environment.credentials));

    return usuario;
  }
  
  
  constructor(private http: HttpClient) {
    
  }

  GetDownloadAll(dataFilter: DataFilter) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    // {responseType: 'blob'}
    return this.http.post(`${environment.baseurl}/mp3/downloadAll`, dataFilter, {headers, responseType: 'arraybuffer'});
  }
  
  SaveToken(token: string) {
    localStorage.setItem(environment.credentials, token);
  }
  
  Login (model:LoginModel){
    return this.http.post(`${environment.baseurl}/security/login`,{user: model });
  }

  GetDownloadAudioUrl(audioId: number): any {
    return `${environment.baseurl}/mp3/download?id=${audioId}`;
  }
  GetAudioUrl(id: any):string {
    return `${environment.baseurl}/mp3/play?id=${id}`;
  }


  GetAllAudios(filterData: DataFilter, paginationResult: PaginationResult): Observable<PaginationResult>{
    return this.http.post<PaginationResult>(`${environment.baseurl}/mp3/getall`, {
      filter: filterData,
      pagination: paginationResult
    })
  }

  fitroAplicadoSubject = new Subject<PaginationResult>();

  ChangePageSubject =  new Subject<number>();

  ChangePageSizeSubject =  new Subject<number>();

  ChangeFilterSubject =  new Subject<DataFilter>();

}
