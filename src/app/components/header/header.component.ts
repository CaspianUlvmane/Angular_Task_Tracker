import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, TasksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleAddTask(){
    console.log("toggle");
    
  }
}
