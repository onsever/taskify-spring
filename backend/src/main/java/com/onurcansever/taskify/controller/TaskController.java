package com.onurcansever.taskify.controller;

import com.onurcansever.taskify.dto.TaskDto;
import com.onurcansever.taskify.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable Long id) {
        return new ResponseEntity<>(this.taskService.getTaskById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        return new ResponseEntity<>(this.taskService.getAllTasks(), HttpStatus.OK);
    }

    @PostMapping(value = {"", "/"})
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto) {
        return new ResponseEntity<>(this.taskService.createTask(taskDto), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<TaskDto> updateTask(@RequestBody TaskDto taskDto, @PathVariable Long id) {
        return new ResponseEntity<>(this.taskService.updateTask(taskDto, id), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteTaskById(@PathVariable Long id) {
        this.taskService.deleteTask(id);

        return new ResponseEntity<>(String.format("Task with id %d has been deleted successfully!", id), HttpStatus.NO_CONTENT);
    }
}
