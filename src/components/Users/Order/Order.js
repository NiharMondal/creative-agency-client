import React from 'react';
import { Button } from 'react-bootstrap';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import './Order.css'
const Order = () => {
   return (
      <>
         <h4 className="px-3">Order</h4>
            <section className="wrapper py-4 px-3">
         <div className="form_wrapper">
            <form>
               <div className="form-group">
                  <input type="text"
                     name="name"
                     placeholder="Your name / company's name"
                        className="form-control col-md-6"
                        required
                  />
               </div>
               <div className="form-group">
                  <input type="email"
                     name="email"
                     placeholder="Your email address"
                        className="form-control col-md-6"
                        required
                  />
               </div>
               <div className="form-group">
                  <input type="text"
                     placeholder="Project title"
                     name="title"
                        className="form-control col-md-6"
                        required
                  />
               </div>
               <div className="form-group">
                  <textarea type="text"
                     rows="4"
                     placeholder="Project details"
                     name="details"
                     className="form-control col-md-6"
                     required
                  />
               </div>
               <div className="form-row pl-1">
                  <input type="text"
                     name="price"
                     placeholder="Price"
                     className="form-control col-md-3 px-3"
                     required
                  />
                  <div
                     className="custom-file col-md-3"
                  >
                     <input type="file"
                        className="inputfile custom-file-input"
                        required
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