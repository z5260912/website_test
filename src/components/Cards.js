import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what I have been up to!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* The "ul" section is what creates the rows of the cards */}
          {/* Insert a CardItem in the same ul section for more columns in the same row */}
          <ul className="cards__items">
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/blog'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Island of Mali in a private cruise'
              label='Luxury'
              path='/blog'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/img-3.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/blog'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Travel through the Island of Mali in a private cruise'
              label='Luxury'
              path='/blog'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Travel through the Island of Mali in a private cruise'
              label='Luxury'
              path='/blog'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
