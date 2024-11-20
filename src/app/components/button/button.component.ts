import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text= "";
  @Input() color= "";
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit()
  }
}
