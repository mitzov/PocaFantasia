import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {
  studenti = [
{ id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
{ id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
{ id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
{ id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
{ id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
];
  getStudenti() {
return this.studenti;
  }
  private getNextId(): number {
    const ids = this.studenti.map(s => s.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
  }

  addStudente(data: { nome: string; classe: string; mediaVoti: number }) {
    const nuovo = {
      id: this.getNextId(),
      nome: data.nome,
      classe: data.classe,
      mediaVoti: Number(data.mediaVoti)
    };
    this.studenti.push(nuovo);
    return nuovo;
  }
}
