import React, { useEffect, useState } from 'react'
import { addStudent, getStudent, updateStudent } from '../Services/StudentService'
import { useNavigate, useParams } from 'react-router-dom'
const StudentComponent = () => {

  const [rollno, setRollno] = useState('')
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [grade, setGrade] = useState('')

  const navigator = useNavigate();

  const { id } = useParams()

  const [errors, setErrors] = useState({
    name: '',
    fatherName: '',
    grade: ''
  })

  useEffect(() => {
    if (id) {
      getStudent(id).then((response) => {
        setName(response.data.name);
        setFatherName(response.data.fatherName);
        setGrade(response.data.grade);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])


  function updateStudentData(e) {
    e.preventDefault();

    if (validateForm()) {
      const student = { name, fatherName, grade }
      console.log(student)

      
        updateStudent(id, student).then((response) => {
          console.log(response.data)

          navigator('/students')
        }).catch(error => {
          console.error(error)
        })
    }


  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors }

    if (name.trim()) {
      errorsCopy.name = ''
    } else {
      errorsCopy.name = 'Name Is Required'
      valid = false
    }

    if (fatherName.trim()) {
      errorsCopy.fatherName = ''
    } else {
      errorsCopy.fatherName = 'Father Name Is Required'
      valid = false
    }


    if (grade.trim()) {
      errorsCopy.grade = ''
    } else {
      errorsCopy.grade = 'Grade Is Required'
      valid = false
    }

    setErrors(errorsCopy)

    return valid;
  }

  

  

  


  return (
    <div className='container'>

      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
        <h2 className='text-center'>Update Student</h2>
          <div className='card-body'>
          <form>
        <div className='form-group mb-3'>
          <label htmlFor="name" className='form-label'>Name</label>
          <input type="text" name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder='Enter Student Name' value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <div className='invalid-feedback'> {errors.name}</div>}
        </div>

        <div className='form-group mb-3'>
          <label htmlFor="fatherName" className='form-label'>Father Name</label>
          <input type="text" name="fatherName" className={`form-control ${errors.fatherName ? 'is-invalid' : ''}`} placeholder='Enter Student Father Name' value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
          {errors.fatherName && <div className='invalid-feedback'> {errors.fatherName}</div>}
        </div>
        <div className='form-group mb-3'>
          <label htmlFor="grade" className='form-label'>Grade</label>
          <input type="text" name="grade" className={`form-control ${errors.grade ? 'is-invalid' : ''}`} placeholder='Enter Student Grade' value={grade} onChange={(e) => setGrade(e.target.value)} />
          {errors.grade && <div className='invalid-feedback'> {errors.grade}</div>}
        </div>

        <button className='btn mb-3 bg-success bg-gradient text-white col-md-2 offset-md-5 offset-md-5' onClick={updateStudentData}>Submit</button>
      </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentComponent
