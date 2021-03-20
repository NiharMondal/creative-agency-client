import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import ServiceItem from './ServiceItem';
import { Spinner } from 'react-bootstrap';

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("http://localhost:4000/all-services")
         .then(res => res.json())
      .then(data=>setServices(data))
   },[])
   return (
      <div
         className="container py-5 
         text-center">
            <h5>Service We Provide</h5>
         <Grid container
            spacing={2}
            className="pt-4"
            justify="space-around">
            {
               services.length ?
                  
               services.map(service => <ServiceItem key={service.title} service={ service}/>): <Spinner animation="grow" variant="warning" />
            }
            
         </Grid>
      </div>
    
   );
};

export default Services;