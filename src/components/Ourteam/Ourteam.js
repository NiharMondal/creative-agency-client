import React from 'react';
import { Button } from 'react-bootstrap';
import { ImArrowLeft2 } from 'react-icons/im'
import { useHistory } from 'react-router';

const Ourteam = () => {
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
         <h1>Comming soon <span className="text-info">....</span></h1>
      </div>
   </section>
   );
};

export default Ourteam;