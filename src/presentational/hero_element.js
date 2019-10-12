import React from 'react';
import './home/home.css';

const HeroElement = (props) => (
  <div className={props.hero.container_class_name}>
    <div className={"hero_small hero_small_redux " + props.hero.class_name} key={props.hero.id}>
      <div className="hero_description">
        <h2>{props.hero.title}</h2>
        <p className="justify">{props.hero.description}</p>
      </div>
      <img src={'img/' + props.hero.img_name + '.png'} alt="Trusiaczek" />
    </div>
  </div>
);

export default HeroElement;

