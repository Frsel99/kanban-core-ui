export enum TaskStatusEnum {
  PENDING = 'Pending',
  WORKING_ON = 'Working On',
  COMPLETED = 'Completed',
}

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  status: TaskStatusEnum;
  editing: boolean;
}
