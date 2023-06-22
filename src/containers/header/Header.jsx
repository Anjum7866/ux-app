import React from 'react';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__margin" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Devops Institute, Scrum  & Design Patterns</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='people'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

  
  </div>
);

export default Header;
