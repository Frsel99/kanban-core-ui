export enum TaskStatusEnum {
  PENDING = 'pending',
  WORKING_ON = 'working on',
  COMPLETED = 'completed',
}

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  status: TaskStatusEnum;
  editing: boolean;
}
