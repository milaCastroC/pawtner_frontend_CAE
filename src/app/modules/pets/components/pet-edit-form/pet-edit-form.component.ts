import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-pet-edit-form',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './pet-edit-form.component.html',
styleUrls: ['./pet-edit-form.component.scss']
})

export class PetEditFormComponent {
@Input() pet: any;
}