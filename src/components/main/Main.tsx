import FirstSection from '../main/FirstSection';
import InfoSection from '../main/InfoSection';
import BuySection from '../main/BuySection';
import Footer from '../main/Footer';
import Header from "../main/Header";
import DataProvider from "../../context/Data";
import "../../styles/mainPage/mainImports.scss";

export default function Main() {

  return (
    <>
      <DataProvider>
          <Header />
          <main>
            <FirstSection />
            <InfoSection />
            <BuySection />
          </main>
          <Footer />
      </DataProvider>
    </>
  )
}