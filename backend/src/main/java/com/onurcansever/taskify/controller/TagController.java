package com.onurcansever.taskify.controller;

import com.onurcansever.taskify.dto.TagDto;
import com.onurcansever.taskify.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/tasks")
public class TagController {

    private final TagService tagService;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("/{taskId}/tags")
    public ResponseEntity<Set<TagDto>> getAllTagsByTaskId(@PathVariable Long taskId) {
        return new ResponseEntity<>(this.tagService.getAllTagsByTaskId(taskId), HttpStatus.OK);
    }

    @GetMapping("/{taskId}/tags/{tagId}")
    public ResponseEntity<TagDto> getTagById(@PathVariable Long taskId, @PathVariable Long tagId) {
        return new ResponseEntity<>(this.tagService.getTagById(taskId, tagId), HttpStatus.OK);
    }

    @PostMapping("/{taskId}/tags")
    public ResponseEntity<TagDto> createTag(@PathVariable Long taskId, @RequestBody TagDto tagDto) {
        return new ResponseEntity<>(this.tagService.createTag(taskId, tagDto), HttpStatus.CREATED);
    }

    @PutMapping("/{taskId}/tags/{tagId}")
    public ResponseEntity<TagDto> updateTag(@PathVariable Long taskId, @PathVariable Long tagId, @RequestBody TagDto tagDto) {
        return new ResponseEntity<>(this.tagService.updateTag(taskId, tagId, tagDto), HttpStatus.OK);
    }

    @DeleteMapping("/{taskId}/tags/{tagId}")
    public ResponseEntity<String> deleteTagById(@PathVariable Long taskId, @PathVariable Long tagId) {
        this.tagService.deleteTagById(taskId, tagId);

        return new ResponseEntity<>("Tag deleted successfully", HttpStatus.OK);
    }
}
