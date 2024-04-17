package com.myProject.smsbackend.mapper;

import com.myProject.smsbackend.dto.Studentdto;
import com.myProject.smsbackend.entity.Student;

public class StudentMapper {

    public static Studentdto mapToStudentDto(Student student) {
        return new Studentdto(
                student.getName(),
                student.getFatherName(),
                student.getRollno(),
                student.getGrade()
        );
    }

    public static Student mapToStudent(Studentdto studentdto) {

        return new Student(
                studentdto.getRollno(),
                studentdto.getName(),
                studentdto.getFatherName(),
                studentdto.getGrade()
        );
    }
}
