import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner-info-card.component.html',
  styleUrls: ['./owner-info-card.component.scss']
})

export class OwnerInfoCardComponent {
  @Input() owner: any;
}