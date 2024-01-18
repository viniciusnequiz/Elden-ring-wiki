import { Component, ElementRef } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  selected: any
  target: any
  constructor(private elem: ElementRef){}

  ngAfterContentInit() {
    this.selected = this.elem.nativeElement.querySelector('.classes')
    this.target = this.selected.className
  }

  ChangeTabOptions(event: any){
    let target = event.target || event.srcElement || event.currentTarget;
    if(this.selected.className == target.parentElement.className) return
    target.parentElement.classList.add('is-active')
    this.selected.classList.remove('is-active')
    this.selected = target.parentElement
    this.target = this.selected.className
  }
}
