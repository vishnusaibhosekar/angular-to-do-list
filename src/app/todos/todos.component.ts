import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todo: any;
  @Output() deleteRequest = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteTodo() {
    this.deleteRequest.emit(this.todo.id);
  }
}
