import './App.css';
import Alerts from './Components/Alerts';
import CookieBanner from './Components/CookieBanner';
import DownloadApp from './Components/DownloadApp';
import FirstCard from './Components/FirstCard';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import FourthCard from './Components/FourthCard';
import Header from './Components/Header';
import MyMarquee from './Components/MyMarquee';
import Nav2 from './Components/Nav2';
import Navbaar from './Components/Navbaar';
import News from './Components/News';
import SecondCard from './Components/SecondCard';
import ThirdCard from './Components/ThirdCard';

function App() {
  const navItems = ["home", "features", "pricing", "blog", "contact"];
  

  return (
    <>
    {/* <Navbaar navItems={navItems}/> */}
    <CookieBanner/>
    <Nav2/>
     <Header/>
     {/* <MyMarquee/>    */}
     <FirstCard/>
     <SecondCard/>
     <ThirdCard />
     {/* <FourthCard/> */}
     {/* <Alerts/> */}
     {/* <DownloadApp/> */}
     {/* <News/> */}
     {/* <Footer/> */}
     <Footer2/>

    </>
  );
}

export default App;
