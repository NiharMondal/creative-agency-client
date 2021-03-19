import React from 'react';
import { Grid } from '@material-ui/core'
import frame from '../../../images/logos/Frame.png'

import './Main.css'
import { Button } from 'react-bootstrap';
const Main = () => {
   return (
      <>
      <Grid container justify="center" className="container py-5">
         <Grid item md={6} sm={12} xs={12}>
               <section
                  className="main_section">
               <h1>
                  Let's Grow Your <br />Brand To The <br />Next Level
               </h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aliquam! Nemo recusandae quasi explicabo consequuntur vel exercitationem dolores nam. Odio veritatis fugiat omnis cum, eaque sed at consequatur, praesentium voluptates ex adipisci incidunt autem quos.
               </p>
               <Button variant="dark">
                  Hire Us
               </Button>
            </section>
         </Grid>
         <Grid item md={6}>
            <div className="img_section">
               <img className="frame"
                  src={frame} alt=""
               />
            </div>
         </Grid>
         </Grid>
      </> 
   );
};

export default Main;