package com.onurcansever.taskify.service;

import com.onurcansever.taskify.dto.TagDto;

import java.util.List;
import java.util.Set;

public interface TagService {

    TagDto createTag(Long taskId, TagDto tagDto);

    TagDto getTagById(Long taskId, Long tagId);

    TagDto updateTag(Long taskId, Long tagId, TagDto tagDto);

    Set<TagDto> getAllTagsByTaskId(Long taskId);

    void deleteTagById(Long taskId, Long tagId);

}
