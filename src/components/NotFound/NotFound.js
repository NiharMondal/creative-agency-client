import { Button } from 'react-bootstrap';
import React from 'react';
import {ImArrowLeft2} from 'react-icons/im'
import './NotFound.css'
import { useHistory } from 'react-router';
const NotFound = () => {
   const history = useHistory()
   const goback = () => {
      history.push('/')
   }
   return (
      <section
         className="not_found bg-light">
         <div className="shadow-lg child">
            <Button variant="danger"
               className="mb-3"
               onClick={goback}
            > <ImArrowLeft2 /> Go Back</Button>
            <h1>Sorry,page not found <span className="text-info">....</span></h1>
         </div>
      </section>
   );
};

export default NotFound;