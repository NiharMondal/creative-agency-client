import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

export const UserContext = createContext();
function App() {
  const [user,setUser]=useState({})
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
