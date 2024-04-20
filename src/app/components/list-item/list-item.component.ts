import { Component, Input } from '@angular/core';
import { TaskModel, TaskStatusEnum } from '../../models/list';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() task: TaskModel = {
    id: 0,
    title: '',
    description: '',
    status: TaskStatusEnum.PENDING,
    editing: false,
  };

  onDragStart(event: DragEvent, task: TaskModel) {
    event?.dataTransfer?.setData('taskId', task.id.toString());
  }
}
