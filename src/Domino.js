import './Domino.scss';

import TopHeader from './components/TopHeader/TopHeader';
import Promotions from './components/Promotions/Promotions';
import Services from './components/Services/Services';
import Installations from './components/Installations/Installations';
import Gallery from './components/Gallery/Gallery';
import VideoSection from './components/VideoSection/VideoSection';
import Schedules from './components/Schedules/Schedules';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="domino-app">

      <div className="main-container">
          <TopHeader/>
          <Promotions/>
          <Services/>
          <Installations/>
          <Gallery/>
          <VideoSection/>
          <Schedules/>
          <Footer/>
      </div>

    </div>
  );
}

export default App;
