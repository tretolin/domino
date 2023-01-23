import "./VideoSection.scss";
import React from "react";
import { Subtitle } from "../../utils/utils";

const VideoSection = () => {

  const thumbs = [
    "/video/thumb-01.jpg",
    "/video/thumb-02.jpg",
    "/video/thumb-03.jpg"
  ]

  return (
    <section id="video-section" className="text-center">
      <Subtitle title="Videos"/>
      <div className="video-list">
        {
        
        thumbs.map(
          thumb =>  <div className="video-thumb" style={ { backgroundImage: `url(${thumb})` } }></div>
          )
        }
      </div>
    </section>
  );
}

export default VideoSection;
