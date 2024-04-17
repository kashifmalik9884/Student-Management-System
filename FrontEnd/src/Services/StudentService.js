import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/student";

export const listStudents = () => axios.get(REST_API_BASE_URL);

export const addStudent = (student) => axios.post(REST_API_BASE_URL, student);

export const getStudent = (rollno) => axios.get(REST_API_BASE_URL+'/'+rollno);

export const updateStudent = (rollno, student) => axios.put(REST_API_BASE_URL+'/'+rollno, student);

export const deleteStudent = (rollno) => axios.delete(REST_API_BASE_URL+'/'+rollno);