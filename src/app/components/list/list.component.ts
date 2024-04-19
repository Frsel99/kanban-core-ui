import { Component, Input } from '@angular/core';
import { TaskModel, TaskStatusEnum } from '../../models/list';
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
}
