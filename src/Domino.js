import './Domino.scss';

import TopHeader from './components/TopHeader/TopHeader';
import Promotions from './components/Promotions/Promotions';
import Services from './components/Services/Services';
// import Installations from './components/Installations/Installations';
import Gallery from './components/Gallery/Gallery';
// import VideoSection from './components/VideoSection/VideoSection';
import Schedules from './components/Schedules/Schedules';
import Footer from './components/Footer/Footer';
import VideoSection from './components/VideoSection/VideoSection';

import { installations, gallery } from '../src/data/images'

function App() {
  return (
    <>
      <TopHeader/>
      <div className="domino-app">
        <div className="main-container">
            <Promotions/>
            <Services/>
            {/* <Installations/> */}
            <Gallery title="Nuestras Instalaciones" images={installations}/>
            <Gallery title="Galería" size="800" images={gallery}/>
            {/* <VideoSection/> */}
            <VideoSection/>
            <Schedules/>
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
