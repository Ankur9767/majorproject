import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
  {
    text: 'talking',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  }, {
    text: 'talking',
    value: 64,
  },
  {
    text: 'mistake',
    value: 110,
  },
  {
    text: 'thought',
    value: 160,
  },
  {
    text: 'bad',
    value: 40,
  },
]


function Wordcloud() {
  return <ReactWordcloud words={words} />
}

export default Wordcloud