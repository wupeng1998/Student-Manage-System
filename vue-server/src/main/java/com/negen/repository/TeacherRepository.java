package com.negen.repository;

import com.negen.entity.Teacher;
import com.negen.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    List<Teacher> findByNumContaining(String num);

    List<Teacher> findByNameContaining(String name);
}