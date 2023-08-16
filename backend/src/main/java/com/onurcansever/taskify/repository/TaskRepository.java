package com.onurcansever.taskify.repository;

import com.onurcansever.taskify.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
