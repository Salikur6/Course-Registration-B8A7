
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import CourseCart from './components/CourseCart/CourseCart';
import Courses from './components/Courses/Courses';

function App() {

  // const [courseCart, setCourseCart] = useState([]);
  const [courseTitle, setCourseTitle] = useState([]);
  const [courseCredit, setCourseCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);


  const handleSelectBtn = (course) => {
    const { title, credit, price } = course;

    const findTitle = courseTitle.find(preTitle => preTitle === title);
    if (findTitle) {
      return toast.error('Course is already added')
    }

    if (creditRemaining < credit) {
      return toast.error(`You have only ${creditRemaining} Credit left`)
    }

    handleToast(course)

    const newCourseTitle = [...courseTitle, title];
    return setCourseTitle(newCourseTitle);

  }


  const handleToast = (course) => {
    const { title, credit, price } = course;

    const newCredit = courseCredit + credit;

    const courseCreditRemaining = creditRemaining - credit;

    if (creditRemaining < 0) {
      return toast.error('0 Credit Remaining')
    }

    console.log(courseCredit)
    if (courseCredit >= 20) {
      return toast.error('Credit limit Exceeded')
    }

    if (creditRemaining < credit) {
      return toast.error(`You have only ${creditRemaining} Credit left`)
    }

    setCourseCredit(newCredit)

    setCreditRemaining(courseCreditRemaining);


  }

  return (
    <div className='bg-[#F3F3F3]'>
      <div className='container mx-auto'>
        <div className='text-center mb-8 pt-12'>
          <h2 className='text-4xl font-bold '>Course Registration</h2>
        </div>

        <div className='grid grid-cols-4 gap-6'>
          <Courses handleSelectBtn={handleSelectBtn} className='col-span-3'></Courses>


          <CourseCart

            courseTitle={courseTitle}
            courseCredit={courseCredit}
            creditRemaining={creditRemaining}

          ></CourseCart>

          <div><Toaster /></div>
        </div>
      </div>
    </div>
  )
}

export default App
