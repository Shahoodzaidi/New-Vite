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
         
        
            <Route exact  path='/Health' key='Health ' element={ <News  category="Health"  /> } >
           
            </Route>
            <Route exact  path='' key=' ' element={ <News category="Health" /> } >
           
            </Route>
            <Route exact  path='/General' key='General ' element={ <News category="General" /> } >
           
            </Route>
            <Route exact  path='/Sports' key='Sports' element={  <News category="Sports" /> } >
          
            </Route>
            <Route exact  path='/Science' key='Science' element={ <News category="Science" /> } >
           
            </Route>
       </Routes>
     
        
    </Router>
 
   </div>
  )
}

export default App
