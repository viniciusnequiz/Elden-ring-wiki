import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-complete-card-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complete-card-info.component.html',
  styleUrl: './complete-card-info.component.scss'
})
export class CompleteCardInfoComponent {
  @Input() type: string = ''
  @Input() objOfItem: any = { erro: 'something wrong'}
}
