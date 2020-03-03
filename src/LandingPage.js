import React, {useState,useContext} from 'react';
import AppContext from './AppContext';

import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';
import Banner from './Banner.js';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';
import NewsletterBanner from './NewsletterBanner'

import LoadButton2 from './LoadButton2'
import LoadFeedButton from './LoadFeedButton';
import FeedForm from './FeedForm';
import b from './b.jpg';


function LandingPage() {

  console.log(process.env.REACT_APP_BACKEND_URL)

  return (

   

    <div className="LandingPage">
      
     

      <NewsletterBanner 
        image = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-8.jpg'
              
      />

      <center>
        <LoadFeedButton />
      </center>

      <FeedForm/>
      
    </div>
   
  );
}

export default LandingPage;