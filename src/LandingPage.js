import React, {useState,useContext} from 'react';
import NewsletterBanner from './NewsletterBanner'


import LoadFeedButton from './LoadFeedButton';


function LandingPage() {

  console.log(process.env.REACT_APP_BACKEND_URL)

  return (

   

    <div className="LandingPage">
      
     

      <NewsletterBanner 
        image = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-8.jpg'
              
      />

    
    </div>
   
  );
}

export default LandingPage;