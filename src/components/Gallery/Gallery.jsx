import "./Gallery.scss";
import { useState, useEffect } from 'react';
import { Subtitle } from "../../utils/utils";

let counter = 0;

const next = (inc) => {
  console.log('ADD', inc)
  counter = counter + inc;
}

const Gallery = (props) => {

  const images = props.images;

  const size = props.size ? { display: 'inline-block', maxWidth: '800px' } : {};

  const [slide, setSlide] = useState(0);

  const moveSlide = (e) => {
    const {id} = e.target;
    setSlide(id);
  }

  return (
    <section id="gallery" className="text-center">
      <Subtitle title={props.title}/>

      <div className="gallery-slider" style={size}>
        <div className="gallery-container">
            <div className="slide-group" style={{ translate: `${slide * -100}%` }}>
              {
                images.map((img, index) => <img src={`/images/${img}`} key={index} alt="Dominó" width="100%" />)
              }
            </div>
          </div>
          <div className="gallery-nav">
          {
            images.map( (img, index) => <div key={index} className={["slide-item "+ (slide == index ? "selected" : "unselected")].join()}
            
              id={index} onClick={ (index) => { moveSlide(index)} }>
              { slide === index ? '•' : '•'} </div> )
          } 

          </div>
      </div>

    </section>
  );
}

export default Gallery;