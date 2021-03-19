import React from 'react';
import { useParams } from 'react-router';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ServiceList from './ServiceList/ServiceList';

const Topic = () => {
   let {topicId}=useParams()
   return (
      <div>
         {
            topicId==="add-service"?<AddService/>:topicId==="make-admin"?<MakeAdmin/>: <ServiceList/>
         }
      </div>
   );
};

export default Topic;