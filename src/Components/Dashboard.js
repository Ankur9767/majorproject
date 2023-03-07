import React from 'react'
import LineChart from './charts/LineChart'
import '../Style/Dashboard.css'
import LineCharttt from './charts/LineCharttt';
import Wordcloud from './charts/Wordcloud';
import Emoji from './Emoji'
import Transcript from './Transcript';

function Dashboard() {
  const data = [
    { label: 'Happy', value: 25 },
    { label: 'Sad', value: 10 },
    { label: 'Angry', value: 15 },
    { label: 'Excited', value: 30 },
  ];
  return (
    <div>
    <div className="container-fluid d-flex flex-row">  

    
    {/* <div className="middlevala">
    {/* <div className="wordcloud">
    <p> Wordcloud</p>
      <Wordcloud />
    </div> */} 

    <div className="text-transcript">
      <p><Transcript /></p>
    </div>

    </div>
    </div>
    


    
    
   
  )
}

export default Dashboard