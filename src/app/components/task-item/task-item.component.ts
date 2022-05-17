import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Output() deleteTaskEmitter: EventEmitter<Task> = new EventEmitter();
  @Output() toggleTaskEmitter: EventEmitter<Task> = new EventEmitter();
  @Input() task: Task;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(task: Task) {
    this.deleteTaskEmitter.emit(task)
  }

  onToggleTask(task: Task) {
    this.toggleTaskEmitter.emit(task);
  }
}
