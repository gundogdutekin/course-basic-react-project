import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)
  const [afterdelete, setAfterdelete] = useState(false)
  const fetchCourses = async () => {
    setLoading(true);
    try {
       const response = await axios.get('http://localhost:3004/courses');
         setCourses(response.data);
         setLoading(false);
    } catch (error) {
       setLoading(false);
    }
   
  }
  const setCourse=async()=>{
    setAfterdelete(false);
    fetchCourses();
  }
  const removeOnedelete = (id) => {
    setAfterdelete(true);
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  }
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      <h1>Kurslarım</h1>
      {
        afterdelete ? (<div><button className='button' onClick={setCourse}>Güncelle</button></div>):null
      }
      
      {loading ? 
        (<Loading/>
        ): (
        <Courses afterdelete={afterdelete} removeOnedelete={removeOnedelete} setCourse={setCourse} courses={courses}/>
      )}
     
    </div>
  );
}

export default App;
