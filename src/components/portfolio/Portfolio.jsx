import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15474809-B-studio-Game-developer?utm_source=Clipboard_Shot&utm_campaign=creativemints&utm_content=B%20studio%20%2F%20Game%20developer&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=creativemints&utm_content=B%20studio%20%2F%20Game%20developer&utm_medium=Social_Share",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17761871-3D-Rooms-Work-Studio-Blender?utm_source=Clipboard_Shot&utm_campaign=realvjy&utm_content=3D%20Rooms%20-%20Work%20Studio%20-%20Blender&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=realvjy&utm_content=3D%20Rooms%20-%20Work%20Studio%20-%20Blender&utm_medium=Social_Share",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17772352-Saksake-Cryptocurrency?utm_source=Clipboard_Shot&utm_campaign=risangkuncoro&utm_content=Saksake%20-%20Cryptocurrency&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=risangkuncoro&utm_content=Saksake%20-%20Cryptocurrency&utm_medium=Social_Share",
  },
  {
    id: 4,
    image: IMG4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17772352-Saksake-Cryptocurrency?utm_source=Clipboard_Shot&utm_campaign=risangkuncoro&utm_content=Saksake%20-%20Cryptocurrency&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=risangkuncoro&utm_content=Saksake%20-%20Cryptocurrency&utm_medium=Social_Share",
  },
  {
    id: 5,
    image: IMG5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17769624-Dylon-Analytical-Dashboard?utm_source=Clipboard_Shot&utm_campaign=Afterglow-studio&utm_content=Dylon%20-%20Analytical%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Afterglow-studio&utm_content=Dylon%20-%20Analytical%20Dashboard&utm_medium=Social_Share",
  },
  {
    id: 6,
    image: IMG6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17771247-The-Meetings-website-design?utm_source=Clipboard_Shot&utm_campaign=ui_migulko&utm_content=The%20Meetings%20website%20design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ui_migulko&utm_content=The%20Meetings%20website%20design&utm_medium=Social_Share",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
