import React, { useState, useEffect } from 'react';
import './article.css';

const Article = ({ imgUrl, date, text,details }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.gpt3__box-container_article');
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`gpt3__box-container_article ${isVisible ? 'visible fadeInUp' : ''}`}>
      <div className="gpt3__box-container_article-image">
        <img src={imgUrl} alt="box_image" />
      </div>
      <div className={`gpt3__box-container_article-content ${isVisible ? 'visible' : ''}`}>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
          <p>{details}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Article;
