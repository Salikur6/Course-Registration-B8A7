import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from 'react-icons/io5';
const Course = ({ course, handleSelectBtn }) => {
    const { img, title, details, price, credit } = course;
    // console.log(course)
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

            <div onClick={() => handleSelectBtn(course)} className='bg-[#2F80ED] cursor-pointer rounded-lg border text-center'>
                <button className=' py-2 text-lg text-white font-semibold '>Select</button>
            </div>

        </div>
    )
}

Course.propTypes = {
    course: PropTypes.object,
    handleSelectBtn: PropTypes.func,

}

export default Course;