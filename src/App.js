import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)
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
 
  const removeOnedelete = (id) => {
    
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  }
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      <h1>Kurslarım</h1>
     
      
      {loading ? 
        (<Loading/>
        ): ( 
        courses.length===0 ? (<div><h2>Hiç Kursunuz Kalmadı</h2><button className='button' onClick={fetchCourses}>Güncelle</button></div>):
        <Courses  removeOnedelete={removeOnedelete} courses={courses}/>
      )}
     
    </div>
  );
}

export default App;
