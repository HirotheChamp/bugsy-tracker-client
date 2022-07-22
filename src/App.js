import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from './components/Sidebar';

import Reports from './views/Reports.jsx';

import Support from './views/Support';
import Home from './views/Home';
import Login from './views/Login';
import Registration from './views/Registration';
import './App.css'




    
function App() {
 
  return (

    <BrowserRouter>
     <Sidebar/>
    
     <Switch>

    
    
   
       <Route path='/' exact component={Home} />  
        <Route path='/reports' component={Reports}/>
      <Route path='/Support' component={Support}/>

       <Route path='/register'>
      <Registration/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>  
    </Switch>

    </BrowserRouter>

    
  );
}
    
export default App;
