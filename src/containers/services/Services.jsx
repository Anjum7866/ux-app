import React from 'react';
import Article from '../../components/article/Article';
// import { box01, box02, box03, box04, box05 } from './imports';
import './services.css';

const Services = () => (
  <div className="gpt3__box section__padding" id="box">
    <div className="gpt3__box-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are boxging about it.</h1>
    </div>
    <div className="gpt3__box-container">
      <div className="gpt3__box-container_groupA">
        {/* <Article imgUrl={box01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
      <div className="gpt3__box-container_groupB">
        <Article imgUrl={box02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={box03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={box04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={box05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Services;
