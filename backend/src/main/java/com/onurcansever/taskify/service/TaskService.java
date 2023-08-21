package com.onurcansever.taskify.service;

import com.onurcansever.taskify.dto.TaskDto;

import java.util.List;

public interface TaskService {

    TaskDto createTask(TaskDto taskDto);

    TaskDto updateTask(TaskDto taskDto, Long id);

    void deleteTask(Long id);

    TaskDto getTaskById(Long id);

    List<TaskDto> getAllTasks();

    List<TaskDto> getAllTasksByUserId(Long userId);
}
