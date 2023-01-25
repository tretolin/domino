import './Domino.scss';
import { useState } from 'react';
import TopHeader from './components/TopHeader/TopHeader';
import Promotions from './components/Promotions/Promotions';
import Services from './components/Services/Services';
// import Installations from './components/Installations/Installations';
import Gallery from './components/Gallery/Gallery';
// import VideoSection from './components/VideoSection/VideoSection';
import Schedules from './components/Schedules/Schedules';
import Footer from './components/Footer/Footer';
import VideoSection from './components/VideoSection/VideoSection';
import VideoModal from "./components/VideoModal/VideoModal";

import { installations, gallery, videos } from '../src/data/images'

function App() {

  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState(0);

  const showVideo = (video) => {
    setShowModal(true);
    setVideo(video)
  }

  const closeVideo = () => {
    setShowModal(false);
    setVideo(0)

  }

  return (
    <>
      <TopHeader/>
      <VideoModal video={video} show={showModal} close={closeVideo}/>

      <div className="domino-app">
        <div className="main-container">
            <Promotions/>
            <Services/>
            {/* <Installations/> */}
            <Gallery title="Nuestras Instalaciones" images={installations}/>
            <Gallery title="Galería" size="800" images={gallery}/>
            {/* <VideoSection/> */}
            <VideoSection title="Videos" videos={videos} handleVideo={showVideo}/>
            <Schedules/>
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
