package com.negen.repository;

import com.negen.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRespository extends JpaRepository<Student, Long> {

    List<Student> findByGradeAndClazz(String grade, String clazz);

    List<Student> findByNumContaining(String num);

    List<Student> findByNameContaining(String name);

}
