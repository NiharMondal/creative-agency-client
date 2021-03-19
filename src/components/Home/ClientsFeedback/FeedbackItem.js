import { Grid ,Card} from '@material-ui/core';
import React from 'react';
import './FeedbackItem.css'

const FeedbackItem = ({ sfeedback }) => {
   // const customer = [customer1, customer2, customer3]
   
   return (
      <Grid item md={4} sm={6} xs={12}>
         <Card className="p-3 mb-3 card">
            <div className="d-flex">
               <img className="img" src={sfeedback ? sfeedback.image : "avator"} alt="" />
               <div>
                  <h5>{sfeedback.name}</h5>
                  <p>{sfeedback.position }</p>
               </div>
               
            </div>
            <p>{ sfeedback.description}</p>
         </Card>
      </Grid>
   );
};

export default FeedbackItem;