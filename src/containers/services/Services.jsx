import React from 'react';
import Article from '../../components/article/Article';
import { box01, box02, box03, box04, box05, box06 } from './imports';
import './services.css';

const Services = () => {
  return (
    <div className="gpt3__box section__padding" id="services">
    <div className="gpt3__box-heading">
      <h1 className="gradient__text">Our Services</h1>
    </div>
    <div className="gpt3__box-container">
      <div className="gpt3__box-container_groupB">
      <Article imgUrl={box01}  text="Game development" details="It is the process of creating interactive digital experiences, combining design, programming, art, and sound to craft engaging games." />
        
        <Article imgUrl={box02}  text="Networking solutions "  details="It involve hardware and software to establish, manage, and secure communication between devices for efficient data sharing and connectivity."/>
        <Article imgUrl={box03}  text="Web & wasm " details="It is a binary instruction format enabling high-performance execution in web browsers, enhancing web app capabilities significantly." />
        <Article imgUrl={box04}  text=" Embedded"  details="It  refers to integrating specialized software or hardware within a larger system for specific functionality or improved performance."/>
        <Article imgUrl={box05}  text="Terminal user interface "  details="is a text-based interface that provides interactive access to a computer system through commands and text-based interactions."/>
        <Article imgUrl={box06}  text="Rust adoption " details="It is surging due to memory safety, performance, and system-level capabilities, attracting developers for safe and efficient programming." />
        
      </div>
    </div>
  </div>

  )
}

export default Services
