package com.onurcansever.taskify.service.impl;

import com.onurcansever.taskify.dto.CommentDto;
import com.onurcansever.taskify.entity.Comment;
import com.onurcansever.taskify.entity.Task;
import com.onurcansever.taskify.exception.CommentNotFoundException;
import com.onurcansever.taskify.exception.TaskNotFoundException;
import com.onurcansever.taskify.repository.CommentRepository;
import com.onurcansever.taskify.repository.TaskRepository;
import com.onurcansever.taskify.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final TaskRepository taskRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository, TaskRepository taskRepository, ModelMapper modelMapper) {
        this.commentRepository = commentRepository;
        this.taskRepository = taskRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CommentDto createComment(Long taskId, CommentDto commentDto) {
        Task task = this.findTaskById(taskId);

        Comment comment = new Comment();
        comment.setContent(commentDto.getContent());
        comment.setTask(task);

        this.commentRepository.save(comment);

        return this.convertToDto(comment);
    }

    @Override
    public CommentDto getCommentById(Long taskId, Long commentId) {
        Task task = this.findTaskById(taskId);

        Comment comment = this.commentRepository.findById(commentId).orElseThrow(() -> new CommentNotFoundException("Comment not found with id: " + commentId + "."));

        if (!comment.getTask().getTaskId().equals(task.getTaskId())) {
            throw new CommentNotFoundException("Comment not found with id: " + commentId + " for task with id: " + taskId + ".");
        }

        return this.convertToDto(comment);
    }

    @Override
    public CommentDto updateComment(Long taskId, Long commentId, CommentDto commentDto) {
        Task task = this.findTaskById(taskId);

        Comment comment = this.commentRepository.findById(commentId).orElseThrow(() -> new CommentNotFoundException("Comment not found with id: " + commentId + "."));

        if (!comment.getTask().getTaskId().equals(task.getTaskId())) {
            throw new CommentNotFoundException("Comment not found with id: " + commentId + " for task with id: " + taskId + ".");
        }

        comment.setContent(commentDto.getContent());

        Comment updatedComment = this.commentRepository.save(comment);

        return this.convertToDto(comment);
    }

    @Override
    public List<CommentDto> getAllCommentsByTaskId(Long taskId) {
        List<Comment> comments = this.commentRepository.findAllByTask_TaskId(taskId);

        return comments.stream().map(this::convertToDto).toList();
    }

    @Override
    public void deleteCommentById(Long taskId, Long commentId) {
        Task task = this.findTaskById(taskId);

        Comment comment = this.commentRepository.findById(commentId).orElseThrow(() -> new CommentNotFoundException("Comment not found with id: " + commentId + "."));

        if (!comment.getTask().getTaskId().equals(task.getTaskId())) {
            throw new CommentNotFoundException("Comment not found with id: " + commentId + " for task with id: " + taskId + ".");
        }

        this.commentRepository.deleteById(commentId);
    }

    private CommentDto convertToDto(Object object) {
        return modelMapper.map(object, CommentDto.class);
    }

    private Object convertToEntity(Object object) {
        return modelMapper.map(object, Object.class);
    }

    private Task findTaskById(Long taskId) {
        return this.taskRepository.findById(taskId).orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + taskId + "."));
    }
}
