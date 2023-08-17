package com.onurcansever.taskify.repository;

import com.onurcansever.taskify.entity.Tag;
import com.onurcansever.taskify.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query("SELECT t.tags FROM Task t WHERE t.taskId = :taskId")
    Set<Tag> findTagsByTaskId(Long taskId);
}
