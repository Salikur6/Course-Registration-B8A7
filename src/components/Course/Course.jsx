import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from 'react-icons/io5';
const Course = ({ course }) => {
    const { img, title, details, price, credit } = course;
    console.log(course)
    return (
        <div className='p-4 bg-white rounded-xl'>
            <figure className='mb-4'>
                <img className='w-full' src={img} alt={'image of ' + title} />
            </figure>
            <h3 className='text-lg font-semibold mb-3'>{title}</h3>
            <p className='text-sm text-[#1c1b1b99]'>{details}</p>
            <div className='flex items-center justify-between'>
                <div className='mt-4 mb-6 flex'>
                    <FiDollarSign className='text-2xl mr-3'></FiDollarSign>
                    <p className='font-medium text-[#1c1b1b99]'>Price: {price}</p>
                </div>

                <div className='flex'>
                    <IoBookOutline className='text-2xl mr-3'></IoBookOutline>
                    <p className='font-medium text-[#1c1b1b99]'>Credit: {credit}hr</p>
                </div>
            </div>
        </div>
    )
}

Course.propTypes = {
    course: PropTypes.object,
}

export default Course;