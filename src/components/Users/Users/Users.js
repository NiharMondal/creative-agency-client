import { Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Order from '../Order/Order';
import Usertopic from './Usertopic';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiHandbagFill, RiMessage2Fill} from 'react-icons/ri'
import './Users.css'
const Users = () => {
   let {path,url}= useRouteMatch()
   return (
      <Grid container >
         <Grid item md={3} className="sidebar">
            <ul>
               <li>
                  <NavLink exact
                     activeClassName="side_link" to={`${url}/order`} className="sidebar_link">
                        <AiOutlineShoppingCart/> Order
                     </NavLink>
               </li>
               <li>
                  <NavLink
                     activeClassName="side_link" to={`${url}/order-list`} className="sidebar_link">
                     <RiHandbagFill/> Order List
                  </NavLink>
               </li>
               <li>
                  
                  <NavLink
                     activeClassName="side_link" to={`${url}/review`} className="sidebar_link">
                     <RiMessage2Fill/> Review
                  </NavLink>
               </li>
            </ul>
         </Grid>
         <Grid item md={9}
            sm={12} xs={12}
            className="topic_id">
            
            <Switch>
               <Route exact path={path}>
                  <Order/>
               </Route>
               <Route path={`${path}/:topicId`}>
                  <Usertopic/>
               </Route>
            </Switch>
         </Grid>
      </Grid>
   );
};

export default Users;