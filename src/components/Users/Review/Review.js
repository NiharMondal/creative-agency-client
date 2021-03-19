import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const Review = () => {
   const [review, setReview] = useState({});
   const [alert,setAlert]=useState(false)
   const handleBlur = (e) => {
      const newReview = { ...review }
      newReview[e.target.name] = e.target.value;
      setReview(newReview)
   }
   const handleReview = (e) => {
      const name = review.name;
      const position = review.position;
      const description = review.description;
      e.preventDefault()
      fetch("http://localhost:4000/add-review", {
         method: 'post',
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify({name: name,position: position, description:description})
      })
         .then(res => res.json())
         .then(data => {
            setAlert(data)
         })
      e.target.reset()
   }
   return (
      <>
         <h4 className="px-3">Review</h4>
         <div className="wrapper py-5 px-3">
            <div className="form-wrapper">
            <form onSubmit={handleReview}>
               {alert && <Alert
                  variant="success"
                  className="text-center"
               >
                  Review added successfully
                  </Alert>
               }
               <div className="form-group">
                  <input type="text"
                     name="name"
                     placeholder="Your name"
                     className="form-control col-md-6"
                     onBlur={handleBlur}
                     required
                  />
               </div>
               <div className="form-group">
                  <input type="text"
                     name="position"
                     placeholder="Company's name,Designation"
                     className="form-control col-md-6"
                     onBlur={handleBlur}
                     required
                  />
               </div>
               <div className="form-group">
                  <textarea type="text"
                     rows="4"
                     placeholder="Description...."
                     name="description"
                     className="form-control col-md-6"
                     onBlur={handleBlur}
                     required
                     />
                  </div>
                  <Button type="submit"
                  className="px-4"
                  variant="dark">
                  Submit
                  </Button>
               </form>
            </div>
         </div>
      </>
   );
};

export default Review;
