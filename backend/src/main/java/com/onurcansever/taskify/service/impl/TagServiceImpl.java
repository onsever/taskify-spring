package com.onurcansever.taskify.service.impl;

import com.onurcansever.taskify.dto.TagDto;
import com.onurcansever.taskify.entity.Tag;
import com.onurcansever.taskify.entity.Task;
import com.onurcansever.taskify.exception.TagNotFoundException;
import com.onurcansever.taskify.exception.TaskNotFoundException;
import com.onurcansever.taskify.repository.TagRepository;
import com.onurcansever.taskify.repository.TaskRepository;
import com.onurcansever.taskify.service.TagService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TagServiceImpl implements TagService {

    private final TaskRepository taskRepository;
    private final TagRepository tagRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public TagServiceImpl(TaskRepository taskRepository, TagRepository tagRepository, ModelMapper modelMapper) {
        this.taskRepository = taskRepository;
        this.tagRepository = tagRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public TagDto createTag(Long taskId, TagDto tagDto) {
        Task task = this.getTaskById(taskId);

        Tag tag = new Tag();
        tag.setTagName(tagDto.getTagName());
        task.getTags().add(tag);

        Tag savedTag = this.tagRepository.save(tag);

        return convertToDto(savedTag);
    }

    @Override
    public TagDto getTagById(Long taskId, Long tagId) {
        Task task = this.getTaskById(taskId);

        Tag taskTag = task.getTags().stream().filter(tag -> tag.getTagId().equals(tagId)).findFirst().orElseThrow(() -> new TagNotFoundException("Tag not found with id: " + tagId));

        return convertToDto(taskTag);
    }

    @Override
    public TagDto updateTag(Long taskId, Long tagId, TagDto tagDto) {
        Task task = this.getTaskById(taskId);

        Tag taskTag = task.getTags().stream().filter(tag -> tag.getTagId().equals(tagId)).findFirst().orElseThrow(() -> new TagNotFoundException("Tag not found with id: " + tagId));

        taskTag.setTagName(tagDto.getTagName());

        Tag updatedTag = this.tagRepository.save(taskTag);

        return convertToDto(updatedTag);
    }

    @Override
    public Set<TagDto> getAllTagsByTaskId(Long taskId) {
        Task task = this.getTaskById(taskId);

        Set<Tag> taskTags = this.taskRepository.findTagsByTaskId(taskId);

        return taskTags.stream().map(this::convertToDto).collect(Collectors.toSet());
    }

    @Override
    public void deleteTagById(Long taskId, Long tagId) {
        Task task = this.getTaskById(taskId);

        Tag taskTag = task.getTags().stream().filter(tag -> tag.getTagId().equals(tagId)).findFirst().orElseThrow(() -> new TagNotFoundException("Tag not found with id: " + tagId));

        task.getTags().remove(taskTag);

        this.tagRepository.delete(taskTag);
    }

    private TagDto convertToDto(Object object) {
        return modelMapper.map(object, TagDto.class);
    }

    private Object convertToEntity(Object object) {
        return modelMapper.map(object, Object.class);
    }

    private Task getTaskById(Long taskId) {
        return taskRepository.findById(taskId).orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + taskId));
    }
}
