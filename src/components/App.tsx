import "../styles/App.scss"

import FirstSection from './FirstSection';
import InfoSection from './InfoSection';
import BuySection from './BuySection';
import Footer from './Footer';
import Header from "./Header";
import DataProvider from "../context/Data";

export default function App() {

  return(
    <>
      <DataProvider>
        <Header/>
        <main>
          <FirstSection/>
          <InfoSection/>
          <BuySection />
        </main>
        <Footer/>
      </DataProvider>
    </>
  )
}
