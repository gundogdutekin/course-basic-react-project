import Course from "./Course";

function Courses({courses,removeOnedelete}) {
    return ( <div className="container">
        {courses.map((course) => (
            <Course removeOnedelete={removeOnedelete} key={course.id} {...course} />
        ))}
    </div> );
}

export default Courses;