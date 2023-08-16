package com.onurcansever.taskify.dto;

import com.onurcansever.taskify.utils.TaskPriority;
import com.onurcansever.taskify.utils.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public final class TaskDto {
        private Long taskId;

        private String title;

        private String description;

        private LocalDateTime dueDate;

        private TaskPriority priority;

        private TaskStatus status;
}
