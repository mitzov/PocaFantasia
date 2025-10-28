import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studente.html',
  styleUrls: ['./studente.css'],
})
export class Studente{
  // ...existing code...
  @Input() nome!: string;
  @Input() classe!: string;
}