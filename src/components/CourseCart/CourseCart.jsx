import PropTypes from 'prop-types';
const CourseCart = ({ courseTitle, courseCredit, creditRemaining, coursePrice }) => {
    // console.log(courseTitle)



    return (
        <div>

            <div className="bg-white p-6">
                <h3 className="text-lg font-bold text-[#2F80ED]  mb-4">Credit Hour Remaining {creditRemaining} hr</h3>
                <hr className="bg-[#1c1b1b99]" />
                <h3 className="text-xl font-bold mt-4 mb-5">Course Name</h3>

                {courseTitle.map((title, i) => <p key={i} className="text-[#1c1b1b99] mb-6">{i += 1} {title} </p>)}


                <hr className="bg-[#1c1b1b99]" />

                <p className="font-medium text-[#1c1b1b99] my-4">Total Credit Hour : {courseCredit}</p>

                <hr className="bg-[#1c1b1b99]" />

                <p className="font-semibold text-[#1c1b1b99] mt-4">Total Price : {coursePrice} USD</p>

            </div>

        </div>
    )
}

CourseCart.propTypes = {
    courseCart: PropTypes.array,
    courseTitle: PropTypes.array,
    count: PropTypes.number,
    courseCredit: PropTypes.number,
    creditRemaining: PropTypes.number,
    coursePrice: PropTypes.number,
}
export default CourseCart;