import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import {UserContext} from '../../../App'
import OrderDetails from './OrderDetails';
const OrderList = () => {
   const [user] = useContext(UserContext);
   const [myOrder, setMyOrder] = useState([])
   console.log(myOrder);
   useEffect(() => {
      fetch("http://localhost:4000/my-order", {
         method: 'get',
         headers: { 'content-type': 'application/json',email: user.email },
      })
         .then(res => res.json())
         .then(data=>setMyOrder(data))
   },[])
   return (
      <>
         <h4>Order list</h4>
         <section className="py-5 px-3 bg-light">
         <Grid container
            spacing={2}
            justify="space-around"
         >
               {
                  myOrder.length?
                  myOrder.map(order => <OrderDetails key={order._id} order={order} />)
                  : <Spinner animation="border" variant="warning" />
            }
         </Grid>
         </section>
         
      </>
   );
};

export default OrderList;