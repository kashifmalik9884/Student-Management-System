package com.myProject.smsbackend.repository;

import com.myProject.smsbackend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentReposiory extends JpaRepository<Student, Long> {
}
