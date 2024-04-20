import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskModel } from '../../models/list';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() type: string = '';
  @Input() tasks: TaskModel[] | [] = [];
  @Output() updateTask = new EventEmitter();

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  onDrop(event: DragEvent, type: string) {
    const taskId = event?.dataTransfer?.getData('taskId');
    this.updateTask.emit({ taskId, status: type });
  }
}
