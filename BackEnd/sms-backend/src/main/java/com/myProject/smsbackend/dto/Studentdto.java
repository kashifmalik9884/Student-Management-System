package com.myProject.smsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Studentdto {
    private String name;
    private String fatherName;
    private Long rollno;
    private String grade;
}
