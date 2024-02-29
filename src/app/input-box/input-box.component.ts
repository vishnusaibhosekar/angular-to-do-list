import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent implements OnInit {
  @Output() todoAdded = new EventEmitter<string>();

  newTodoText: string = '';

  constructor() {}

  ngOnInit() {}

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoAdded.emit(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
