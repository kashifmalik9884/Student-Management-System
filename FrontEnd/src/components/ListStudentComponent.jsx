import React,{useEffect, useState} from 'react'
import { listStudents } from '../Services/StudentService/'
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../Services/StudentService';
const ListStudentComponent = () => {

   const [students, setStudents] = useState([]);
   const navigator = useNavigate();
   
   useEffect(()=> {
    listAllStudents();
   }, [])

   function listAllStudents(){
    listStudents().then((response)=>{
        setStudents(response.data);
    }).catch(error=>{
        console.error(error);
    })
   }

   function addNewStudent(){
    navigator('/addStudent')
   }

   function updateStudent(rollno){
    navigator(`/editStudent/${rollno}`)
   }

   function removeStudent(rollno){
    console.log(rollno);

    deleteStudent(rollno).then((response)=>{
        listAllStudents();
    }).catch(error =>{
        console.error(error);
    })
   }

  return (
    <div className='container'>
      
      <h2 className='text-center'>List Of Students</h2>
      <button className='btn mb-3 bg-success bg-gradient text-white' onClick={addNewStudent}>Add Student</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Grade</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map(student => 
                    <tr key={student.rollno}>
                        <td>{student.rollno}</td>
                        <td>{student.name}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.grade}</td>
                        <td><button className='btn bg-success bg-gradient text-white' onClick={()=> updateStudent(student.rollno)}>Update</button>
                            <button className='btn ms-2 bg-danger bg-gradient text-white' onClick={()=>removeStudent(student.rollno)}>Delete</button>
                        </td>
                    </tr>
                )
            }
            
        </tbody>
      </table>
    </div>
  )
}

export default ListStudentComponent
