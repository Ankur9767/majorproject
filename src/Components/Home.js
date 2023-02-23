import React from 'react';
import '../Style/Home.css'
import Fileupload from './Fileupload';
import Emoji from './Emoji';
import Navbar from './Navbar';

function Home() {
  return (
    <>     
       <div className="container-fluid m-0">
        <p className="Logo"> Speech Emotion Detector </p>
       </div>
       
        <Fileupload />

    </>
  )
}

export default Home;