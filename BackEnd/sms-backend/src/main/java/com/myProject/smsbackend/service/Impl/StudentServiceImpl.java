package com.myProject.smsbackend.service.Impl;

import com.myProject.smsbackend.dto.Studentdto;
import com.myProject.smsbackend.entity.Student;
import com.myProject.smsbackend.mapper.StudentMapper;
import com.myProject.smsbackend.repository.StudentReposiory;
import com.myProject.smsbackend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {
    private StudentReposiory studentReposiory;
    @Override
    public Studentdto createStudent(Studentdto studentdto) {
        Student student = StudentMapper.mapToStudent(studentdto);
        Student savedStudent = studentReposiory.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public Studentdto getStudentById(Long rollno) {
        Student student = studentReposiory.findById(rollno)
                .orElseThrow(() -> new RuntimeException("Student not found With Given Roll No "+rollno));

        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<Studentdto> getAllStudents() {
        List<Student> students= studentReposiory.findAll();
        return students.stream().map(StudentMapper::mapToStudentDto)
                .collect(Collectors.toList());
    }

    @Override
    public Studentdto updateStudent(Long rollno, Studentdto updatedStudent) {

        Student student = studentReposiory.findById(rollno)
                .orElseThrow(() -> new RuntimeException("Student not found With Given Roll No " + rollno));
        student.setName(updatedStudent.getName());
        student.setFatherName(updatedStudent.getFatherName());
        student.setGrade(updatedStudent.getGrade());

        Student updatedStudentObject =  studentReposiory.save(student);
        return StudentMapper.mapToStudentDto(updatedStudentObject);
    }

    @Override
    public void deleteStudent(Long rollno) {

        Student student = studentReposiory.findById(rollno)
                .orElseThrow(() -> new RuntimeException("Student not found With Given Roll No "+rollno));
        studentReposiory.delete(student);
    }
}
