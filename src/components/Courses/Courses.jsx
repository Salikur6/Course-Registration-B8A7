import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleSelectBtn }) => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-3">
            {
                courses.map(course => <Course handleSelectBtn={handleSelectBtn} key={course.id} course={course}></Course>)
            }
        </div>
    )
}

Courses.propTypes = {
    handleSelectBtn: PropTypes.func
}

export default Courses;