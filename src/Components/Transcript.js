import React from 'react'
import '../Style/Transcript.css'

const data ={
    "SPEAKER_00": [
        
        [   
            7.264687500000001,
            13.052812500000002,
            "favourite episode",
            [
                {
                    "label": "POSITIVE",
                    "score": 0.9995368719100952
                }
            ],
            [
                0.07335834,
                0.20300917,
                0.00084516,
                0.34957823,
                0.0374816,
                0.01320395,
                0.01929657,
                0.30322698
            ]
        ],
        [   
            7.264687500000001,
            13.052812500000002,
            "favourite episode",
            [
                {
                    "label": "POSITIVE",
                    "score": 0.9995368719100952
                }
            ],
            [
                0.07335834,
                0.20300917,
                0.00084516,
                0.34957823,
                0.0374816,
                0.01320395,
                0.01929657,
                0.30322698
            ]
        ],
        [   
            7.264687500000001,
            13.052812500000002,
            "favourite episode",
            [
                {
                    "label": "POSITIVE",
                    "score": 0.9995368719100952
                }
            ],
            [
                0.07335834,
                0.20300917,
                0.00084516,
                0.34957823,
                0.0374816,
                0.01320395,
                0.01929657,
                0.30322698
            ]
        ],
        [   
            7.264687500000001,
            13.052812500000002,
            "favourite episode",
            [
                {
                    "label": "POSITIVE",
                    "score": 0.9995368719100952
                }
            ],
            [
                0.07335834,
                0.20300917,
                0.00084516,
                0.34957823,
                0.0374816,
                0.01320395,
                0.01929657,
                0.30322698
            ]
        ],

    ]
}
const getEmoji = (emotion) => {
    
    switch (emotion) {
      case 'happy':
        return '😄';
      case 'sad':
        return '😞';
      case 'NEUTRAL':
        return '😐';
      default:
        return '😐';
    }
  };


    
const data2= data.SPEAKER_00;
console.log(data2)
console.log(data2[0])


function Transcript() {
  return (
    <div>
      {Object.keys(data).map((speaker, index) => (
        <div key={index}>
          <p className="SpeakerName">{speaker}</p>
          <ul>
            {data[speaker].map((item, itemIndex) => (
              <div key={itemIndex}>
                    <div className="d-flex flex-row justify-content-around text-bg-light">
                        <p>Start Time : {item[0]}</p>
                        <p>End Time :{item[1]}</p>                        
                    </div>
                    <div className="transcript-box d-flex flex-row justify-content-around">
                        <h2 className="Emojiie">EMotion</h2>
                        <h3 className="textt overflow-hidden align-content-lg-center">{item[2]}</h3>
                        <p className="label">{item[3][0].label}</p>
                       
                    </div>
                    
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
   
   
    
  )
}

export default Transcript