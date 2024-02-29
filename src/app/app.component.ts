import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box/input-box.component';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    InputBoxComponent,
    TodosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  todos = [{ id: 1, text: 'Learn Angular', completed: false }];

  onTodoAdded(newTodoText: string) {
    this.todos.push({
      id: this.todos.length + 1,
      text: newTodoText,
      completed: false,
    });
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
