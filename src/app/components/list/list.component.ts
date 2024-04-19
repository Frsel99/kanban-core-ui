import { Component, Input } from '@angular/core';
import { TaskModel, TaskStatusEnum } from '../../models/list';
import { ListItemComponent } from '../list-item/list-item.component';
import { CapitalizeHelper } from '../../helpers/capitalize';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  capitalize = CapitalizeHelper
  @Input() type: string = '';
  @Input() tasks: TaskModel[] | [] = [];
}
