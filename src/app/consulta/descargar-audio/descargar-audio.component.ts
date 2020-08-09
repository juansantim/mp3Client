import { Component, OnInit, Input } from '@angular/core';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';

@Component({
  selector: 'app-descargar-audio',
  templateUrl: './descargar-audio.component.html',
  styleUrls: ['./descargar-audio.component.css']
})
export class DescargarAudioComponent implements OnInit {

  @Input()
  audioId:number;

  constructor(private service:Mp3ServiceService) { }

  ngOnInit(): void {
  }

  Descargar(){
    let frame:any = document.getElementById("downloadFrame");
    frame.src = this.service.GetDownloadAudioUrl(this.audioId);
  }

}
