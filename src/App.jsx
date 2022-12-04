import './css/App.css';
import './css/font-face.css';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import InfoSection from './components/InfoSection';
import EnemySection from './components/EnemySection';
import BuySection from './components/BuySection';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Header/>
      <main>
        <FirstSection/>
        <InfoSection/>
        <EnemySection/>
        <BuySection/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
