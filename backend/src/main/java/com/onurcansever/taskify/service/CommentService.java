package com.onurcansever.taskify.service;

import com.onurcansever.taskify.dto.CommentDto;

import java.util.List;

public interface CommentService {

    CommentDto createComment(Long taskId, CommentDto commentDto);

    CommentDto getCommentById(Long taskId, Long commentId);

    CommentDto updateComment(Long taskId, Long commentId, CommentDto commentDto);

    List<CommentDto> getAllCommentsByTaskId(Long taskId);

    void deleteCommentById(Long taskId, Long commentId);
}
