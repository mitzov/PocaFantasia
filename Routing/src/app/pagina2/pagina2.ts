import { Component, OnInit } from '@angular/core';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina2',
  imports: [],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css'],
})
export class Pagina2 implements OnInit {
  studenti: any[] = [];

  constructor(private studentiService: StudentiService) {}

  ngOnInit(): void {
    this.loadStudenti();
  }

  loadStudenti() {
    this.studenti = this.studentiService.getStudenti();
  }

  onSubmit(nomeEl: HTMLInputElement, classeEl: HTMLInputElement, mediaEl: HTMLInputElement) {
    const nome = nomeEl.value && nomeEl.value.trim();
    const classe = classeEl.value && classeEl.value.trim();
    const media = mediaEl.value && mediaEl.value.trim();

    if (!nome || !classe || !media || isNaN(Number(media))) {
      return;
    }

    this.studentiService.addStudente({ nome, classe, mediaVoti: Number(media) });

    nomeEl.value = '';
    classeEl.value = '';
    mediaEl.value = '';
    this.loadStudenti();
  }
}
