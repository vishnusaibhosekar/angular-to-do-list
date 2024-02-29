import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputBoxComponent } from './input-box/input-box.component';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, InputBoxComponent, TodosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  todos = [{ id: 1, text: 'Learn Angular', completed: false }];

  onTodoAdded(newTodoText: string) {
    this.todos.push({
      id: this.todos.length + 1, // Simple ID assignment, consider a more robust method
      text: newTodoText,
      completed: false,
    });
  }
}
