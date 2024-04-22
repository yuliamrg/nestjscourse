import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto copy';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('/tasks')
export class TaskController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  @ApiOperation({summary: 'Get all tasks'})
  @ApiResponse({ status: 200, description: 'return all tasks' })
  @ApiResponse({ status: 403, description: 'Forbbiden' })
  getAllTask(@Query() query: any) {
    return this.tasksService.getTasks(query);
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({summary: 'Create a task'})
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTaks(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTaks(task);
  }

  @Delete()
  removeTask() {
    return this.tasksService.deleteTaks();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaksStatus();
  }
}
