import { Grid } from '@material-ui/core';
import React from 'react';
import avatar from './avatar.png'
import './OderDetails.css'
const OrderDetails = ({order}) => {
   return (
      <Grid item md={4} sm={6} xs={12}>
         <section
            className=" order_list shadow-sm bg-white">
            
            <img src={avatar} alt=""/>
            <h4>{order.title}</h4>
            <p> {order.details} </p>
         </section>
   </Grid>
   );
};

export default OrderDetails;