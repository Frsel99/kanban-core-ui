import { Component } from '@angular/core';
import { TaskModel, TaskStatusEnum } from '../../models/list';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filters = Object.values(TaskStatusEnum);
  tasks = [
    {
      id: 1,
      title: 'First pending Task!',
      description: 'First task!',
      status: TaskStatusEnum.PENDING,
      editing: false,
    },
    {
      id: 2,
      title: 'Second pending Task!',
      description: 'Second task created!',
      status: TaskStatusEnum.PENDING,
      editing: false,
    },
    {
      id: 3,
      title: 'Working on Task!',
      description: 'Working on task',
      status: TaskStatusEnum.WORKING_ON,
      editing: false,
    },
    {
      id: 4,
      title: 'Completed Task!',
      description: 'Finished task!',
      status: TaskStatusEnum.COMPLETED,
      editing: false,
    },
  ];

  filterTask(type: string) {
    return this.tasks.filter((task: TaskModel) => task.status === type);
  }

  onUpdateTask(data: { taskId: number; status: string }) {
    const index = this.tasks.findIndex(
      (task: TaskModel) => task.id === Number(data.taskId)
    );
    this.tasks[index].status = data.status as TaskStatusEnum;
  }
}
