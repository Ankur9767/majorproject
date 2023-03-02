import React from 'react';
import '../Style/Home.css'
import Fileupload from './Fileupload';
import Emoji from './Emoji';


function Home() {
  return (
    <>     
       <div className="bg-info">
        <p className="Logo"> Speech Emotion Detector </p>
       </div>
       <div className="mt-5">
        <Fileupload />
        </div>

    </>
  )
}

export default Home;