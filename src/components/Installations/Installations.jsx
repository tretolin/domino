import "./Installations.scss";
import { useState, useEffect } from 'react';
import { Subtitle } from "../../utils/utils";

const images = [
  'ins-01.jpg',
  'ins-02.jpg',
  'ins-03.jpg',
  'ins-04.jpg',
  'ins-05.jpg',
  'ins-06.jpg',
  'ins-07.jpg',
]

// let counter = 0;

// const next = (inc) => {
//   console.log('ADD', inc)
//   counter = counter + inc;
// }

const Installations = () => {

  const [slide, setSlide] = useState(0);

  const moveSlide = (e) => {
    const {id} = e.target;
    setSlide(id);
  }

  return (
    <section id="gallery" className="text-center">
      <Subtitle title="Instalaciones"/>

      <div className="gallery-slider">
        <div className="gallery-container">
            <div className="slide-group" style={{ translate: `${slide * -100}%` }}>
              {
                images.map((img, index) => <img src={`/images/installations/${img}`} key={index} alt="Dominó" width="100%" />)
              }
            </div>
          </div>
          <div className="gallery-nav">
          {
            images.map( (img, index) => <div key={index} className={["slide-item "+ (slide === index ? "selected" : "unselected")].join()}
            
              id={index} onClick={ (index) => { moveSlide(index)} }>
              { slide === index ? '•' : '•'} </div> )
          } 

          </div>
      </div>

    </section>
  );
}

export default Installations;