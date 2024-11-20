import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../../../db.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  tasks: Task[] = []
  
  getTasks(): Observable<Task[]>{
    const tasksArray = of(TASKS)
    return tasksArray
  }
  
  deleteTask(task: Task): Observable<Task>{
    const taskId = task.id
    this.getTasks().subscribe((tasks) => this.tasks = tasks)
    this.tasks.forEach((element, i) => {
      if(element.id === taskId){
        this.tasks.splice(i, 1)
        return
      }
    });

  }
}
