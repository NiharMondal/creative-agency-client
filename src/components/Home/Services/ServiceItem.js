import { Grid } from '@material-ui/core';
import React from 'react';
import {  useHistory } from 'react-router';
import './ServiceItem.css'
const ServiceItem = ({ service }) => {
   const history = useHistory()
   const handleUser = () => {
      history.push('/dashboard')
   }  
   return (
      <>
         <Grid item md={4} sm={11} xs={11}>
         <section
            onClick={handleUser}
            className="service_part ">
            <img src={`data:image/png;base64, ${service.image.img}`} alt="" />
            <h4>{service.title}</h4>
            <p>{ service.description}</p>
         </section>
         
      </Grid>
      </>
   );
};

export default ServiceItem;
