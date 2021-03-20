import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [user,setUser]=useState({})
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
        <Header/>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
