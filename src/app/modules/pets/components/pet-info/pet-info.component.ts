import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.scss'
})
export class PetInfoComponent {
  @Input() pet: any;
  @Input() owner: any;
  @Input() medicalHistory: any;
}
