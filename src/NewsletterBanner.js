import React, { useState } from 'react';

const NewsletterBanner = (prop) => {

    const style= {
        backgroundImage: `url(${prop.image})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '600px'
    }

    const [state, setState] = useState({ saved: false });

    const save = () => {
        setState({ ...state, saved: true })
    }

    return (
        <div className="jumbotron" style={style}>
        <div className="container" style={{"max-width": "300px"}}>
          <h1 className="hello">Adventure Starts</h1>

      </div>
      </div>
    )
}

export default NewsletterBanner;