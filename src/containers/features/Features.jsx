import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrust instantly',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus est magnam quae impedit laborum labore natus.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus est magnam quae impedit laborum labore natus.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus est magnam quae impedit laborum labore natus.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus est magnam quae impedit laborum labore natus.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. 
        Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
