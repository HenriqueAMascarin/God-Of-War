import "../styles/App.scss"
import Header from './Header';
import FirstSection from './FirstSection';
import InfoSection from './InfoSection';
import BuySection from './BuySection';
import Footer from './Footer';

export default function App() {
  return(
    <>
      <Header/>
      <main>
        <FirstSection/>
        <InfoSection/>
        <BuySection/>
      </main>
      <Footer/>
    </>
  )
}
