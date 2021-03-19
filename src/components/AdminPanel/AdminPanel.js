import { Grid } from '@material-ui/core';
import React from 'react';
import { CgPlayListCheck } from "react-icons/cg";
import { FiUserPlus } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import './AdminPanel.css';
import ServiceList from './ServiceList/ServiceList';
import Topic from './Topic';
const AdminPanel = () => {
   let {path,url}= useRouteMatch()
   return (
      <Grid container >
         <Grid item md={3} className="sidebar">
            <ul>
               <li>
                  <NavLink exact
                     activeClassName="side_link" to={`${url}/service-list`} className="sidebar_link"> <CgPlayListCheck className="mr-1"/> Service List</NavLink>
               </li>
               <li>
                  <NavLink activeClassName="side_link" to={`${url}/add-service`} className="sidebar_link"><GrAdd className="mr-1"/>Add Service</NavLink>
               </li>
               <li>
                  
                  <NavLink activeClassName="side_link" to={`${url}/make-admin`} className="sidebar_link"><FiUserPlus className="mr-1"/>Make Admin</NavLink>
               </li>
            </ul>
         </Grid>
         <Grid item md={9}
            sm={12} xs={12}
            className="topic_id">
            <Switch>
               <Route exact path={path}>
                  <ServiceList/>
               </Route>
               <Route path={`${path}/:topicId`}>
                  <Topic/>
               </Route>
            </Switch>
         </Grid>
      </Grid>
   );
};

export default AdminPanel;