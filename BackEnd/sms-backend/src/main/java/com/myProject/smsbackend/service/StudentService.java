package com.myProject.smsbackend.service;

import com.myProject.smsbackend.dto.Studentdto;

import java.util.List;

public interface StudentService {
    Studentdto createStudent(Studentdto dto);
    Studentdto getStudentById(Long rollno);
    List<Studentdto> getAllStudents();
    Studentdto updateStudent(Long rollno, Studentdto updatedStudent);
    void deleteStudent(Long rollno);
}
