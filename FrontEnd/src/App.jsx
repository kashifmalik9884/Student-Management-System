import ListStudentComponent from './components/ListStudentComponent'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentComponent from './components/StudentComponent'
import UpdateStudentComponent from './components/UpdateStudentComponent'

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<ListStudentComponent />}></Route>
            <Route path='/students' element={<ListStudentComponent />}></Route>

            <Route path='/addStudent' element={ <StudentComponent/>}></Route>

            <Route path='/editStudent/:id' element={<UpdateStudentComponent/>}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
