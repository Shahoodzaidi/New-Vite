import Navbar from '../src/Navbar.jsx'
import News from '../src/New.jsx'
import './App.css'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";




function App() {
  
  return (
    <div>
     
      <Navbar/>
    <Router>
   
       <Routes>
         
        
            <Route exact id='anime' path='/Health' key='Health ' element={ <News  category="Health"  /> } >
           
            </Route>
            <Route exact  id='anime'  path='' key=' ' element={ <News category="Health" /> } >
           
            </Route>
            <Route exact id='anime' path='/General' key='General ' element={ <News category="General" /> } >
           
            </Route>
            <Route exact id='anime' path='/Sports' key='Sports' element={  <News category="Sports" /> } >
          
            </Route>
            <Route exact id='anime'  path='/Science' key='Science' element={ <News category="Science" /> } >
           
            </Route>
       </Routes>
     
        
    </Router>
 
   </div>
  )
}

export default App
