import React, { useEffect, useState } from 'react';
import {  Table } from 'react-bootstrap';
import './ServiceList.css';
import ServiceTable from './ServiceTable';

const ServiceList = () => {
   const [services, setServices] = useState([]);
   
   useEffect(() => {
      fetch("https://whispering-springs-56641.herokuapp.com/get-order")
         .then(res => res.json())
         .then(data => {
            setServices(data)
         })
   }, [])
   return (
      <>
         <h4 className="px-2">Service list</h4>
         <div className="py-2 px-2 bg-light">
         <Table responsive hover>
            <thead className="thead-dark">
               <tr>
                  <th >Name</th>
                  <th >Email</th>
                  <th >Project Title</th>
                  <th >Details</th>
                  <th >Status</th>
               </tr>
            </thead>
            <tbody>
                  {
             
                        services.map(service => <ServiceTable service={service} key={service._id} />)
                        
                     
               }
               
            </tbody>
         </Table>
         </div>
      </>
   );
};

export default ServiceList;