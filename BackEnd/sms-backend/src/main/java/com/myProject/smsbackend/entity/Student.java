package com.myProject.smsbackend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student {

    @Id

    @Column(name = "roll_no")
    private Long rollno;

    private String name;

    @Column(name = "father_name")
    private String fatherName;


    private String grade;


}
