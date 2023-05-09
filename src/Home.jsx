import './home.css';
import { Header } from './components/Header/Header';
import { Text } from './components/Text/Text';
import { Manifest } from './components/Manifest/Manifest';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Implementation } from './components/Implementation/Implementation';
import { Cycle } from './components/Cycle/Cycle';
import { Publications } from './components/Publications/Publications';
import { Footer } from './components/Footer/Footer';
import { Coordination } from './components/Coordination/Coordination';
import banner from "./assets/banner.png";

export const Home = () => {
  return (
    <div className="App">
      <Header/>
      <div className="bannerGOFAIR">
        <img src={banner} alt="Banner Rede GO FAIR AGRO"/>
      </div>
      <Text/>
      <Manifest/>
      <AboutUs/>
      <Implementation/>
      <Cycle/>
      {/* <Publications/> */}
      <Coordination/>
      <Footer/>
    </div>
  );
} 

