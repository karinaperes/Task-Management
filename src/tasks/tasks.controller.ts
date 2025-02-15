import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    const task = await this.tasksService.getTaskById(Number(id));
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  @Post()
  async createTask(
    @Body() data: { title: string; content?: string },
  ): Promise<Task> {
    return this.tasksService.createTask(data);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() data: { title?: string; content?: string; completed?: boolean },
  ): Promise<Task> {
    return this.tasksService.updateTask(Number(id), data);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(Number(id));
  }
}
