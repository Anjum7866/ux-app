import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="services">
    
    <div className="gpt3__whatgpt3-heading">
      <h1>Services</h1>
     
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="DevOps" text="DevOps training is a comprehensive program designed to equip individuals with the necessary skills and knowledge to excel in the field of DevOps, a collaborative approach that combines software development and IT operations. This training focuses on fostering a deep understanding of automation, continuous integration and deployment, cloud computing, containerization, configuration management, and various tools and methodologies essential for streamlining the software development lifecycle. Participants gain hands-on experience with industry-leading technologies, learn to bridge the gap between development and operations teams, enhance collaboration, and drive efficiency and innovation within organizations, making them valuable assets in the modern digital landscape." />
      <Feature title="Agile/ Scrum Training" text="Agile/Scrum training is a specialized program that equips individuals with the knowledge and skills to effectively adopt and implement Agile methodologies, with a particular focus on the Scrum framework. This training covers the principles, values, and practices of Agile, emphasizing flexibility, collaboration, and iterative development. Participants learn how to break down projects into manageable units called sprints, define clear goals, prioritize tasks, and empower self-organizing teams. They gain a deep understanding of Scrum artifacts such as user stories, backlog, and burndown charts, as well as Scrum ceremonies like daily stand-ups, sprint planning, review, and retrospective meetings. Agile/Scrum training cultivates adaptability, transparency, and customer-centricity, enabling organizations to deliver high-quality products faster, respond to changes more effectively, and continuously improve their processes." />
      
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="GitHub, Co-Pilot & ChatGPT" text="GitHub, Co-Pilot, and ChatGPT training are three distinct but interconnected domains that contribute to software development and AI-driven capabilities. GitHub, a widely-used platform, provides a collaborative environment for version control, source code management, and team collaboration. It enables developers to share, review, and iterate on code efficiently, fostering open-source collaboration and accelerating software development processes. Co-Pilot, on the other hand, is an AI-powered coding assistant developed by OpenAI. Trained on vast repositories of code, it assists developers by providing context-aware code suggestions, auto-completions, and even generating code snippets, enhancing productivity and reducing repetitive coding tasks. ChatGPT, the AI model behind this conversation, has been trained on a diverse range of text data and can generate human-like responses to user queries. It has applications in virtual assistants, customer support, content generation, and more. By leveraging these technologies, developers can benefit from efficient collaboration, intelligent code assistance, and conversational AI capabilities, leading to enhanced productivity, code quality, and innovative solutions." />
      <Feature title="Architecture, Design Patterns" text="Architecture training focuses on understanding and applying architectural principles, design concepts, and patterns to develop a well-structured and modular software architecture. It covers topics such as architectural styles, layers, components, and deployment strategies. Design Patterns training delves into proven solutions to common software design problems, equipping developers with reusable patterns to enhance code quality, flexibility, and extensibility." />
   
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="Tdd Approch" text="TDD training emphasizes a test-first approach, where developers write tests before implementing functionality. It teaches the process of writing small, automated tests to validate code, driving the development process and ensuring code correctness, reliability, and maintainability. By combining these trainings, professionals gain the skills to design scalable architectures, apply best practices through patterns, and build high-quality software through a disciplined and test-driven development approach." />
   
    </div>
  </div>
);

export default WhatGPT3;
