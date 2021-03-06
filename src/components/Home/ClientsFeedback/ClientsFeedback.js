import React, { useEffect, useState } from 'react';
import {Grid} from "@material-ui/core"
import FeedbackItem from './FeedbackItem';
import { Spinner } from 'react-bootstrap';
const ClientsFeedback = () => {
   const [feedback, setFeedback] = useState([])
   useEffect(() => {
      fetch("https://whispering-springs-56641.herokuapp.com/get-review")
         .then(res => res.json())
         .then(data => {
            setFeedback(data)
         });
   },[])
   return (
      <section className=" container py-5">
         <h4 className="mb-5 text-center">Clients <span className="text-success">Feedback</span></h4>
         <Grid container
            spacing={3}
            justify="space-around">
            {
               feedback.length ?
                  feedback.map(data => <FeedbackItem key={ data._id} sfeedback={data} />) : <Spinner animation="grow" variant="warning" />
            }
         </Grid>
         
      </section>
   );
};

export default ClientsFeedback;