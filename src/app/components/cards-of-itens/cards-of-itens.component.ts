import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-of-itens',
  standalone: true,
  imports: [],
  templateUrl: './cards-of-itens.component.html',
  styleUrl: './cards-of-itens.component.scss'
})
export class CardsOfItensComponent {
  @Input() name: string = 'Erro...'
  @Input() description: string = 'Something wrong'
  @Input() imageUrl: string = ''
}
