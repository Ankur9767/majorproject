import React from 'react'
import LineChart from './charts/LineChart'
import '../Style/Dashboard.css'
import LineCharttt from './charts/LineCharttt';
import Wordcloud from './charts/Wordcloud';
import Emoji from './Emoji'

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
    <div className="Emojiis">
    <div className="audioEmoji">
    <p>Result from Audio</p>
      <Emoji />
    </div>
    <div className="audioEmoji2">
    <p>Result from Text</p>
      <Emoji />
    </div>

    </div>
    <div className="middlevala">
    <div className="wordcloud">
    <p> Wordcloud</p>
      <Wordcloud />
    </div>
    <div className="text-transcript">
      <p>text-transcript</p>
    </div>

    </div>
    <div className="models">
    <div className="LstmModel">
      <p>LSTM model</p>
      <LineChart />
    </div>
    <div className="LstmModel">
      <p>LSTM model</p>
      <LineChart />
    </div>
    <div className="LstmModel">
      <p>LSTM model</p>
      <LineChart />
    </div>



    </div>
    
    </div>
      
    </div>
  )
}

export default Dashboard