import React from 'react';
import Card from './Card';
import CardLayout from './CardLayout';
import LoadFeedButton from './LoadFeedButton';

const Adventures = (prop) => {

    return(
        <div>
                <h1>Adventures</h1>
            <CardLayout>
            <Card
            title = 'Biking'
            description = 'biking at Qudra Lake for fun'
            groupsize = "Limited to 10"
            buttonLabel = 'Join'
            image = 'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            
            />
            <Card
            title = 'Camping'
            description = 'Camping at Qudra Lake for fun'
            groupsize = "Limited to 10"
            buttonLabel = 'Join'
            image = 'https://images.unsplash.com/photo-1452473767141-7c6086eacf42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            
            />

<Card
            title = 'Picnic'
            description = 'Picnic at JLT parkside'
            buttonLabel = 'Join'
            image = 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            
            />

<Card
            title = 'Trekking'
            description = 'Take a Walk in Desert'
            buttonLabel = 'Join'
            image = ' https://images.unsplash.com/photo-1457264635001-828d0cbd483e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            
            />

<Card
            title = 'Bonfire'
            description = 'Dance Around a Bonfire at Love Lake'
            buttonLabel = 'Join'
            image = 'https://images.unsplash.com/photo-1567463330419-d65c673554c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            
            />
            </CardLayout>
            <center>
        <LoadFeedButton />
      </center>
      
            
        </div>
    )
}

export default Adventures;