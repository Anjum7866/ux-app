import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="services">
    
    <div className="gpt3__whatgpt3-heading">
      <h1>Services</h1>
     
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="DevOps" text="DevOps training is a comprehensive program designed to equip individuals with the necessary skills and knowledge to excel in the field of DevOps, a collaborative approach that combines software development and IT operations." />
      <Feature title="Agile/ Scrum Training" text="Agile/Scrum training is a specialized program that equips individuals with the knowledge and skills to effectively adopt and implement Agile methodologies, with a particular focus on the Scrum framework." />
      
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="GitHub, Co-Pilot & ChatGPT" text="GitHub, Co-Pilot, and ChatGPT training are three distinct but interconnected domains that contribute to software development and AI-driven capabilities. " />
      <Feature title="Architecture, Design Patterns" text="Architecture training focuses on understanding and applying architectural principles, design concepts, and patterns to develop a well-structured and modular software architecture. " />
   
    </div>
    </div>
);

export default WhatGPT3;
