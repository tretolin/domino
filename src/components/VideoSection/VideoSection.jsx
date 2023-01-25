import "./VideoSection.scss";
// import React, { useState } from "react";
import { Subtitle } from "../../utils/utils";

const VideoSection = (props) => {


  const videoData = props.videos;

  const selectVideo = video => {
    props.handleVideo(video)
    // setVideo(videoName)
  }

  return (
    <section id="video-section" className="text-center">
      <Subtitle title="Videos"/>
      <div className="video-list">
        {
        
        videoData.map(
          (video, index) =>  <div className="video-thumb" key={index}
          style={ { backgroundImage: `url(${video.thumb})` } }
          onClick={ () => selectVideo(video) }
        ></div>
          )
        }
      </div>
    </section>
  );
}

export default VideoSection;
