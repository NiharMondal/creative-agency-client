import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import './Order.css'
const Order = () => {
   const [alert,setAlert]=useState(false)
   const [order, setOrder] = useState({});
   const handleBlur = (e) => {
      const newOrder = { ...order }
      newOrder[e.target.name] = e.target.value;
      setOrder(newOrder)
   }
   const handleOrder = (e) => {
      e.preventDefault();
      const name = order.name;
      const email = order.email;
      const details = order.details;
      const title = order.title;
      const price = order.price;
      fetch("http://localhost:4000/add-order", {
         method: 'post',
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify({ name:name,email:email,details:details,title:title,price:price})
      })
         .then(res => res.json())
         .then(data => {
            setAlert(data)
         })


   }
   return (
      <>
         <h4 className="px-3">Order</h4>
            <section className="wrapper py-4 px-3">
         <div className="form_wrapper">
               <form onSubmit={handleOrder}>
                  {
                     alert &&
                     <Alert
                        className="text-center"
                        variant="success"
                        onClose={() => setAlert(false)} dismissible
                     >
                        Your order has been stored successfully
                     </Alert>
                  }
               <div className="form-group">
                  <input type="text"
                        name="name"
                        onBlur={handleBlur}
                        placeholder="Your name / company's name"
                        
                        className="form-control col-md-6"
                        required
                  />
               </div>
               <div className="form-group">
                  <input type="email"
                        name="email"
                        onBlur={handleBlur}
                     placeholder="Your email address"
                        className="form-control col-md-6"
                        required
                  />
               </div>
               <div className="form-group">
                     <input type="text"
                        onBlur={handleBlur}
                     placeholder="Project title"
                     name="title"
                        className="form-control col-md-6"
                        required
                  />
               </div>
               <div className="form-group">
                  <textarea type="text"
                        rows="4"
                        onBlur={handleBlur}
                     placeholder="Project details"
                     name="details"
                     className="form-control col-md-6"
                     required
                  />
               </div>
               <div className="form-row pl-1">
                     <input type="text"
                        onBlur={handleBlur}
                     name="price"
                     placeholder="Price"
                     className="form-control col-md-3 px-3"
                     required
                  />
                  <div
                     className="custom-file col-md-3"
                  >
                        <input type="file"
                           onBlur={handleBlur}
                        className="inputfile custom-file-input"
                     />
                     <label
                        class="custom-file-label" for="customFile">
                           <AiOutlineCloudUpload/>
                           Upload project file
                        </label>
                  </div>
               </div>
               <br/>
                  <Button
                     type="submit"
                     variant="dark"
                     className="px-5">Send
                  </Button>
                  
            </form>
            
         </div>
      </section>
      </>
   );
};

export default Order;