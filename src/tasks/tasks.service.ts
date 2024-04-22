import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto copy';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks(query: any) {
    console.log(query);

    return this.tasks;
  }

  getTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  createTaks(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTaks(task: UpdateTaskDto) {
    console.log(task);
    return task;
  }

  deleteTaks() {
    return 'Eliminando tarea';
  }

  updateTaksStatus() {
    return 'actualizando estado de una tarea';
  }
}
