import "./VideoModal.scss";
import React from "react";

const VideoModal = (props) => {

    const videoURL = (name) => {
      return '/video/'+name
    }

  return (
    props.show ? 
      <section id="video-container">
          <div className="video-modal">
            <video src={ videoURL(props.video.video)} width="100%"
            poster={props.video.thumb}
            controls loop autoPlay></video>
            <div className="close-video text-center" onClick={ props.close }>Regresar</div>
          </div>
        </section> : <></>
  );
}

export default VideoModal;
