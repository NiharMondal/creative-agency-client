import { Grid } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';

import './Footer.css';
const Footer = () => {
   return (
      <div className="Footer">
         <Grid container
            className="py-4 container">
            <Grid item md={6} xs={11} sm={11}>
               <h3>Let us handle your <br/> project, professionally !</h3>
               <p>With well written codes, well build amazing apps  for all platforms, mobile adnd web apps in general.</p>
            </Grid>
            <Grid
               item md={6}
               xs={11} sm={11}
               className="px-3"
            >
               <form>
                  <div className="form-group">
                     
                     <input type="email"
                        className="form-control"
                        id="exampleInputEmai
                        l1"
                        aria-describedby="em
                        ailHelp"
                        placeholder="Your 
                        email"
                     />
                  </div>
                  <div className="form-group">
                     
                     <input type="text"
                        className="form-control"
                        id="exampleInputEmai
                        l1"
                        aria-describedby="em
                        ailHelp"
                        placeholder="Your Name / Company's Name"
                     />
                  </div>
                  
                  <div className="form-group">
                     
                     <textarea
                        placeholder="Your message......"
                        className="form-control"
                        id="exampleFormControlTextarea1" name="" rows="4"></textarea>
                  </div>
                  <Button className="px-4"  variant="dark">
                     SEND
                  </Button>
               </form>
            </Grid>
         </Grid>
         <footer className="text-center pb-2">All Rights reserved to Nihar | { new Date().getFullYear()}</footer>
      </div>
   );
};

export default Footer;