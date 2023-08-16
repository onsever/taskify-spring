package com.onurcansever.taskify.controller;

import com.onurcansever.taskify.dto.CommentDto;
import com.onurcansever.taskify.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{taskId}/comments")
    public ResponseEntity<List<CommentDto>> getAllCommentsByTaskId(@PathVariable Long taskId) {
        return new ResponseEntity<>(this.commentService.getAllCommentsByTaskId(taskId), HttpStatus.OK);
    }

    @GetMapping("/{taskId}/comments/{commentId}")
    public ResponseEntity<CommentDto> getCommentById(@PathVariable Long taskId, @PathVariable Long commentId) {
        return new ResponseEntity<>(this.commentService.getCommentById(taskId, commentId), HttpStatus.OK);
    }

    @PostMapping("/{taskId}/comments")
    public ResponseEntity<CommentDto> createComment(@PathVariable Long taskId, @RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(this.commentService.createComment(taskId, commentDto), HttpStatus.CREATED);
    }

    @PutMapping("/{taskId}/comments/{commentId}")
    public ResponseEntity<CommentDto> updateComment(@PathVariable Long taskId, @PathVariable Long commentId, @RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(this.commentService.updateComment(taskId, commentId, commentDto), HttpStatus.OK);
    }

    @DeleteMapping("/{taskId}/comments/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable Long taskId, @PathVariable Long commentId) {
        this.commentService.deleteCommentById(taskId, commentId);

        return new ResponseEntity<>(String.format("Comment with id %d has been deleted successfully!", commentId), HttpStatus.NO_CONTENT);
    }
}
