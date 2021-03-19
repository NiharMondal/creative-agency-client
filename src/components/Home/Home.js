import React from 'react';
import './Home.css'
import {Grid}from '@material-ui/core'
import Main from './Main/Main';
import google from '../../images/logos/google.png'
import airbnb from '../../images/logos/airbnb.png'
import netflix from '../../images/logos/netflix.png'
import stack from '../../images/logos/slack.png'
import uber from '../../images/logos/uber.png'
import Services from './Services/Services';
import OurWorks from './OurWorks/OurWorks';
import Footer from './Footer/Footer';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
const Home = () => {
  return (
    <>
      <div className="home_wrapper">
          <Main />
      </div>
      <Grid container
        className="container" justify="space-between"
      >
         <img className="org_logo" src={stack} alt=""/>
         <img className="org_logo" src={google} alt=""/>
         <img className="org_logo" src={uber} alt=""/>
         <img className="org_logo" src={netflix} alt=""/>
         <img className="org_logo" src={airbnb} alt=""/>
      </Grid>
      <Services />
      <OurWorks />
      <ClientsFeedback/>
      <Footer/>
    </>
  );
};

export default Home;