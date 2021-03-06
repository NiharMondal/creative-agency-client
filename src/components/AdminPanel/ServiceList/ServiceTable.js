import React from 'react';
import {Form} from 'react-bootstrap'
const ServiceTable = ({ service }) => {
   
   return (
      <>
         <tr>
            <td>{ service.name}</td>
            <td>{ service.email}</td>
            <td>{ service.title}</td>
            <td>{ service.details}</td>
            <td>
               <Form.Control as="select">
                  <option name="pending" value="pending"> Pending</option>
                  <option name="ongoing" value="ongoing"> Ongoing</option>
                  <option name="done"  value="done"> Done</option>
               </Form.Control>
            </td>
         </tr>
      </>
   );
};

export default ServiceTable;