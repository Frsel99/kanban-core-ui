import { Component, Input } from '@angular/core';
import { TaskModel, TaskStatusEnum } from '../../models/list';
import { CapitalizeHelper } from '../../helpers/capitalize';


@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  capitalize = CapitalizeHelper
  @Input() task : TaskModel = {
    id: 0,
    title: '',
    description: '',
    status: TaskStatusEnum.PENDING,
    editing: false,
  };
}
