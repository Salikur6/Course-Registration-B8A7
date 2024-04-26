
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'

function App() {


  return (
    <div className='bg-[#F3F3F3]'>
      <div className='container mx-auto'>
        <div className='text-center mb-8 pt-12'>
          <h2 className='text-4xl font-bold '>Course Registration</h2>
        </div>

        <div className='grid grid-cols-4 gap-6'>
          <Courses className='col-span-3'></Courses>
          <CourseCart></CourseCart>
        </div>
      </div>
    </div>
  )
}

export default App
