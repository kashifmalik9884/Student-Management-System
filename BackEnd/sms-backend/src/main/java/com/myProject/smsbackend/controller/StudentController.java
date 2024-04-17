package com.myProject.smsbackend.controller;

import com.myProject.smsbackend.dto.Studentdto;
import com.myProject.smsbackend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/student")
@AllArgsConstructor
public class StudentController {

    private StudentService studentService;

    @PostMapping
    public ResponseEntity<Studentdto> addStudent(@RequestBody Studentdto studentdto) {
        Studentdto savedStudent = studentService.createStudent(studentdto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Studentdto> getStudentById(@PathVariable("id") Long rollno) {
        Studentdto studentdto = studentService.getStudentById(rollno);
        return ResponseEntity.ok(studentdto);
    }
    @GetMapping
    public  ResponseEntity<List<Studentdto>> getAllStudents() {
        List<Studentdto> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }
    @PutMapping("{id}")
    public ResponseEntity<Studentdto> updateStudent(@PathVariable("id") Long rollno, @RequestBody Studentdto updatedStudent) {
        Studentdto studentdto = studentService.updateStudent(rollno, updatedStudent);
        return ResponseEntity.ok(studentdto);
    }
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteStudent(@PathVariable("id") Long rollno) {
        studentService.deleteStudent(rollno);
        return ResponseEntity.ok("Student deleted Successfully");
    }
}
