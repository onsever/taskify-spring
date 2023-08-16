package com.onurcansever.taskify.service.impl;

import com.onurcansever.taskify.dto.TaskDto;
import com.onurcansever.taskify.entity.Task;
import com.onurcansever.taskify.entity.User;
import com.onurcansever.taskify.exception.TaskNotFoundException;
import com.onurcansever.taskify.exception.UserNotFoundException;
import com.onurcansever.taskify.repository.TaskRepository;
import com.onurcansever.taskify.repository.UserRepository;
import com.onurcansever.taskify.security.CustomUserDetails;
import com.onurcansever.taskify.service.TaskService;
import com.onurcansever.taskify.utils.TaskStatus;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private final UserRepository userRepository;
    private final TaskRepository taskRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public TaskServiceImpl(UserRepository userRepository, TaskRepository taskRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.taskRepository = taskRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = new Task();
        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());
        task.setPriority(taskDto.getPriority());
        task.setStatus(TaskStatus.TODO);
        task.setDueDate(taskDto.getDueDate());
        task.setUser(this.getCurrentAuthenticatedUser());

        this.taskRepository.save(task);

        return this.convertToDto(task);
    }

    @Override
    public TaskDto updateTask(TaskDto taskDto, Long id) {
        Task existingTask = this.taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException("Task with id: " + id + " not found"));

        existingTask.setTitle(taskDto.getTitle());
        existingTask.setDescription(taskDto.getDescription());
        existingTask.setPriority(taskDto.getPriority());
        existingTask.setStatus(taskDto.getStatus());
        existingTask.setDueDate(taskDto.getDueDate());

        this.taskRepository.save(existingTask);

        return this.convertToDto(existingTask);
    }

    @Override
    public void deleteTask(Long id) {
        Task existingTask = this.taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException("Task with id: " + id + " not found"));

        this.taskRepository.delete(existingTask);
    }

    @Override
    public TaskDto getTaskById(Long id) {
        Task existingTask = this.taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException("Task with id: " + id + " not found"));

        return this.convertToDto(existingTask);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        List<Task> tasks = this.taskRepository.findAll();

        return tasks.stream().map(this::convertToDto).toList();
    }

    private TaskDto convertToDto(Object object) {
        return modelMapper.map(object, TaskDto.class);
    }

    private Object convertToEntity(Object object) {
        return modelMapper.map(object, Object.class);
    }

    /**
     * Get current authenticated user from security context
     * @return User
     */
    private User getCurrentAuthenticatedUser() {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Long authenticatedUserId = userDetails.getUserId();

        return this.userRepository.findById(authenticatedUserId).orElseThrow(() -> new UserNotFoundException("User", authenticatedUserId));
    }
}
